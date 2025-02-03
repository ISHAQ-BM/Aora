import { StyleSheet, Text, TouchableOpacity, View ,Image, ImageBackground} from 'react-native'
import React, { useState } from 'react'
import * as Animatable from 'react-native-animatable'
import { useVideoPlayer, VideoView } from 'expo-video'


import play from '../assets/images/play.png';
import { useEvent } from 'expo'

type postProps ={
  $id:string,
  avatar:string,
  username:string,
  title:string,
  prompt:string,
  video:string,
  thumbnail:string

}

const zoomIn ={
    0:{
        scale:0.9,
    },
    1:{
        scale:1,
    }
}

const zoomOut ={
    0:{
        scale:1,
    },
    1:{
        scale:0.9,
    }
}

const TrendingPost = ({post,activeItem}:{post:postProps,activeItem:string}) => {
     const player = useVideoPlayer(post.video, player => {
        player.loop = true;
        player.pause();
      });
      const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });
    
  return (
    <Animatable.View
        animation={activeItem === post.$id ? zoomIn : zoomOut}
        duration={500}
    >
      
        {isPlaying ? (
          <VideoView style={{width:150,height:240}} player={player} contentFit='cover'/>
                    
        ):(
          <TouchableOpacity onPress={() => {
                      if (isPlaying) {
                        player.pause();
                      } else {
                        player.play();
                      }
                    }}  style={{position: 'relative',justifyContent:'center', alignItems:'center'}} activeOpacity={0.7} >
              <ImageBackground source={{uri:post.thumbnail}} style={{width:150,height:240}} borderRadius={10}/>
              <Image source={play}  style={{position:'absolute'}}/>
            </TouchableOpacity>
          
        )
        }
    </Animatable.View>
  )
}

export default TrendingPost

const styles = StyleSheet.create({})