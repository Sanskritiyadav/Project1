import React from 'react'
import { createStackNavigator } from '@react-navigation/stack' 
import LoginScreen from '../screens/LoginScreen'
import SignUpScreen from '../screens/SignUpScreen'
import HomeScreen from '../screens/HomeScreen'
import Organisation from '../screens/Organisation'
import FirstScreen from '../screens/FirstScreen'

const Stack=createStackNavigator()


export default function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="FirstScreen" component={FirstScreen}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="Organisation" component={Organisation} options={{headerShown:true,title:'',headerStyle:{backgroundColor:"#E3C27D"}}} />
    </Stack.Navigator> 
  
  )
}

 


