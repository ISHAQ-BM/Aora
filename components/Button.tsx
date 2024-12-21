import {PressableProps, Pressable, TouchableOpacity, TextProps, StyleProp, TextStyle } from 'react-native'
import React from 'react'
import { useThemeColor } from '@/hooks/useThemeColor';
import { ThemedText } from './ThemedText';

export type ThemedButtonProps = PressableProps & {
  text:string;
  textStyle:StyleProp<TextStyle>;
  textType?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
  lightColor?: string;
  darkColor?: string;
  onPress?:()=>void
};


const Button = ({ style,text,textStyle,textType,onPress, lightColor, darkColor, ...rest }: ThemedButtonProps) => {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return (
    <TouchableOpacity style={[{ backgroundColor }, style]} {...rest} onPress={onPress} activeOpacity={0.7}>
      <ThemedText style={textStyle} type={textType} >
        {text}
      </ThemedText>
    </TouchableOpacity>
  )
}

export default Button