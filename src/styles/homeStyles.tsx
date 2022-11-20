import CommonOptions from "../helpers/CustomStyleSheet"

import { Dimensions } from 'react-native';
const { width: deviceWidth } = Dimensions.get("window");

const imageSize: number = deviceWidth / 2 - 40;

export const HomeStyles = CommonOptions((common) => ({
  wrapper: {
    padding: 12,
  },
  productInfoWrapper: {
    alignItems: 'center'
  },
  productName: {
    fontSize: common.fontSizes.small,
    color: '#231f20',
    marginTop: 7
  },
  image: {
    width: imageSize,
    height: imageSize,
    borderWidth: 1,
    borderRadius: 17,
    borderColor: common.colors.primaryBorderColor
  },
  productList: {
    alignSelf: 'center',
    marginTop: 20
  }
}))
