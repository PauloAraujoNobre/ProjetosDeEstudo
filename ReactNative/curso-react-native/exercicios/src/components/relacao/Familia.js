import React from 'react';
import {View, Text} from 'react-native';

import Membro from './Membro';

import style from '../style';

export default props => {
  return (
    <>
      <Text>[Inicio] Membros da Familia:</Text>
      {props.children}
      <Text>[Fim] Membros da Familia:</Text>
    </>
  );
};
