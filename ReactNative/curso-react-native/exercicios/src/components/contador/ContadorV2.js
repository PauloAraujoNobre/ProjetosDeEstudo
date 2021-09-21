import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ContadorDisplay from './ContadorDisplay';
import ContadorBotoes from './ContadorBotoes';

import style from '../style';

export default props => {
  const [num, setNum] = useState(props.ini);

  const inc = () => setNum(num + 1);
  const dec = () => setNum(num - 1);

  return (
    <>
      <Text style={style.txtG}>Contador</Text>
      <ContadorDisplay num={num} />
      <ContadorBotoes inc={inc} dec={dec} />
    </>
  );
};
