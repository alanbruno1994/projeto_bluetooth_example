import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export type Contents = {
  name: string;
  addressMAC: string;
};

const RenderDevice: React.FC<{contents: Contents[]}> = ({contents}) => {
  return (
    <View>
      {contents.map((value, index) => {
        return value.addressMAC ? (
          <View style={style.container} key={index}>
            <Text style={style.text}>Name: {value.name}</Text>
            <Text style={style.text}>Address MAC: {value.addressMAC}</Text>
          </View>
        ) : (
          <></>
        );
      })}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    height: 80,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    justifyContent: 'center',
    paddingLeft: 10,
    backgroundColor: '#292929ff',
  },
  text: {
    color: '#edededff',
  },
});

export default RenderDevice;
