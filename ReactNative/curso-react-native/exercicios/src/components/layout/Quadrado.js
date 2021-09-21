import React from 'react';
import {View, Text} from 'react-native';

export default props => {
  const size = props.size || 50;

  return (
    <View
      style={{
        height: size,
        width: size,
        backgroundColor: props.color || '#000',
      }}
    />
  );
};
