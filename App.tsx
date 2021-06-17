import React, { useState, useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import Login from './src/screens/login';
import * as Font from 'expo-font';
import 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const [isReady, setIsReady] = useState<Boolean>(false)

  async function loadingFonts() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
  }
  useEffect(() => {
    loadingFonts()
    setIsReady(true)
  }, [])

  if (!isReady) {
    return <AppLoading />;
  }

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          options={{
            headerShown: false
          }}
          name="Login" 
          component={Login} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}