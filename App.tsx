import { View, Text } from 'react-native'
import React from 'react'
import LoginScreen from './src/screens/LoginScreen'
import SignUpScreen from './src/screens/SignUpScreen'
import { NavigationContainer } from '@react-navigation/native'
import MyStack from './src/navigation/MyStack'
// import BuyersDetails from './src/components/BuyersDetails'
// import BookingPage from './src/components/BookingPage'
// import BookingPage from './src/components/BookingPage'
// import Sold from './src/components/Sold'
// import BlockedBy from './src/components/BlockedBy'
// import BookedBy from './src/components/BookedBy'
// import Available from './src/PopUp/Available'
// import BookedByMe from './src/PopUp/BookedByMe'

const App = () => {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
}
export default App