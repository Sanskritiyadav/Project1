import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home'
import Profile from './Profile'



const Tab = createBottomTabNavigator()

const HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Group screenOptions={{
        headerShown: false, tabBarStyle: {
          backgroundColor: '#000000',
          height:46,
        },
      }}>
        <Tab.Screen name='Home' component={Home} options={{ tabBarIcon: () => (
        <Image source={require("../assets/HomeIcon.png")} />
        
      ), }} />
        <Tab.Screen name='Profile' component={Profile} options={{ tabBarIcon: () => (
        <Image source={require("../assets/profileIcon.png")} />
        
      ), }} />
      </Tab.Group>
    </Tab.Navigator>
  )
}

export default HomeScreen
