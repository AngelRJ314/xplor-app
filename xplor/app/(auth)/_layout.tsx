import { StyleSheet, Text, View } from 'react-native'
import { Stack } from 'expo-router'
import React from 'react'

const AuthLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="create" options={{headerShown: false}}/>
        <Stack.Screen name="login" options={{headerShown: false}}/>
        <Stack.Screen name="user" options={{headerShown: false}}/>
    </Stack>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})