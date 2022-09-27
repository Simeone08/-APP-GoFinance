import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import * as SplashScreen from 'expo-splash-screen';

import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
}from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme';

import { Routes } from './src/routes';
import { AppRoutes } from './src/routes/app.routes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { SignIn } from './src/screens/SignIn';

import { AuthProvider, useAuth } from './src/hooks/auth';


export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  const { userStorageLoading } = useAuth();

  if(!fontsLoaded || userStorageLoading){
    return null;
  }

  SplashScreen.hideAsync();

  return (
    <ThemeProvider theme={theme}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <StatusBar style='light'/>

          <AuthProvider>
            <Routes />
          </AuthProvider>

        </GestureHandlerRootView>

    </ThemeProvider>  
  )
}