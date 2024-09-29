
import React from 'react'
import { Stack } from 'expo-router';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useColorScheme } from '@/hooks/useColorScheme';



const _layout = () => {
    const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{headerShown: false}} />
        <Stack.Screen name="signup" options={{headerShown: false}} />
      </Stack>
    </ThemeProvider>
  )
}

export default _layout