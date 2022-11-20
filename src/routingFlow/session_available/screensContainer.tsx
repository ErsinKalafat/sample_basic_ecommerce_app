import React from "react";
import { TouchableOpacity, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch, faUser, faHome, faCartPlus } from "@fortawesome/free-solid-svg-icons";

import { Home } from '../../pages';

const TabScreen = createMaterialTopTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: ({ tintColor }) => (
                    <FontAwesomeIcon icon={faHome} size={27} color="#ac9596" />
                ),
                title: 'aa'
            },
            title: 'bb'
        },
        Flow: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: 'Akış',
                tabBarIcon: ({ tintColor }) => (
                    <FontAwesomeIcon icon={faSearch} size={27} color="#ac9596" />
                ),
            },
        },
        Search: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: 'Ara',
                tabBarIcon: ({ tintColor }) => (
                    <FontAwesomeIcon icon={faCartPlus} size={27} color="#ac9596" />
                ),
            },
        },
        Profile: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: '',
                tabBarIcon: ({ tintColor }) => (
                    <FontAwesomeIcon icon={faUser} size={27} color="#ac9596" />
                ),
            },
        },
    },
    {
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,

        tabBarOptions: {
            showIcon: true,
            showLabel: false,
            tabBarLabel: false,
            activeTintColor: '#000',
            inactiveTintColor: '#FEF4F4',
            style: {
                backgroundColor: '#FEF4F4',
                borderTopWidth: 1,
                borderTopColor: '#ac9596',
                paddingVertical: 10
            },
            labelStyle: {
                textAlign: 'center',
            },
            indicatorStyle: {
                borderBottomColor: '#231f20',
                borderBottomWidth: 3,
            },
        },
    },
);
const stackNavigator = createStackNavigator({
    TabScreen: {
        screen: TabScreen,
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#FEF4F4',
                borderBottomWidth: 1, 
                borderBottomColor: '#ac9596',
            },
            headerTitleStyle: {
                alignSelf: 'center'
            },
            headerLeft: () => <></>,
            headerRight: () => (
                <View style={{ paddingRight: 20 }}>
                    <TouchableOpacity onPress={() => alert('Search')}>
                        <FontAwesomeIcon icon={faSearch} size={25} color='#231f20' />
                    </TouchableOpacity>
                </View>
            ),
            headerTintColor: '#231f20',
            title: 'Anasayfa',
        },
    },
});

const ScreensContainer = createAppContainer(stackNavigator);

export default ScreensContainer

