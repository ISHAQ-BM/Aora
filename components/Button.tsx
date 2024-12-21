import {PressableProps, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { useThemeColor } from '@/hooks/useThemeColor';
import { ThemedText } from './ThemedText';

export type ThemedButtonProps = PressableProps & {
  lightColor?: string;
  darkColor?: string;
  onPress?:()=>void
};
const Button = ({ style,onPress, lightColor, darkColor, ...rest }: ThemedButtonProps) => {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return (
    <TouchableOpacity style={[{ backgroundColor }, style]} {...rest} onPress={onPress} >
      <ThemedText>
        
      </ThemedText>
    </TouchableOpacity>
  )
}

export default Button