import React, {useState} from 'react';
import {View, Text} from 'react-native';

import Filho from './Filho';

import style from '../style';

export default props => {
  const [num, setNum] = useState(0);

  function exibirValor(numero) {
    setNum(numero);
  }

  return (
    <View>
      <Text style={style.txtG}>{`numero: ${num}`}</Text>
      <Filho max={60} min={1} funcao={exibirValor} />
    </View>
  );
};
