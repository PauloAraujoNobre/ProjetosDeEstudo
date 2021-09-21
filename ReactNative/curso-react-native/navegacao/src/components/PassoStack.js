import React from 'react';
import {Text, View, Button} from 'react-native';

export default props => {
  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        {props.voltar ? (
          <Button
            title="Voltar"
            onPress={() => props.navigation.goBack()}></Button>
        ) : (
          false
        )}
        {props.avancar ? (
          <Button
            title="Avançar"
            onPress={() =>
              props.navigation.navigate(props.avancar, props.avancarParams)
            }></Button>
        ) : (
          false
        )}
      </View>
      <View style={{flex: 1}}>{props.children}</View>
    </View>
  );
};
