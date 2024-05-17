import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { rMS, rS, rV } from '../Styles/responsive'

const Sold = (closeModal:any) => {
  return (
   <View style={styles.container}>
    <Text style={styles.title}>This plot has been sold.</Text>
   </View>
  )
}
export default Sold
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#17737F",

        height:rV(200),
        width:rS(270),
        marginTop:rV(250),
        marginLeft:rS(10),
        marginBottom:rV(200),
        borderRadius:rMS(5)
        

    },
    title:{
    
        fontSize:rMS(21),
        fontWeight:"700",
        lineHeight:rV(35),
        color:"#FFFFFF",
        marginTop:rV(50),
        marginLeft:rS(70),
        alignItems:'center',
        height:rV(70),
        width:rS(147)
    }
})
