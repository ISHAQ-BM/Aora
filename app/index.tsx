import {  StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components/ThemedText'
import Button from '@/components/Button'
import { ThemedView } from '@/components/ThemedView'
import Logo from '../assets/images/logo.svg'
import OnboardingImg from '../assets/images/Onboarding-img.svg'
import Svg, { Path } from 'react-native-svg'
import { Colors } from '@/constants/Colors'
import { router } from 'expo-router'

const index = () => {

  const handleLoginWithEmail = ()=>{
    router.navigate('/(auth)')
  }
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.logoContainer}>
        <Logo width={100} height={78}/>
        <ThemedText type='title' lightColor='white' darkColor='white'>Aora</ThemedText>
      </ThemedView>
      <OnboardingImg width={342} height={274}/>
      <ThemedText type='defaultSemiBold' lightColor='white' darkColor='white' style={{marginTop:24}}>Discover Endless</ThemedText>
      <ThemedView style={{flexDirection:'row',gap:12}}>
        <ThemedText type='defaultSemiBold' lightColor='white' darkColor='white'>Possibilities with</ThemedText>
        <ThemedView >
          <ThemedText type='defaultSemiBold' lightColor={Colors.light.primary} darkColor='white'>Aora</ThemedText>
          <Svg
            height="20"
            width="70"
            viewBox="0 0 100 20"
            style={{marginTop:-12}}
          >
            <Path
              d="M0,20 Q50,0 100,10"
              fill="transparent"
              stroke={Colors.light.primary}
              strokeWidth="5"
              
            />
          </Svg>
        </ThemedView>
        
      </ThemedView>
      <ThemedText type='default' lightColor='#CDCDE0' darkColor='#CDCDE0' style={{textAlign:'center',marginTop:24}}>Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora</ThemedText>
      <Button style={styles.button} lightColor='#FF8C00' onPress={handleLoginWithEmail}><ThemedText style={{fontSize:16}} type='defaultSemiBold'  >Continue with Email</ThemedText></Button>


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
      alignItems:'center',
      paddingHorizontal:16
    },
    logoContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20
    },
    button:{
      height:40,
      justifyContent:'center',
      paddingHorizontal:16,
      borderRadius:8,
      marginTop:48
    }
})