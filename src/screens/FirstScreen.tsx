import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const FirstScreen = ({navigation}:any) => {

    useEffect(()=>{
       setTimeout(()=>{
        navigation.navigate("SignUp")
       },4000)
    },[])
  return (
      <Image style={styles.splashBackground} source={require("../assets/Splashscreen.png")}/>
  )
}

export default FirstScreen
const styles = StyleSheet.create({
    splashBackground:{
        height: responsiveHeight(100), 
        width: responsiveWidth(100)
    }
})