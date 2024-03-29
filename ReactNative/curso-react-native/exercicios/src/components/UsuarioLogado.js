import React from 'react';
import {View, Text} from 'react-native';

import If from './If';

import style from './style';

export default props => {
  const usuario = props.usuario || {};

  return (
    <>
      <If teste={usuario && usuario.nome && usuario.email}>
        <Text style={style.txtG}>Usuario Logado</Text>
        <Text style={style.txtG}>
          {usuario.nome} - {usuario.email}
        </Text>
      </If>
    </>
  );
};
