import React from 'react';
import {Text} from 'react-native';

export default ({min, max}) => {
  const random = parseInt(Math.random() * (max - min) + min);

  return <Text>Numero aleatorio: {random}</Text>;
};
