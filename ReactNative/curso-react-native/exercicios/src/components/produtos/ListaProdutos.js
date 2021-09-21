import React from 'react';
import {View, Text} from 'react-native';

import Produtors from './produtos';

import style from '../style';
import produtos from './produtos';

export default props => {
  function obterLista() {
    return produtos.map(p => {
      return (
        <Text key={p.id}>
          ({p.id}) {p.nome} custa R${p.preco}
        </Text>
      );
    });
  }

  return (
    <>
      <Text style={style.txtG}>Lista de Produtos</Text>
      {obterLista()}
    </>
  );
};
