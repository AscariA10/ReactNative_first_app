import React, { useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import RegisterScreen from './Screens/RegisterScreen';
import LoginScreen from './Screens/LoginScreen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Medium': require('./assets/Fonts/Roboto/Roboto-Medium.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      {/* <RegisterScreen /> */}
      <LoginScreen />
    </>
  );
}
