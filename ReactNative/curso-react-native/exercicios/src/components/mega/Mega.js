import React, {Component} from 'react';
import {Button, View, Text, TextInput} from 'react-native';

import MegaNumero from './MegaNumero';

import style from '../style';

export default class Mega extends Component {
  state = {
    qtdeNumero: this.props.qtdeNumero,
    numeros: [],
  };

  alterarQtdeNumero = qtde => {
    this.setState({qtdeNumero: +qtde});
  };

  gerarNumeroNaoContido = nums => {
    const num = parseInt(Math.random() * 60) + 1;
    return nums.includes(num) ? this.gerarNumeroNaoContido(nums) : num;
  };

  gerarNumeros = () => {
    const numeros = Array(this.state.qtdeNumero)
      .fill()
      .reduce(nums => [...nums, this.gerarNumeroNaoContido(nums)], [])
      .sort((a, b) => a - b);
    this.setState({numeros});
  };

  exibirNumeros = () => {
    const nums = this.state.numeros;

    return nums.map(num => {
      return <MegaNumero key={num} num={num} />;
    });
  };

  render() {
    return (
      <>
        <Text style={style.txtG}>Gerador de Mega-Sena</Text>
        <TextInput
          keyboardAppearance={'numeric'}
          style={{borderBottomWidth: 1}}
          placeholder="Qtde de Números"
          value={`${this.state.qtdeNumero}`}
          onChangeText={this.alterarQtdeNumero}
        />
        <Button title="Gerar" onPress={this.gerarNumeros} />
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          {this.exibirNumeros()}
        </View>
      </>
    );
  }
}
