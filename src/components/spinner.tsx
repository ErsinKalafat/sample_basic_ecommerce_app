import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { CommonStyles } from '../styles';

const Spinner = ({size = 'large'}) => {
  return (
    <View style={CommonStyles.spinnerStyle}>
      <ActivityIndicator size={size} color='#cc4170' />
    </View>
  );
};

export { Spinner }
