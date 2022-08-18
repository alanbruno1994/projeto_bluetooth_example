import React from 'react';
import {NativeModules, Button, View} from 'react-native';

const {CalendarModule} = NativeModules;

const ListButton = () => {
  const onStatus = async () => {
    const value = await CalendarModule.getStatusBluetooth();
    console.log(value);
  };

  const onList = async () => {
    console.log(await CalendarModule.list());
  };

  return (
    <View>
      <Button title="Check Status" color="#841584" onPress={onStatus} />
      <Button title="Listar Pareados" color="#841584" onPress={onList} />
    </View>
  );
};

export default ListButton;
