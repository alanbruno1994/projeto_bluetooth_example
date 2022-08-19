import React, {useState} from 'react';
import {NativeModules, View} from 'react-native';
import Button from '../components/Button';
import RenderDevice, {Contents} from '../components/RenderDevice';
import StatusConnect from '../components/StatusConnect';

const {BluetoohModule} = NativeModules;

const Home = () => {
  const [contents, setContents] = useState<Contents[]>([]);

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

  console.log(contents);
  return (
    <View>
      <StatusConnect />
      <Button title="List Paired" action={onList} />
      <RenderDevice contents={contents} />
    </View>
  );
};

export default Home;
