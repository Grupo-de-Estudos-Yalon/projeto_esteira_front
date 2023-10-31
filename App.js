// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/home/Home';
import { useFonts, Montserrat_900Black } from '@expo-google-fonts/montserrat'
import { OpenSans_400Regular } from '@expo-google-fonts/open-sans'
import { NotoSansJP_400Regular } from '@expo-google-fonts/noto-sans-jp'

const Stack = createNativeStackNavigator();

function App() {

  let [fontsLoaded, fontError] = useFonts({
    Montserrat_900Black,
    NotoSansJP_400Regular,
    OpenSans_400Regular
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={
            {
              headerShown: false
            }
          }>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;