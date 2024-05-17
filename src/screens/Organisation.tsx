import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { rS,rV,rMS } from '../Styles/responsive'

const Organisation = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Organisation transaction</Text>
    </View>
  )
}

export default Organisation
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#E3C27D"
    },
    title:{
        marginTop:rV(40),
        marginLeft:rS(50),
        fontSize:rMS(24),
        color:'black',
        fontWeight:'600'

        

    }
})