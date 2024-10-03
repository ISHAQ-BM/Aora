import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/ThemedView'

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <Text>index</Text>
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})