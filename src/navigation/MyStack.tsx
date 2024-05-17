import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack' 
import LoginScreen from '../screens/LoginScreen'
import SignUpScreen from '../screens/SignUpScreen'
import HomeScreen from '../screens/HomeScreen'
import Organisation from '../screens/Organisation'

const Stack=createStackNavigator()

export default function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="Organisation" component={Organisation} options={{headerShown:true,title:'',headerStyle:{backgroundColor:"#E3C27D"}}} />

    </Stack.Navigator> 
  
  )
}
 


