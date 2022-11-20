import { StyleSheet } from 'react-native';
import colors from './commons/colors'
import fontSizes from './commons/fontSizes'

export const CommonOptions = { colors, fontSizes }
export default (callback) => StyleSheet.create(callback(CommonOptions))