import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Quadrado from './Quadrado';

import style from '../style';

export default props => {
  return (
    <View style={styleSheet.FlexV1}>
      <Quadrado color="#0F0" />
      <Quadrado color="#00F" />
      <Quadrado color="#F00" />
      <Quadrado color="#F0F" />
      <Quadrado color="#0FF" />
      <Quadrado color="#FF0" />
    </View>
  );
};

const styleSheet = StyleSheet.create({
  FlexV1: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#000',
  },
});
