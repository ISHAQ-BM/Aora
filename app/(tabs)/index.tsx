import { FlatList, StatusBar, StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/ThemedView'
import Logo from '@/assets/images/logo.svg'
import { ThemedText } from '@/components/ThemedText'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import Post from '@/components/Post'

const data = [
  {
    id:1,
    userProfileImage:'@/assets/images/favicon.png',
    userName:'ishaq belhadj',
    title:'aiof whfewo fowfw of wfwe',
    videoUrl:'@/assets/images/video.png'
  },
  {
    id:2,
    userProfileImage:'@/assets/images/favicon.png',
    userName:'ishaq belhadj',
    title:'aiof whfewo fowfw of wfwe',
    videoUrl:'@/assets/images/video.png'
  },
  {
    id:3,
    userProfileImage:'@/assets/images/favicon.png',
    userName:'ishaq belhadj',
    title:'aiof whfewo fowfw of wfwe',
    videoUrl:'@/assets/images/video.png'
  },
  {
    id:4,
    userProfileImage:'@/assets/images/favicon.png',
    userName:'ishaq belhadj',
    title:'aiof whfewo fowfw of wfwe',
    videoUrl:'@/assets/images/video.png'
  },
]

const Home = () => {
  const [searchText, setsearchText] = React.useState('');
  return (
    <ThemedView style={styles.container}>
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
      <FlatList 
        data={data}
        renderItem={({item}) =><Post post={item}/>}
        keyExtractor={item => item.id}
      />
      
      
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
    flex: 1,
    paddingTop:StatusBar.currentHeight + 48,
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