import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { ThemedView } from './ThemedView'
import { ThemedText } from './ThemedText'

import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import { useVideoPlayer, VideoView } from 'expo-video'
import { useEvent } from 'expo'
import play from '../assets/images/play.png'


type postProps ={
  id:string,
  avatar:string,
  username:string,
  title:string,
  prompt:string,
  video:string,
  creator:User,
  thumbnail:string
  

}

type User ={
  id:number,
  avatar:string,
  username:string, 

}


const Post = ({post} :{post:postProps} ) => {
  const player = useVideoPlayer(post.video, player => {
    player.loop = true;
    player.pause();
  });
  const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });


  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <Image source={{uri:post.creator.avatar}} style={{borderWidth:1,borderColor:Colors.light.primary,borderRadius:8,width:42,height:42}}/>
        <ThemedView style={{flex:1,justifyContent:'space-between',paddingVertical:4}}>
            <ThemedText type='subtitle' lightColor='white' darkColor='white' style={{fontSize:14}} numberOfLines={1} ellipsizeMode='tail'>{post.title}</ThemedText>
            <ThemedText type='default' lightColor='#CDCDE0' darkColor='#CDCDE0' style={{fontSize:12}} >{post.creator.username}</ThemedText>
        </ThemedView>
        
      </ThemedView>
    
        {isPlaying ? (
          <VideoView style={{height:200,width:'100%'}} player={player} contentFit='cover' />
      
          
            
        ):(
          <TouchableOpacity onPress={() => {
            if (isPlaying) {
              player.pause();
            } else {
              player.play();
            }
          }} 
          style={{position: 'relative',justifyContent:'center', alignItems:'center'}} activeOpacity={0.7} >
              
              <Image source={{uri:post.thumbnail}} style={{width:'100%',height:200}} borderRadius={10}/>
              <Image source={play}  style={{position:'absolute'}}/>
            </TouchableOpacity>
          
        )
        }
      
        
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