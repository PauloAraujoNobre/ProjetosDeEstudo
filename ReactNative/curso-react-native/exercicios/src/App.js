import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';

import Primeiro from './components/Primeiro';
import CompPadrao, {Comp1, Comp2} from './components/Multi';
import MinMax from './components/MinMax';
import Aleatorio from './components/Aleatorio';
import Titulo from './components/Titulo';
import Botao from './components/Botao';
import Contador from './components/Contador';
import Pai from './components/indireta/Pai';
import ContadorV2 from './components/contador/ContadorV2';
import Diferenciar from './components/Diferenciar';
import ParImpar from './components/ParImpar';
import Familia from './components/relacao/Familia';
import Membro from './components/relacao/Membro';
import UsuarioLogado from './components/UsuarioLogado';
import ListaProdutos from './components/produtos/ListaProdutos';
import ListaProdutosV2 from './components/produtos/ListaProdutosV2';
import DigiteSeuNome from './components/DigiteSeuNome';
import Quadrado from './components/layout/Quadrado';
import FlexboxV1 from './components/layout/FlexboxV1';
import FlexboxV2 from './components/layout/FlexboxV2';
import FlexboxV3 from './components/layout/FlexboxV3';
import FlexboxV4 from './components/layout/FlexboxV4';
import Mega from './components/mega/Mega';

export default () => {
  return (
    <SafeAreaView style={style.App}>
      {/* <Primeiro />
      <Comp1 />
      <Comp2 />
      <CompPadrao />
      <MinMax min={3} max={20} />
      <Aleatorio min={1} max={900000} />
      <Titulo
        title={'Cadastro de Produto'}
        subtitle={'Tela de Cadastro do Produto'}
      />
      <Botao />
      <Contador />
      <Pai />
      <Pai />
      <ContadorV2 ini={10} />
      <Diferenciar />
      <ParImpar num={2} />
      <Familia>
        <Membro nome="Carlos" sobrenome="Alberto" />
        <Membro nome="Junim" sobrenome="Souza" />
        <Membro nome="Pimpi" sobrenome="Maromba" />
      </Familia>

      <Familia>
        <Membro nome="Ana" sobrenome="Silva" />
        <Membro nome="Julia" sobrenome="Silva" />
      </Familia>
      <UsuarioLogado usuario={{nome: 'Gui', email: 'gui@gmail.com'}} />
      <UsuarioLogado usuario={{nome: 'Paulo'}} />
      <UsuarioLogado usuario={{email: 'ana@gmail.com'}} />
      <ListaProdutos />
      <ListaProdutosV2 />
      <DigiteSeuNome />
      <FlexboxV1 />
      <FlexboxV2 />
      <FlexboxV3 />
      <FlexboxV4 />*/}
      <Mega qtdeNumero={12} />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
