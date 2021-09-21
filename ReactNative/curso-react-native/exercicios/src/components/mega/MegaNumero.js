import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import style from '../style';

export default ({num}) => {
  return (
    <View style={styleSheet.Container}>
      <Text style={[style.txtG, styleSheet.Num]}>{num}</Text>
    </View>
  );
};

const styleSheet = StyleSheet.create({
  Container: {
    height: 50,
    width: 50,
    backgroundColor: '#F00',
    margin: 5,
    borderRadius: 25,
  },
  Num: {
    color: '#0FF',
  },
});
