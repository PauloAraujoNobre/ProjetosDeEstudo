import React from 'react';
import {View, Text, Platform} from 'react-native';

import style from './style';

export default props => {
  if (Platform.OS === 'android') {
    return (
      <View>
        <Text style={style.txtG}>Android</Text>
      </View>
    );
  }

  if (Platform.OS === 'ios') {
    return (
      <View>
        <Text style={style.txtG}>IOS</Text>
      </View>
    );
  }
};
