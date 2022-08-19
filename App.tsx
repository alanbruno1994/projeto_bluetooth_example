/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';
import Header from './components/Header';
import Home from './screens/Home';

const App = () => {
  return (
    <SafeAreaView style={globalStyle.containter}>
      <StatusBar hidden={true} />
      <Header />
      <ScrollView>
        <Home />
      </ScrollView>
    </SafeAreaView>
  );
};

const globalStyle = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'red',
  },
  containter: {
    flex: 1,
    backgroundColor: '#0f0f0fff',
  },
});

export default App;
