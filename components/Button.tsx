import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Button: React.FC<{title: string; action: any}> = ({title, action}) => {
  return (
    <TouchableOpacity onPress={action}>
      <View style={style.container}>
        <Text style={style.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#5c5c5cff',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 10,
  },
  text: {
    color: '#edededff',
    textAlign: 'center',
  },
});

export default Button;
