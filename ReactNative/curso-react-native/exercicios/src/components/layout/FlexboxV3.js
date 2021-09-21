import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Quadrado from './Quadrado';

import style from '../style';

export default props => {
  return (
    <View style={styleSheet.FlexV1}>
      <Quadrado color="#0F0" size={20} />
      <Quadrado color="#00F" size={30} />
      <Quadrado color="#F00" size={40} />
      <Quadrado color="#F0F" size={50} />
      <Quadrado color="#0FF" size={60} />
      <Quadrado color="#FF0" size={70} />
    </View>
  );
};

const styleSheet = StyleSheet.create({
  FlexV1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 350,
    width: '100%',
    backgroundColor: '#000',
  },
});
