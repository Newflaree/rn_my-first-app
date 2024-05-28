// React
import { useState } from 'react';
// React Native
import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View
} from 'react-native';


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

      <Pressable
        onPress={ () => handlerCounter( 1 ) }
        onLongPress={ handlerResetCount }
        style={ ({ pressed }) => [
          styles.button,
          pressed && styles.buttonPress
        ]}
      >
        <Text style={ styles.buttonText }>
          Incrementar
        </Text>
      </Pressable>
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
  button: {
    backgroundColor: Platform.OS === 'android' ? '#5856D6' : 'white', 
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonPress: {
    backgroundColor: Platform.OS === 'android' ? '#4746AB' : 'white', 
  },
  buttonText: {
    color: Platform.OS === 'android' ? 'white' : '#4746AB'
  }
});
