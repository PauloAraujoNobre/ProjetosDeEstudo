import React from 'react';
import {View, Text, FlatList} from 'react-native';

import produtos from './produtos';

import style from '../style';

export default props => {
  const produtoRender = ({item: p}) => {
    return (
      <Text>
        ({p.id}) {p.nome} custa {p.preco}
      </Text>
    );
  };

  return (
    <>
      <Text style={style.txtG}>Lista Produtos V2</Text>
      <FlatList
        data={produtos}
        keyExtractor={i => `${i.id}`}
        renderItem={produtoRender}
      />
    </>
  );
};
