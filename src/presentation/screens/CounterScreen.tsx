// React
import { useState } from 'react';
// React Native
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
// Components
import { PrimaryButton } from '../components';


export const CounterScreen = () => {
  const [ count, setCount ] = useState( 10 );

  const handlerCounter = ( value: number ) => {
    setCount( count + value )
  }

  const handlerResetCount = () => {
    setCount( 0 )
  }

  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>
        { count }
      </Text>

      <PrimaryButton
        label='Incrementar'
        onPress={ () => handlerCounter( 1 ) }
        onLongPress={ handlerResetCount }
      />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300'
  },
});
