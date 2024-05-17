import { View, Text, StyleSheet, Image, TextInput, Dimensions, Alert } from 'react-native'
import React from 'react'
import MyButton from '../components/MyButton';
import MyTextInput from '../components/MyTextInput';
import auth from '@react-native-firebase/auth'
import { useState } from 'react'
import { rV,rS,rMS } from '../Styles/responsive';
import firestore from '@react-native-firebase/firestore';



const SignUpScreen = ({navigation}:any) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const ref = firestore().collection('Users');

    // const [confirmPassword,setConfirmPassword]=useState("")
    const Add=async()=>{
      await ref.add({
        Email:email
      })
      console.log(email)
      setEmail('')
    }
    const signUpTestFn = () => {
        auth().createUserWithEmailAndPassword(email, password).then(() => {
            Add()
            navigation.navigate("Login")
        })
            .catch((err) => {
                console.log(err.nativeErrorMessage)
                Alert.alert(err.nativeErrorMessage)
            })

    }
    
    return (
        <View style={styles.container}>
            {/* <ImageBackground> */}
            <Image source={require("../assets/MAhalaxmi-1.png")} style={styles.ImageStyle}/>

            <View style={styles.inputcontainer}>
                <Text style={styles.text}>SignUp</Text>
                <MyTextInput value={email} onChangeText={(text:string)=>setEmail(text)} placeholder='Email or User name' />
                <MyTextInput value={password} onChangeText={(text:string)=>setPassword(text)} placeholder='Password' secureTextEntry />
                {/* <MyTextInput placeholder='Confirm Password' secureTextEntry/> */}
                <Text style={styles.HaveAccount} onPress={()=>{navigation.navigate("Login")}}>Already have an Account</Text>


                <MyButton title={"SignUp"} onPress={signUpTestFn} />



            </View>
            {/* </ImageBackground> */}
        </View>
    )
}

export default SignUpScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor:'#fffdd0'
        backgroundColor: "#E3C27D"

    },
    title: {
        fontSize: 20,
        marginTop: 100,
        marginLeft: 100
    },
    inputcontainer: {
        // height: 350,
        // width: 350,
        // backgroundColor: "#dda0dd",
        // borderRadius: 1000,
        // marginTop: 90,
        height:rV(350),
      width:rS(350),
      backgroundColor: "#C2A5C1",
      borderRadius:rMS(9000),
      marginTop:rV(50),
      marginLeft:rS(-67)

    },
    text: {
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
    },
    ImageStyle:{
        height:rV(162),
        width:rS(292),
        marginTop:rV(33),
        marginLeft:rS(20)
  
      },
      HaveAccount:{
        alignSelf:'flex-end',
        marginRight:rS(70),
        color:'#000000',
        marginBottom:rV(20),
        marginTop:rV(10)
    },
    
})