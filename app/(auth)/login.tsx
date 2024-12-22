import { View, Text, StatusBar, StyleSheet, TextInput, Pressable, Alert } from 'react-native'
import React from 'react'
import Logo from '../../assets/images/logo.svg'
import { Colors } from '@/constants/Colors'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import Button from '@/components/Button'
import { Link, router } from 'expo-router'
import { login } from '@/lib/appwrite'
import { GlobalContextType, useGlobalContext } from '@/context/GlobalProvider'

const Login = () => {
  const {setUser,setIsLoggedIn} = useGlobalContext() as GlobalContextType;
    
  const handleLogin = async ()=>{
     if(!form.email || !form.password){
          Alert.alert('Error','Please fill in all the fields');
        } else{
          try {
          const result = await login(form.email,form.password)
          setIsLoggedIn(true);
          setUser(result);
           router.replace('/home')
        } catch (error) {
          Alert.alert('Error',error.message)
        }
        }
  }
    const [form, setForm] = React.useState({email:'',password:''});
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
        onChangeText={text => setForm({...form,email:text})}
        value={form.email}
        selectionColor={Colors.light.primary}
        inputMode="email"
        />
      <ThemedText type='subtitle' lightColor='white' darkColor='white' style={{marginTop:24}}>Password</ThemedText>
      <TextInput
        style={styles.input}
        onChangeText={text => setForm({...form,password:text})}
        value={form.password}
        inputMode="text"
        selectionColor={Colors.light.primary}
        secureTextEntry={true}
       />
       <ThemedText type='default' lightColor='white' darkColor='white' style={{textAlign:'right',marginTop:16}}>Forgot password</ThemedText>
       <Button style={styles.button} text='Login' textStyle={{fontSize:16}} textType='defaultSemiBold' lightColor='#FF8C00' onPress={handleLogin} />
      
       <ThemedView style={{flexDirection:'row',  gap:4,alignSelf:'center',marginTop:20}}>
            <ThemedText type='default' lightColor='white' darkColor='white'>Don’t have an account?</ThemedText>
            <Link href='/signup'><ThemedText type='default' lightColor={Colors.light.primary} darkColor={Colors.light.primary}>Signup</ThemedText>
            </Link>
            
       </ThemedView>
    </ThemedView>
  )
}

export default Login

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