// React Native
import {
  SafeAreaView
} from 'react-native';
// React Navite Paper
import { PaperProvider } from 'react-native-paper';
// Screens
import {
  //BoxObjectModelScreen,
  //CounterM3Screen,
  //CounterScreen,
  DimensionsScreen,
  //HelloWorldScreen
} from './src/presentation/screens';
import IonIcons from 'react-native-vector-icons/Ionicons';


export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: ( props ) => <IonIcons { ...props } />
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {/*<HelloWorldScreen name='Camilo López' />*/}
        {/*<CounterScreen />*/}
        {/*<CounterM3Screen />*/}
        {/*<BoxObjectModelScreen />*/}
        <DimensionsScreen />
      </SafeAreaView>
    </PaperProvider>
  );
}
