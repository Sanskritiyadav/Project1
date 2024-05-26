import { View, Text, StyleSheet, TextInput ,Dimensions} from 'react-native'
import React from 'react'
import { rMS, rV ,rS} from '../Styles/responsive'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const MyTextInput = ({...props}) => {
  return (
      <TextInput
      style={styles.border} 
      {...props}
      />
  )
}

export default MyTextInput
const styles=StyleSheet.create({
    
    border:{
        
        backgroundColor:"white",
        borderRadius:20,
        
        padding:7,
        width:"65%"

    }
})