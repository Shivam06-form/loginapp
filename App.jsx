import {StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import Login from './Src/Pages/Login';
import Name from './Src/Pages/Name';
import Age from './Src/Pages/Age';
import Gender from './Src/Pages/Gender';
import MainPage from './Src/Pages/MainPage';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'dark-content'} />
      <MainPage />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
