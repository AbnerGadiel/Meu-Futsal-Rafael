import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Lista from './screens/Lista';
import Detalhes from './screens/Detalhes';
import Jogo from './screens/Jogo';
import Dev from './screens/Dev';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Jogadores" component={Lista}/>
        <Stack.Screen name="Detalhes" component={Detalhes}/>
        <Stack.Screen name="Jogo" component={Jogo}/>
        <Stack.Screen name="Dev" component={Dev}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
