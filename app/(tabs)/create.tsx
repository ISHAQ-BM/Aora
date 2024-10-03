import { Image, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { Colors } from '@/constants/Colors'
import Upload from '@/assets/images/upload.svg'
import Button from '@/components/Button'


const Create = () => {
  const [title, setTitle] = React.useState('');
  const [AIPrompt, setAIPrompt] = React.useState('');
  const handleSubmit = ()=>{

  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText type='subtitle' lightColor='white' darkColor='white'>Upload Video</ThemedText>
      <ThemedView style={styles.inputContainer}>
          <ThemedText type='default' lightColor='white' darkColor='white'>Video Title</ThemedText>
        <TextInput placeholder='Give your video a catchy title...' 
          style={styles.input}
          onChangeText={text => setTitle(text)}
          value={title}
          inputMode="text"
          selectionColor={Colors.light.primary}
          placeholderTextColor={'#7B7B8B'}
        />
      </ThemedView>
      
      <ThemedView style={styles.inputContainer}>
            <ThemedText type='default' lightColor='white' darkColor='white'>Upload Video</ThemedText>
        <ThemedView style={styles.uploadVedeoContainer}>
          <View style={{borderColor:'#FF9001',borderStyle:'dashed',borderWidth:1,padding:12,borderRadius:10}}>
            <Upload height={24}  width={24} />
          </View>
        </ThemedView>
      </ThemedView>


      <ThemedView style={styles.inputContainer}>
        <ThemedText type='default' lightColor='white' darkColor='white'>Thumbnail Image</ThemedText>
        <ThemedView style={styles.uploadImageContainer}>
          <Upload height={20}  width={20} />
          <ThemedText type='default' lightColor='white' darkColor='white'>Choose a file</ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.inputContainer}>
        <ThemedText type='default' lightColor='white' darkColor='white'>AI Prompt</ThemedText>
        <TextInput placeholder='The AI prompt of your video....' 
          style={styles.input}
          onChangeText={text => setAIPrompt(text)}
          value={AIPrompt}
          inputMode="text"
          selectionColor={Colors.light.primary}
          placeholderTextColor={'#7B7B8B'}
        />
      </ThemedView>
      <Button style={styles.button} lightColor='#FF8C00' onPress={handleSubmit}>
        <ThemedText style={{fontSize:16}} type='defaultSemiBold' >Submit & Publish</ThemedText>
      </Button>
      
    </ThemedView>
  )
}

export default Create

const styles = StyleSheet.create({
    container: {
    flex: 1,
    paddingTop:StatusBar.currentHeight + 48,
    paddingHorizontal:16,
    gap:22
  },
  uploadVedeoContainer:{
    backgroundColor:'#1E1E2D',
    height:150,
    justifyContent:'center',
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
        
    
    },
    inputContainer :{
      gap:8
    },
    uploadImageContainer:{
      flexDirection:'row',
      backgroundColor:'#1E1E2D',
      height:58,
      justifyContent:'center',
      alignItems:'center',
      gap:4
    },
    button:{
      height:58,
      justifyContent:'center',
      alignItems:'center',
      paddingHorizontal:16,
      borderRadius:8,
    }
})