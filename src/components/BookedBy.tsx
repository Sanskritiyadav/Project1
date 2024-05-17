import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { rMS, rS, rV } from '../Styles/responsive'

const BookedBy = (closeModal:any) => {
  return (
   <View style={styles.container}>
    <Text style={styles.title}>Booked By Nikhil Jha</Text>
   </View>
  )
}
export default BookedBy
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#17737F",

        height:rV(125),
        width:rS(270),
        marginTop:rV(250),
        marginLeft:rS(40),
        marginBottom:rV(200),
        borderRadius:rMS(5)
        

    },
    title:{
    
        fontSize:rMS(20),
        fontWeight:"700",
        lineHeight:rV(35),
        color:"#FFFFFF",
        marginTop:rV(30),
        marginLeft:rS(40),
        alignItems:'center',
        height:rV(107),
        width:rS(165)
    }
})
