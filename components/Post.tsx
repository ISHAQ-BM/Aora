import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from './ThemedView'
import { ThemedText } from './ThemedText'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'

type postProps ={
  id:number,
  userProfileImage:string,
  userName:string,
  title:string,
  videoUrl:string
  

}

const Post = ({post} :{post:postProps} ) => {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <Image source={{uri:post.userProfileImage}} style={{borderWidth:1,borderColor:Colors.light.primary,borderRadius:8}}/>
        <ThemedView style={{flex:1,justifyContent:'space-between',paddingVertical:4}}>
            <ThemedText type='subtitle' lightColor='white' darkColor='white' style={{fontSize:14}} numberOfLines={1} ellipsizeMode='tail'>{post.title}</ThemedText>
            <ThemedText type='default' lightColor='#CDCDE0' darkColor='#CDCDE0' style={{fontSize:12}} >{post.userName}</ThemedText>
        </ThemedView>
        
      </ThemedView>
    
      <ThemedView style={{flexDirection:'row'}}>
        <Image source={{uri:post.videoUrl}} style={{height:200,flex:1, borderRadius:10}} />
      </ThemedView>
        
    </ThemedView>
  )
}

export default Post

const styles = StyleSheet.create({
  container:{
    flex:1,
    gap:16,
    marginVertical:24
  },
    header:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:8
    }
})