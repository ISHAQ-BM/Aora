import { View, Text, StatusBar, StyleSheet, TextInput, Pressable } from 'react-native'
import React from 'react'
import Logo from '../../assets/images/logo.svg'
import { Colors } from '@/constants/Colors'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import Button from '@/components/Button'
import { router } from 'expo-router'

const index = () => {
    const handleLogin = ()=>{
    
  }
    const [password, onChangePassword] = React.useState('');
    const [email, onChangeEmail] = React.useState('');
  return (
    <ThemedView style={styles.container}>
        <ThemedView style={styles.logoContainer}>
            <Logo width={50} height={50}/>
            <ThemedText type='subtitle' lightColor='white' darkColor='white' style={{fontSize:28}}>Aora</ThemedText>
        </ThemedView>
        <ThemedText type='title' lightColor='white' darkColor='light' style={{marginTop:20}} >Login</ThemedText>
      <ThemedText type='subtitle' lightColor='white' darkColor='white' style={{marginTop:28}}>Email</ThemedText>
      <TextInput
        style={styles.input}
        onChangeText={text => onChangeEmail(text)}
        value={email}
        selectionColor={Colors.light.primary}
        inputMode="email"
        />
      <ThemedText type='subtitle' lightColor='white' darkColor='white' style={{marginTop:24}}>Password</ThemedText>
      <TextInput
        style={styles.input}
        onChangeText={text => onChangePassword(text)}
        value={password}
        inputMode="text"
        selectionColor={Colors.light.primary}
        secureTextEntry={true}
       />
       <ThemedText type='default' lightColor='white' darkColor='white' style={{textAlign:'right',marginTop:16}}>Forgot password</ThemedText>
       <Button style={styles.button} lightColor='#FF8C00' onPress={handleLogin}><ThemedText style={{fontSize:16}} type='defaultSemiBold'  >Login</ThemedText></Button>
       <ThemedView style={{flexDirection:'row',  gap:4,alignSelf:'center',marginTop:20}}>
            <ThemedText type='default' lightColor='white' darkColor='white'>Don’t have an account?</ThemedText>
            <Pressable onPress={()=>router.navigate('/signup')}>
                <ThemedText type='default' lightColor={Colors.light.primary} darkColor={Colors.light.primary}>Signup</ThemedText>
            </Pressable>
            
       </ThemedView>
    </ThemedView>
  )
}

export default index

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