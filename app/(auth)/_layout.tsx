
import React from 'react'
import { Stack } from 'expo-router';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useColorScheme } from '@/hooks/useColorScheme';
import { StatusBar } from 'expo-status-bar';



const AuthLayout = () => {
    const colorScheme = useColorScheme();
  return (
    <>
    <StatusBar backgroundColor='#161622' style='light'/>
        
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>

      <Stack>
        <Stack.Screen name="login" options={{headerShown: false}} />
        <Stack.Screen name="signup" options={{headerShown: false}} />
      </Stack>
    </ThemeProvider>
    </>
  )
}

export default AuthLayout