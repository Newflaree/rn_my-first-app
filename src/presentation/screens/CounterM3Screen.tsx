// React
import { useState } from 'react';
// React Native
import {
  Text,
  View
} from 'react-native';
// React Native Paper
import { FAB } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
// Styles
import { globalStyles } from '../theme';


export const CounterM3Screen = () => {
  const [ count, setCount ] = useState( 10 );

  const handlerCounter = ( value: number ) => {
    setCount( count + value )
  }

  const handlerResetCount = () => {
    setCount( 0 )
  }

  return (
    <View style={ globalStyles.centerContainer }>
      <Text style={ globalStyles.title }>
        { count }
      </Text>

      {/*<Icon name='accessibility-outline' size={ 30 } />*/}

      <FAB
        icon='add-outline'
        style={ globalStyles.fab }
        onPress={ () => handlerCounter( 1 ) }
        onLongPress={ handlerResetCount }
      />
    </View>
  );
}
