import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={styleHeader.container}>
      <Text style={styleHeader.centerText}>Super Bluetooth</Text>
    </View>
  );
};
const styleHeader = StyleSheet.create({
  container: {
    backgroundColor: '#f20000ff',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    height: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  centerText: {
    textAlign: 'center',
    color: '#edededff',
  },
});

export default Header;
