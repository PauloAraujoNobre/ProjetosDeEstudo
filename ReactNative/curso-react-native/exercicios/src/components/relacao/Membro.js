import React from 'react';
import {View, Text} from 'react-native';

import style from '../style';

export default props => {
  return (
    <View>
      <Text style={style.txtG}>
        {props.nome} {props.sobrenome}
      </Text>
    </View>
  );
};
