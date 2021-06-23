import React, { useState, useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import Login from './src/screens/login';
import UserType from './src/screens/user-type';
import Register from './src/screens/register';
import HomeClient from './src/screens/home-clients';
import HomeMarket from './src/screens/home-market';
import Product from './src/screens/product';
import Receitas from './src/screens/receitas';
import Menu from './src/screens/menu';
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
        <Stack.Screen 
          options={{
            headerShown: false
          }}
          name="UserType" 
          component={UserType} 
        />
        <Stack.Screen 
          options={{
            headerShown: false
          }}
          name="Register" 
          component={Register} 
        />
         <Stack.Screen 
          options={{
            headerShown: false
          }}
          name="HomeClient" 
          component={HomeClient} 
        />
        <Stack.Screen 
          options={{
            headerShown: false
          }}
          name="HomeMarket" 
          component={HomeMarket} 
        />
        <Stack.Screen 
          options={{
            headerShown: false
          }}
          name="Product" 
          component={Product} 
        />
        <Stack.Screen 
          options={{
            headerShown: false
          }}
          name="Receitas" 
          component={Receitas} 
        />
        <Stack.Screen 
          options={{
            headerShown: false
          }}
          name="Menu" 
          component={Menu} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}