import { FlatList, StyleSheet, TextInput,StatusBar as RNStatusBar, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ThemedView } from '@/components/ThemedView'
import Logo from '@/assets/images/logo.svg'
import { ThemedText } from '@/components/ThemedText'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import Post from '@/components/Post'
import { StatusBar } from 'expo-status-bar'
import { getAllPosts } from '@/lib/appwrite'
import { Models } from 'react-native-appwrite'
import useAppwrite from '@/lib/useAppwrite'
import Trending from '@/components/Trending'


const Home = () => {
  const [searchText, setsearchText] = useState('');

  const {data:posts} = useAppwrite(getAllPosts)

  return (
    <ThemedView style={styles.container}>
      <StatusBar backgroundColor='#161622' style='light'/>
          
      <FlatList 
        ListHeaderComponent={()=>(
          <ThemedView>
            <ThemedView style={styles.header}>
        <ThemedView>
          <ThemedText type='default' lightColor='#CDCDE0' darkColor='#CDCDE0'>Welcome Back</ThemedText>
          <ThemedText type='defaultSemiBold' lightColor='white' darkColor='white'>Ishaq Belhdj</ThemedText>
        </ThemedView>
        <Logo height={48} width={48}/>
      </ThemedView>
      <ThemedView style={styles.searchBar}>
        <TextInput 
          style={styles.input}
          onChangeText={text => setsearchText(text)}
         
          value={searchText}
          inputMode="text"
          selectionColor={Colors.light.primary}
          placeholder='Search for a video topic'
          placeholderTextColor={'#7B7B8B'}
        />
        <Ionicons name='search' size={15} color={'#FFFFFF'}/>
      </ThemedView>
      
      <Trending  posts={posts}/>
      
          </ThemedView>
        )}
        data={posts}
        renderItem={({item}) =><Post post={item}/>}
        
      />
      
      
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
    flex: 1,
    paddingTop:RNStatusBar.currentHeight + 48,
    paddingHorizontal:16
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  searchBar:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    height: 58,
    borderRadius:8,
    backgroundColor:'#1E1E2D',
    paddingHorizontal:12,
  },
  input:{
    
    
    color:'white',
    fontSize:16,
    fontWeight:'semibold',
  
  }
})