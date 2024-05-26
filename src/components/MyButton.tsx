import { View, Text, TouchableOpacity, StyleSheet ,Dimensions} from 'react-native'
import React,{FC} from 'react'
import { rMS, rS, rV } from '../Styles/responsive';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
   

interface Props{
    title:string
    onPress: () => void;
    

}
const MyButton :FC <Props> = ({title,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default MyButton
const styles=StyleSheet.create({
    container:{
        
        height:responsiveHeight(5),
        width:responsiveWidth(30),
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#56698F",
        borderRadius:responsiveWidth(15),
        
        

        
    },
    title:{
        color:"#FFFFFF",
        fontSize:responsiveFontSize(2),
        fontFamily:"Redressed-Regular"
    }

    
})