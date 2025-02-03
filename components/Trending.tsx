import { FlatList, StyleSheet, Text, View, ViewToken } from 'react-native'
import React, { useState } from 'react'
import TrendingPost from './TrendingPost'
type postProps ={
  $id:string,
  avatar:string,
  username:string,
  title:string,
  prompt:string,
  video:string,
  thumbnail:string
  

}
const Trending = ({posts}:{posts:postProps[]}) => {
    const [activeItem, setActiveItem] = useState('')
    
    
   
  return (
    
      <FlatList 
      data={posts} 
      keyExtractor={(item) => item.$id}
      renderItem={({item}) =><TrendingPost post={item} activeItem={activeItem} />}
      horizontal
    
      />
  )
}

export default Trending

const styles = StyleSheet.create({})