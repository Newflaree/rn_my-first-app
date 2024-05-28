// React Native
import {
  SafeAreaView
} from 'react-native';
// Screens
import {
  CounterScreen,
  HelloWorldScreen
} from './src/presentation/screens';


export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/*<HelloWorldScreen name='Camilo López' />*/}
      <CounterScreen />
    </SafeAreaView>
  );
}
