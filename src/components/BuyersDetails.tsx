import { View, Text ,StyleSheet,TextInput,Image, Pressable} from 'react-native'
import React,{useState} from 'react'
import { rS,rV,rMS } from '../Styles/responsive'
import MyTextInput from './MyTextInput'
import MyButton from './MyButton'
import Home from '../screens/Home'

const BuyersDetails = ({navigation}:any,{closeModal}:any) => {
    const[name,setName]=useState("")

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Buyers Details</Text>
      <Pressable onPress={closeModal}>
      <Image source={require("../assets/carbon_close-filled.png")} style={styles.ImageStyle} />
      </Pressable>
      
      
      <Text style={styles.Name}>Buyers Name*</Text>
      <TextInput style={styles.TextInput} placeholder='' value={name} onChangeText={(text)=>setName(text)} />

      <Text style={styles.Name}>Threshold Duration frequency*</Text>
      <TextInput style={styles.TextInput} placeholder=''/>

      <Text style={styles.Name}>Threshold Value*</Text>
      <TextInput style={styles.TextInput} placeholder='' />

      <Text style={styles.Name}>Select Document to Upload</Text>
      <TextInput style={styles.TextInput} placeholder='' />

      <Text style={styles.Name}>Remark</Text>
      <TextInput style={styles.TextInput} placeholder='' />

     <MyButton title={"Confirm"} onPress={closeModal}/>
      
    </View>
  )
}

export default BuyersDetails
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#E3C27D"
       

    },
    text:{
        fontSize:rMS(22),
        fontWeight:'700',
        lineHeight:rV(26.4),
        color:"#000000",
        height:rV(26),
        width:rS(144),
        marginTop:rV(51),
        marginLeft:rS(85)
    },
    TextInput:{
        fontSize:rMS(10),
        height:rV(29),
        width:rS(242),
        marginTop:rV(5),
        marginLeft:rS(30),
        borderRadius:rMS(3),
        backgroundColor:"#FFFFFF",
        borderColor:"#000000",
        borderWidth:rMS(2),
        
    },
    Name:{
        marginTop:rV(20),
        marginLeft:rS(30),
        padding:rV(1),
        fontSize:rMS(18),
        fontWeight:'500'
    },
    ImageStyle:{
        marginTop:rV(-25),
        marginLeft:rS(280)
        



    }
    
})