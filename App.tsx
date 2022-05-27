import React, { useCallback, useEffect, useState } from 'react';
import { Rajdhani_400Regular, Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';

import { StatusBar } from 'expo-status-bar';
import { Background } from './src/components/Background';
import { Routes } from './src/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_400Regular,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Background>
      <StatusBar style="light" />
      <Routes/>
    </Background>
  );
}
