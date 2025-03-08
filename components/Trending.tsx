import { FlatList, StyleSheet, Text, View, ViewToken } from 'react-native'
import React, { useState } from 'react'
import TrendingPost from './TrendingPost'
import { Models } from 'react-native-appwrite'

const Trending = ({posts}:{posts:Models.Document[]}) => {

    const [activeItem, setActiveItem] = useState(posts[0]?.$id ?? "")
    
    
   
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