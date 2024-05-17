import { View, Text, StyleSheet, ImageBackground, TextInput,Dimensions,Alert, Image } from 'react-native'
import React,{useEffect, useState} from 'react'
import MyButton from '../components/MyButton';
import MyTextInput from '../components/MyTextInput';
import auth from '@react-native-firebase/auth'
import { rS,rV,rMS } from '../Styles/responsive';


const LoginScreen = ({navigation}:any) => {
 const [email,setEmail]=useState("")
 const [password,setPassword]=useState("")

  const loginWithcreds= ()=>{
    auth().signInWithEmailAndPassword(email,password)
    .then((res)=>{
      console.log(res)
      Alert.alert("Succesed logged In ")
      navigation.navigate("HomeScreen")
    })
    .catch(err=>{
      console.log(err.nativeErrorMessage)
      Alert.alert(err.nativeErrorMessage)
    })
    
  }
  return (
    <View style={styles.container}>
       <Image source={require("../assets/MAhalaxmi-1.png")} style={styles.ImageStyle}/>
      <View style={styles.inputcontainer}>
        <Text style={styles.text}>Login</Text>
        <MyTextInput value={email} onChangeText={(text:string)=>setEmail(text)}  placeholder='Email or User name'/>
        <MyTextInput value={password} onChangeText={(text:string)=>setPassword(text)} placeholder='Password' secureTextEntry/>
        <Text style={styles.textDontHave} onPress={()=>{navigation.navigate("SignUp")}}>Don't Have An Account Yet?</Text>
        <MyButton title={"Login"} onPress={loginWithcreds} />
      </View>
    </View>
  )
}

export default LoginScreen
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#E3C27D',
        // width:rS(292),
        // height:rV(637),
        // marginTop:rMS(-113),
        // marginLeft:(5556),
        // borderRadius:(10),
        // // border:rMS(1)

    },
    
    inputcontainer:{
      
      height:rV(350),
      width:rS(350),
      backgroundColor: "#C2A5C1",
      borderRadius:rMS(9000),
      marginTop:rV(50),
      marginLeft:rS(-67)
      // width:rS(330),
      // height:rV(306),
      // marginTop:rV(90),
      // marginLeft:rS(-67),
      // backgroundColor:"#C2A5C1",
      // borderRadius:rMS(1000)

    },
    text:{
      // marginLeft: 100,
      // marginTop: 50,
      // fontSize: 30,
      // fontWeight: 'bold',
      // color: 'black'

      marginLeft:rS(120),
      marginTop:rV(50),
      fontSize:rMS(20),
      fontWeight:'600',
      color: '#000000',
      height:rV(30),
      // height:rV(22),
      // width:rS(57),
      // marginTop:rV(282),
      // marginLeft:rS(38),
      // fontWeight:'600',
      // fontSize:rMS(24),


    },
    textDontHave:{
        alignSelf:'flex-end',
        marginRight:rS(70),
        color:'#000000',
        marginBottom:rV(20),
        marginTop:rV(10)
    },
    ImageStyle:{
      height:rV(162),
      width:rS(292),
      marginTop:rV(33),
      marginLeft:rS(20)

    }
})