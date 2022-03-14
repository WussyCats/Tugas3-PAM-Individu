import * as React from 'react';
import SearchPage from './././src/screens/SearchPage'
import ResultPage from './././src/screens/ResultPage'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SearchPage' screenOptions={{headerShown: false}}>
        <Stack.Screen name="SearchPage" component={SearchPage} />
        <Stack.Screen name="ResultPage" component={ResultPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;