import { View, Text, StyleSheet, Pressable, Image, Button } from 'react-native'
import React from 'react'
import { rV ,rS,rMS} from '../Styles/responsive'
import MyButton from '../components/MyButton'

const Available = ({navigation,closeModal}:any) => {
    console.log(closeModal)
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Pressable onPress={()=>closeModal()}>
                <Image source={require("../assets/charm_cross.png")} style={styles.imageStyle}/>
      <Text style={styles.text}>Status:Available(Plot#)</Text>
      </Pressable>
      <Text style={styles.text1}>Select Status</Text>  

       
      <View style={styles.Block}>
        <Text style={styles.text2}>Block</Text>
        </View> 
        <View style={styles.Block}>
        <Text style={styles.text2}>Book</Text>
        </View> 
        <View style={styles.Block}>
        <Text style={styles.text2}>Sold</Text>
        </View>    

        {/* <Button title={'Change Status'} onPress={()=>{Navigation.navigate("BuyersDetails")}} style={styles.Button}/> */}
        <Pressable style={styles.Button} onPress={()=>{navigation.navigate("BuyersDetails")}}>
      <Text style={styles.text3}>Change Status</Text>
    </Pressable>

      </View>
    </View>
  )
}

export default Available
const styles=StyleSheet.create({
    container:{
        
        height:rV(275),
        width:rS(236),
        backgroundColor:"#AAEDFB",
        marginTop:rV(150),
        marginLeft:rS(50),
        borderRadius:rMS(15)
    },
    header:{
        
        height:rV(30),
        width:rS(236),
        backgroundColor:"#1A5F6D",
        borderRadius:rMS(5)

        
    },
    text:{
        fontSize:rMS(16),
        fontWeight:'600',
        color:"#FFFFFF",
        alignItems:'center',
        justifyContent:'center',
        marginLeft:rS(38),
        marginTop:rV(-22)
    },
    imageStyle:{
        marginLeft:rS(215),
        marginTop:rV(4)

    },
    text1:{
        fontSize:rMS(14),
        marginTop:rV(37),
        marginLeft:rS(29),
        height:rV(17),
        width:rS(83),
        fontWeight:'500',
        lineHeight:rV(16.8),color:"#000000"
    },
    Block:{
        height:rV(29),
        width:rS(181),
        marginTop:rV(12),
        marginLeft:rS(28),
        backgroundColor:"#FFFFFF",
        borderRadius:rMS(5),
    },
    text2:{
        marginLeft:rS(40),
        marginTop:rV(4),
        fontSize:rMS(18),
        fontWeight:'400',
        color:"#000000",


    },
    Button:{
        height:rV(26),
        width:rS(131),
        marginTop:rV(20),
        marginLeft:rS(55),
        borderRadius:rMS(15),
        backgroundColor:"#808080"

    },
    text3:{
        alignItems:'center',
        color:"#FFFFFF",
        fontWeight:"600",
        fontSize:rMS(14),
        marginTop:rV(3),
        marginLeft:rS(18)
    }
})