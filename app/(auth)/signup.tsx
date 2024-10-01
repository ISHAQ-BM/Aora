import {  Pressable, StatusBar, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

import Logo from '../../assets/images/logo.svg'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import Button from '@/components/Button'
import { router } from 'expo-router'

const Signup = () => {
  const handleSignup = ()=>{
    
  }
    const [password, onChangePassword] = React.useState('');
    const [email, onChangeEmail] = React.useState('');
     const [username, onChangeUsername] = React.useState('');
  return (
    <ThemedView style={styles.container}>
        <ThemedView style={styles.logoContainer}>
            <Logo width={50} height={50}/>
            <ThemedText type='subtitle' lightColor='white' darkColor='white' style={{fontSize:28}}>Aora</ThemedText>
        </ThemedView>
        <ThemedText type='title' lightColor='white' darkColor='light' style={{marginTop:28}} >Sign up</ThemedText>
        <ThemedText type='subtitle' lightColor='white' darkColor='white' style={{marginTop:20}} >Username</ThemedText>
        <TextInput
        style={styles.input}
        onChangeText={text => onChangeUsername(text)}
        value={username}
        selectionColor={Colors.light.primary}
        inputMode="text"
        />
        <ThemedText type='subtitle' lightColor='white' darkColor='white' style={{marginTop:12}}>Email</ThemedText>
        <TextInput
        style={styles.input}
        onChangeText={text => onChangeEmail(text)}
        value={email}
        inputMode="text"
        selectionColor={Colors.light.primary}
    
        />
        <ThemedText type='subtitle' lightColor='white' darkColor='white' style={{marginTop:12}}>Password</ThemedText>
        <TextInput
        style={styles.input}
        onChangeText={text => onChangePassword(text)}
        value={password}
        inputMode="text"
        selectionColor={Colors.light.primary}
        secureTextEntry={true}
       />
        <Button style={styles.button} lightColor='#FF8C00' onPress={handleSignup}><ThemedText style={{fontSize:16}} type='defaultSemiBold'  >Sign Up</ThemedText></Button>
        <ThemedView style={{flexDirection:'row',  gap:4,alignSelf:'center',marginTop:20}}>
            <ThemedText type='default' lightColor='white' darkColor='white'>Already have an account?</ThemedText>
            <Pressable onPress={()=>router.back()}>
              <ThemedText type='default' lightColor={Colors.light.primary} darkColor={Colors.light.primary}>Login</ThemedText>
            </Pressable>
        </ThemedView>
    </ThemedView>
    
  )
}

export default Signup

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.light.background,
        paddingTop:StatusBar.currentHeight,
        justifyContent:'center',
        paddingHorizontal:16
    },
    logoContainer:{
        flexDirection:'row',
        marginBottom:20,
        alignItems:'center'
    },
    input:{
        height: 58,
        borderRadius:8,
        color:'white',
        backgroundColor:'#1E1E2D',
        fontSize:16,
        fontWeight:'semibold',
        paddingHorizontal:12,
        marginTop:8
      
    
    },
    button:{
      height:58,
      justifyContent:'center',
      alignItems:'center',
      paddingHorizontal:16,
      borderRadius:8,
      marginTop:56
    }
})