import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Colors } from '@/constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';

const TabLayout = () => {
  return (
    <Tabs screenOptions={
            { 
                tabBarActiveTintColor: Colors.light.primary,
                tabBarInactiveTintColor:'#CDCDE0',
                tabBarStyle: { backgroundColor: Colors.light.background ,height:70,paddingTop:16},
                tabBarLabelStyle:{fontSize:12,fontWeight:'semibold',marginBottom:8},
                tabBarHideOnKeyboard: true
            }
        } 
    >
        <Tabs.Screen 
            name='home'   
            options={
                {
                    title:'Home',
                    tabBarIcon:({color}) => <Ionicons size={24} name='home-sharp' color={color} />,
                    headerShown:false

                }
            }
        />
        <Tabs.Screen 
            name='profile'   
            options={
                {
                    title:'Profile',
                    tabBarIcon:({color}) => <Ionicons size={24} name='person' color={color} />,
                    headerShown:false
                }
            }
        />
        <Tabs.Screen 
            name='create'   
            options={
                {
                    title:'Create',
                    tabBarIcon:({color}) => <Ionicons size={24} name='add-circle' color={color} />,
                    headerShown:false
                }
            }
        />
        <Tabs.Screen 
            name='bookmark'   
            options={
                {
                    title:'Bookmark',
                    tabBarIcon:({color}) => <Ionicons size={24} name='bookmark' color={color} />,
                    headerShown:false
                }
            }
        />
    </Tabs>
  )
}

export default TabLayout

const styles = StyleSheet.create({})