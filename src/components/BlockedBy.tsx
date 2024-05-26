import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { responsiveWidth,responsiveHeight,responsiveFontSize } from 'react-native-responsive-dimensions'

const BlockedBy = ({closeModal}:any) => {
  return (
    <Pressable onPress={closeModal}>
   <View style={styles.container}>
    <Text style={styles.title}>Blocked By Abhishek Shahani</Text>
   </View>
   </Pressable>
  )
}
export default BlockedBy
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#17737F",

        height:"100%",
        width:responsiveWidth(65),
        padding:10,
        marginVertical:230,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        // marginTop:responsiveHeight(2),
        // marginLeft:responsiveWidth(10),
        // marginBottom:responsiveHeight(2),
        borderRadius:5
        

    },
    title:{
        height:"100%",
        width:"100%",
            fontSize:30,
            fontWeight:"700",
            color:"#FFFFFF",
            // marginTop:rV(50),
            // marginLeft:rS(70),
            display:'flex',
            alignItems:'center',
            textAlign:'center',
            marginTop:responsiveHeight(15)
            // height:rV(70),
            // width:rS(147)
        }
})
