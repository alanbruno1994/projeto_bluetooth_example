import React, {useState} from 'react';
import {NativeModules, View} from 'react-native';
import Button from '../components/Button';
import RenderDevice, {Contents} from '../components/RenderDevice';
import StatusConnect from '../components/StatusConnect';

const {BluetoohModule} = NativeModules;

const Home = () => {
  const [contents, setContents] = useState<Contents[]>([]);
  const [isAlive, setIsAlive] = useState(false);

  const onList = async () => {
    const value: string[] = String(await BluetoohModule.list()).split('_!!_');
    setContents(
      value.map(element => {
        const array = element.split('%%%');
        return {
          name: array[0],
          addressMAC: array[1],
        };
      }),
    );
  };
  const onEnable = async () => {
    await BluetoohModule.enableBluetooth();
    console.log('1');
  };

  const onDisable = async () => {
    await BluetoohModule.disableBluetooth();
    console.log('2');
  };

  console.log(isAlive);
  return (
    <View>
      <StatusConnect isAlive={isAlive} setIsAlive={setIsAlive} />
      <Button title="List Paired" action={onList} />
      <RenderDevice contents={contents} />
      <Button
        title={isAlive === false ? 'Enable Bluetooth' : 'Disable Bluetooth'}
        action={isAlive ? onDisable : onEnable}
      />
    </View>
  );
};

export default Home;
