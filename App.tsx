import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import Initial from './src/App';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Initial />
    </SafeAreaView>
  );
};
export default App;
