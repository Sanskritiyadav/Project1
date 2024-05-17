import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { rMS, rV ,rS} from '../Styles/responsive'

const MyTextInput = ({...props}) => {
  return (
    <View style={styles.container}>
      <TextInput
    //   style={styles.input}
      style={styles.border}
      {...props}
      />
    </View>
  )
}

export default MyTextInput
const styles=StyleSheet.create({
    container:{
        height:rV(60),
        width:"60%",
        justifyContent:'center',
        paddingHorizontal:rS(10),
        marginBottom:rV(10),
        marginLeft:rS(90)

    
    },
    border:{
        width:"100%",
        height:rV(35),
        backgroundColor:"white",
        alignSelf:'center',
        borderRadius:rMS(100),
        marginLeft:rS(0.5),
        marginTop:rV(50),
        padding:rV(10),
        fontSize:rMS(15),
        borderColor:"#000000",
        
        
        

    }
})