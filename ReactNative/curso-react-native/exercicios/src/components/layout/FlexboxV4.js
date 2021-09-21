import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Quadrado from './Quadrado';

import style from '../style';

export default props => {
  return (
    <View style={styleSheet.FlexV4}>
      <View style={styleSheet.V0} />
      <View style={styleSheet.V1} />
      <View style={styleSheet.V2} />
      <View />
    </View>
  );
};

const styleSheet = StyleSheet.create({
  FlexV4: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: '#000',
  },
  V0: {
    height: 300,
    backgroundColor: '#00F',
  },
  V1: {
    flexGrow: 9,
    backgroundColor: '#F00',
  },
  V2: {
    flexGrow: 1,
    backgroundColor: '#0F0',
  },
});
