import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/ThemedView'

const Profile = () => {
  return (
    <ThemedView style={styles.container}>
      <Text>Profile</Text>
    </ThemedView>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})