import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React,{FC} from 'react'
import { rMS, rS, rV } from '../Styles/responsive';
// import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


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
        height:rV(29),
        width:rS(96),
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#56698F",
        borderRadius:rMS(15),
        marginTop:rV(10),
        marginLeft:rS(100)
        // 
        
        // height:rV(29),
        // width:rS(96),
        // marginTop:rV(443),
        // marginLeft:rS(30),
        // borderRadius:rMS(15)
    },
    title:{
        color:"#FFFFFF",
        fontSize:rMS(20),
        fontFamily:"Redressed-Regular"
    }

    
})