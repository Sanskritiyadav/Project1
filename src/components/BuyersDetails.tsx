import { View, Text, StyleSheet, TextInput, Image, Pressable, Alert ,TouchableOpacity} from 'react-native'
import React, { useState,FC } from 'react'
import { rS, rV, rMS } from '../Styles/responsive'
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';
import { responsiveWidth,responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';


interface Props{
    title:string
    onPress: () => void;
    
  
  }
  const MyButton :FC <Props> = ({title,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.Btncontainer}>
        <Text style={styles.Btntitle}>{title}</Text>
    </TouchableOpacity>
  )
  }
const BuyersDetails = ({ currSector, closeModal,chosenOption}: any) => {
    const [name, setName] = useState("")
    const [Threshold, setThreshold] = useState('')
    const ref = firestore().collection('Sectors');
    const currentUser = firebase.auth().currentUser;


    const messageRef = firestore().collection('Messages');
    const pushToMessage = async () => {
        const currDate = new Date()
        const message = `${currentUser?.email} ${currSector.name} for showing to buyer ${name} on ${currDate} for threshold of  ${Threshold}`
        await messageRef.add({
            message: message,
        })
        console.log(message)


    }

console.log("Hii",currSector) 
    const OnSubmit = () => {
          
            ref
                .doc(currSector?.key)
                .update({
                    owner: currentUser?.email || "",
                    Status: chosenOption
                })
                .then(() => {
                    pushToMessage()
                    Alert.alert('User updated!');
                    closeModal()

                });       
    }


        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>Buyers Details</Text>
                <Pressable onPress={closeModal}>
                    <Image source={require("../assets/carbon_close-filled.png")} style={styles.ImageStyle} />
                </Pressable>


                <Text style={styles.Name}>Buyers Name*</Text>
                <TextInput style={styles.TextInput} placeholder='' value={name} onChangeText={(text) => setName(text)} />

                <Text style={styles.Name}>Threshold Duration frequency*</Text>
                <TextInput style={styles.TextInput} placeholder='' value={Threshold} onChangeText={(text) => setThreshold(text)} />

                <Text style={styles.Name}>Threshold Value*</Text>
                <TextInput style={styles.TextInput} placeholder='' />

                <Text style={styles.Name}>Select Document to Upload</Text>
                <TextInput style={styles.TextInput} placeholder='' />

                <Text style={styles.Name}>Remark</Text>
                <TextInput style={styles.TextInput} placeholder='' />

                <MyButton title={"Confirm"} onPress={OnSubmit} />

            </View>
        )
    }

    export default BuyersDetails
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#E3C27D",
            width:responsiveWidth(100),
            // margin:10,
            // padding:40,
            // justifyContent:'center',
            alignItems:'center'


        },
        textStyle: {
            fontSize: rMS(22),
            fontWeight: '700',
            lineHeight: rV(26.4),
            color: "#000000",
            height: rV(26),
            width: rS(144),
            // marginTop: rV(51),
            // marginLeft: rS(85)
        },
        TextInput: {
            fontSize: rMS(10),
            height: rV(29),
            width: responsiveWidth(81),
            marginTop: rV(5),
            // marginLeft: rS(30),
            borderRadius: rMS(3),
            backgroundColor: "#FFFFFF",
            borderColor: "#000000",
            borderWidth: rMS(2),


        },
        Name: {
            marginTop: rV(20),
            // marginLeft: rS(30),
            padding: rV(1),
            fontSize: rMS(18),
            fontWeight: '500',
            width:responsiveWidth(80)
        },
        ImageStyle: {
            marginTop: rV(-25),
            marginLeft: rS(280)
        },
        Btncontainer:{
        
            height:30,
            width:"35%",
            maxWidth:200,
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"#56698F",
            borderRadius:responsiveWidth(15),  
            elevation:3,
            shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 13},
        marginVertical:responsiveHeight(3)
          },
          Btntitle:{
            color:"#FFFFFF",
            fontSize:responsiveFontSize(2),
            fontFamily:"Redressed-Regular"
          }

    })