import React from 'react';
import {View, Button, Text} from 'react-native';

import style from '../style';

export default props => {
  function gerarNumero(max, min) {
    const fator = max - min + 1;
    return parseInt(Math.random() * fator) + min;
  }

  return (
    <View>
      <Button
        title="Execute"
        onPress={function () {
          const n = gerarNumero(props.min, props.max);
          props.funcao(n);
        }}
      />
    </View>
  );
};
