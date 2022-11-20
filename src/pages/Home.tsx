import React, { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View, RefreshControl, ImageSourcePropType, NativeModules, LayoutAnimation } from "react-native";
import Products from '../actions/serviceActions/Products'
import { IProduct } from "../Interfaces"
import { CustomAlert, Spinner } from "../components";
import { HomeStyles, CommonStyles } from '../styles';
const { wrapper, productInfoWrapper, image: imageStyle, productName, productList: productListStyle } = HomeStyles


const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

const Home = () => {
  const [productList, setProductList] = useState<IProduct[]>([]);
  const [spinner, setSpinner] = useState(true);
  const [addedFavIdList, setAddedFavIdList] = useState(['']);

  useEffect(() => {
    setSpinner(true)
    fetchProducts().then(res => (res == 200) && setSpinner(false))
  }, []);

  const fetchProducts = () => {
    return new Promise((resolve, reject) => {
      Products.FetchProducts().then(data => {
        setProductList(data)
        resolve(200)
      }).catch(e => {
        console.log("Fetch Error : ", e)
        reject(e)
      })
    })
  }

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const onRefresh = React.useCallback(() => {
    setSpinner(true);
    fetchProducts().then(res => {
      if (res == 200) {
        wait(1000).then(() => setSpinner(false));
        setAddedFavIdList([''])
      }
    })
  }, []);

  const removeFromFavourites = (id) => {
    LayoutAnimation.linear();
    setAddedFavIdList(addedFavIdList.filter(el => el !== id))
  }

  const addToFavourites = (id) => {
    LayoutAnimation.configureNext({
      duration: 2000,
      create: { type: 'linear', property: 'opacity' },
      update: { type: 'spring', springDamping: 0.1 },
      delete: { type: 'linear', property: 'opacity' }
    });
    setAddedFavIdList([...addedFavIdList, id])
  }

  const favouriteControl = (id, isIdExistFavs) => {
    isIdExistFavs ? removeFromFavourites(id) : addToFavourites(id)
  }

  const renderProducts = (item) => {
    const { id, image, name } = item
    let isIdExistFavs = addedFavIdList.includes(id)
    let imageSource: ImageSourcePropType = isIdExistFavs ? require('../images/heart-solid-big.png') : require('../images/heart-line.png')


    return (
      <View>
        <TouchableOpacity
          onPress={() => favouriteControl(id, isIdExistFavs)}
          style={{ position: 'absolute', zIndex: 2, top: isIdExistFavs ? 2 : 5, right: isIdExistFavs ? 2 : 5, padding: 20 }}
        >
          <Image source={imageSource} resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => CustomAlert("Ürün Seçildi", name, "Tamam")}
          style={{ flex: 1 }}
        >
          <View style={wrapper}>
            <View style={productInfoWrapper}>
              <Image source={image} style={imageStyle} resizeMode="contain" />
              <Text style={productName}>{name}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  const renderContent = () => {
    return (
      <FlatList
        data={productList}
        renderItem={({ item }) => renderProducts(item)}
        refreshControl={
          <RefreshControl
            refreshing={spinner}
            onRefresh={onRefresh}
          />
        }
        style={productListStyle}
        numColumns={2}
        keyExtractor={item => item.id}
      />
    )
  }

  return (
    <SafeAreaView style={CommonStyles.container}>
      {spinner ? (
        <Spinner />
      ) :
        renderContent()
      }

    </SafeAreaView>
  )
}

export { Home };
