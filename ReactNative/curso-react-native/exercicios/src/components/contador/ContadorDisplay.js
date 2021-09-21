import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import style from '../style';

export default props => {
  return (
    <View style={styleSheet.Display}>
      <Text style={[style.txtG, styleSheet.DisplayText]}>{props.num}</Text>
    </View>
  );
};

const styleSheet = StyleSheet.create({
  Display: {
    backgroundColor: '#000',
    padding: 20,
    width: 300,
  },
  DisplayText: {
    color: '#fff',
  },
});
