import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home'
import Profile from './Profile'


const Tab=createBottomTabNavigator()

const HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Home} options={{headerShown:false}}/>
      <Tab.Screen name='Profile' component={Profile} options={{headerShown:false}} />        
    </Tab.Navigator>
  )
}

export default HomeScreen
