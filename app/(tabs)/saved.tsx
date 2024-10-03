import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/ThemedView'

const Saved = () => {
  return (
    <ThemedView style={styles.container}>
      <Text>Saved</Text>
    </ThemedView>
  )
}

export default Saved

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})