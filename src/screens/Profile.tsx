import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { rV, rS, rMS } from '../Styles/responsive'
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';
import { ScrollView } from 'react-native-gesture-handler';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';




const Profile = ({ navigation }: any) => {
  const currentUser = firebase.auth().currentUser;
  console.log(currentUser)

  return (
    <View style={styles.container}>
      {/* <View style={styles.main}> */}
      <View style={styles.section}>

        <Text style={styles.Profiletitle}> Profile</Text>

      </View>
        <View style={styles.inputcontainer}>
          <Image source={require("../assets/Image.png")} style={styles.UserimageStyle} />

          <Text style={styles.UserName}>Santosh Yadav</Text>
          <Text style={styles.UserEmail}>{currentUser?.email}</Text>
        </View>
      <View style={styles.section2}>
        <View style={styles.content}>
          {/* <Image source={require("../assets/VectorMark.png")} /> */}
          {/* <Text style={styles.text}>Help & Support</Text> */}

          <Image source={require("../assets/Group16.png")} />

          <Pressable onPress={() => { navigation.navigate("Organisation") }}>
            <Image source={require("../assets/Group86.png")} />
          </Pressable>

          <Pressable onPress={() => { navigation.navigate("Login") }}>
            <Image source={require("../assets/Group18.png")} />
          </Pressable>
          {/* <Text style={styles.text} onPress={() => { navigation.navigate("Login") }}>Logout</Text> */}
          {/* <Text style={styles.text} onPress={() => { navigation.navigate("Organisation") }}>Organization transaction</Text> */}
          <Text style={styles.Notetext}><Text style={{fontWeight:'bold'}}>Note</Text>- Organisation transaction is just for admins</Text>
        </View>
      </View>
    </View>

  )
}

export default Profile
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // padding:20
  },

  section: {
    flex: 3,
    backgroundColor: "#C2A5C1",
    // padding: 0,
    // justifyContent: 'center',
    alignItems: 'center',
    // marginBottom:responsiveHeight(10),
    height:responsiveHeight(50),

    // elevation:3
  },
  section2: {
    flex: 3,
    backgroundColor: "#E3C27D",
    // padding:5,
    // gap:20,
    marginTop: responsiveHeight(-20)

  },


  Profiletitle: {
    // marginTop: responsive,
    marginLeft: responsiveWidth(-3),
    fontSize: 30,
    color: "#FFFFFF",
    fontWeight: '600',
    padding: 20,
    zIndex:3

  },

  inputcontainer: {
    height: responsiveHeight(30),
    width: responsiveWidth(80),
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: "center",
    elevation: 3,
    position:'absolute',
    marginHorizontal:responsiveWidth(10),
    marginVertical:responsiveHeight(10),
    zIndex:2,
    paddingVertical:5,
    borderWidth:1
    
  },
  text: {
    // marginLeft: rV(60),
    // marginTop: rV(38),
    fontSize: rMS(20),
    fontWeight: '600',
    color: "#000000",
    // marginBottom:0.1,
    // gap: 1
  },
  Notetext: {
    // marginLeft:40,
    // marginTop: rV(35),
    fontSize: 20,
    padding: 10,
    width:"80%",
    fontWeight: '400',
    color: "#000000"

  },
  UserimageStyle: {
    resizeMode: 'cover',
    height: 72,
    width: 72,
    // borderRadius: responsiveWidth(7),
    margin: 20,
    marginTop: responsiveHeight(2),
    // elevation:10
  },
  UserName: {
    // marginBottom: 2),
    fontSize: responsiveFontSize(2.3),
    fontWeight: '600',
    color: "#000000"
  },
  UserEmail: {
    color: "#000000",
    fontWeight: '600',
    fontSize: responsiveFontSize(2)
  },
  content: {
    // padding:5,
    marginVertical:80,
    marginLeft:responsiveWidth(10),
    gap: 15
  }


})