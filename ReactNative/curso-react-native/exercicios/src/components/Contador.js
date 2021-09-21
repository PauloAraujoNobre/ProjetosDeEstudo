import React, {useState} from 'react';
import {Text, Button} from 'react-native';

import style from './style';

export default ({ini = 0, step = 1}) => {
  const [num, setNum] = useState(ini);

  const inc = () => setNum(num + step);
  const dec = () => setNum(num - step);

  return (
    <>
      <Text style={style.txtG}>{num}</Text>
      <Button title="+" onPress={inc} />
      <Button title="-" onPress={dec} />
    </>
  );
};
