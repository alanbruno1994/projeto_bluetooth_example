/* eslint-disable react-hooks/exhaustive-deps */
import {NativeModules, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const {BluetoohModule} = NativeModules;

const StatusConnect: React.FC<{isAlive: boolean; setIsAlive: any}> = ({
  isAlive,
  setIsAlive,
}) => {
  useEffect(() => {
    setInterval(async () => {
      const state = await BluetoohModule.getStatusBluetooth();
      setIsAlive(state);
    }, 500);
  }, []);

  return (
    <View style={statusConnectStyle.container}>
      <Text style={statusConnectStyle.text}>Bluetooth Connect:</Text>
      <Text>{isAlive ? ' 👍' : ' 👎'}</Text>
    </View>
  );
};

const statusConnectStyle = StyleSheet.create({
  container: {
    height: 40,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
    paddingLeft: 10,
    backgroundColor: '#292929ff',
    flexDirection: 'row',
  },
  text: {
    color: '#edededff',
  },
});

export default StatusConnect;
