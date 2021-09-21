import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import style from '../style';

export default props => {
  return (
    <>
      <View style={styleSheet.Botoes}>
        <Button title="+" onPress={props.inc} />
        <Button title="-" onPress={props.dec} />
      </View>
    </>
  );
};

const styleSheet = StyleSheet.create({
  Botoes: {
    flexDirection: 'row',
  },
});
