import React from 'react';
import {View, Text} from 'react-native';

import Filho from './Filho';

import style from '../style';

export default props => {
  let x = 13;
  let y = 17;

  return (
    <>
      <Filho a={x} b={y} />
      <Filho a={x + 10} b={y + 10} />
    </>
  );
};
