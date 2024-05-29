// React Native
import {
  SafeAreaView
} from 'react-native';
// React Navite Paper
import { PaperProvider } from 'react-native-paper';
// Screens
import {
  CounterScreen,
  //HelloWorldScreen
} from './src/presentation/screens';


export const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        {/*<HelloWorldScreen name='Camilo López' />*/}
        <CounterScreen />
      </SafeAreaView>
    </PaperProvider>
  );
}
