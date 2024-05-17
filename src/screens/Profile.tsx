import { View, Text, StyleSheet ,Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import { rV,rS,rMS } from '../Styles/responsive'
import firestore from '@react-native-firebase/firestore';



const Profile = ({navigation}:any) => {
  const [data,setData]=useState()
  const getData=async ()=>{
    const userCollection = await firestore().collection("Users").get()
    console.log(userCollection.docs[0].data())

    // setData(userCollection.docs[0].data())
    // console.log('users',User.data)
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.title}> Profile</Text> 
      <View style={styles.inputcontainer}>
      <Image source={require("../assets/Image.png")} style={styles.imageStyle}/>

        <Text style={styles.name}>Santosh Yadav</Text>
        {/* <Text style={styles.email}>{}</Text> */}

      </View>
      <Text style={styles.text}>Help & Support</Text>
      <Text style={styles.text} onPress={()=>{navigation.navigate("Organisation")}}>Organization transaction</Text>
      <Text style={styles.text} onPress={()=>{navigation.navigate("Login")}}>Logout</Text>
      <Text style={styles.Notetext} >Note- Organisation transaction is just for admins</Text>

      </View>
    </View>
  )
}

export default Profile
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#E3C27D"

    },
    title:{
      marginTop:rV(40),
      marginLeft:rS(112),
      fontSize:rMS(30),
      color:"#FFFFFF",
      fontWeight:'600'

    },
    header:{
      backgroundColor:"#C2A5C1",
      height:rV(190),
      width:"auto"
    },
    inputcontainer:{
      height:rV(200),
        width:"80%",
        backgroundColor:"white",
        borderRadius:rMS(20),
        justifyContent:"center",
        alignItems:"center",
        marginTop:rV(30),
        paddingHorizontal:rS(20),
        marginLeft:rS(40)
    },
    text:{
      marginLeft:rV(60),
      marginTop:rV(38),
      fontSize:rMS(20),
      fontWeight:'600',
      color:"#000000",
      // marginBottom:0.1,
      gap:1
    },
    Notetext:{
      marginLeft:rS(40),
      marginTop:rV(35),
      fontSize:rMS(20),
      padding:10,
      fontWeight:'400',
      color:"#000000"

    },
    imageStyle:{
      marginBottom:rV(30),
      height:rV(100),
      width:rS(100),
      borderRadius:rMS(100)
    },
    name:{
      marginBottom:rV(20),
      gap:2,
      fontSize:rMS(18),
      fontWeight:'600',
      color:"#000000"
    },
    email:{
      marginBottom:rV(20),
      color:"#000000",
      fontWeight:'600',
      fontSize:rMS(16)
    }
    
})