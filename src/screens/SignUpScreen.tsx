import { View, Text, StyleSheet, Image, TextInput, Alert, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth'
import { useState, FC } from 'react'
import firestore from '@react-native-firebase/firestore';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";


interface Props {
    title: string
    onPress: () => void;
}
const MyButton: FC<Props> = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.Btncontainer}>
            <Text style={styles.Btntitle}>{title}</Text>
        </TouchableOpacity>
    )
}


const SignUpScreen = ({ navigation }: any) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const ref = firestore().collection('Users');


    // const [confirmPassword,setConfirmPassword]=useState("")
    const Add = async () => {
        await ref.add({
            Email: email

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
    const MyTextInput = ({ ...props }) => {
        return (
            <TextInput
                style={styles.border}
                {...props}
            />
        )
    }

    return (
        <View style={styles.container}>
            <Image source={require("../assets/MAhalaxmi-1.png")} style={styles.MAhalaxmiImageStyle} />

            <View style={styles.DataSection}>
                <ImageBackground source={require("../assets/Ellipse-12.png")} resizeMode='cover' style={styles.EllipseContainerStyle} >
                    <View style={styles.formContainer}>
                        <Text style={styles.SignUptext}>SignUp</Text>
                        <MyTextInput value={email} onChangeText={(text: string) => setEmail(text)} placeholder='Email or User name' />
                        <MyTextInput value={password} onChangeText={(text: string) => setPassword(text)} placeholder='Password' secureTextEntry />
                        {/* <MyTextInput placeholder='Confirm Password' secureTextEntry/> */}
                        <Text style={styles.HaveAccount} onPress={() => { navigation.navigate("Login") }}>Already have an Account</Text>
                        <MyButton title={"SignUp"} onPress={signUpTestFn} />
                    </View>
                </ImageBackground>
            </View>
        </View>
    )
}

export default SignUpScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E3C27D",
    },
    SignUptext: {
        fontSize: 25,
        fontWeight: '600',
        color: '#000000',
        marginBottom: responsiveHeight(2)
    },
    MAhalaxmiImageStyle: {
        height: responsiveHeight(25),
        width: responsiveWidth(80),
        marginTop: responsiveHeight(5),
        marginLeft: responsiveWidth(8),
        resizeMode: 'contain',
        elevation: 0
    },
    DataSection: {
        height: 480,
        width: 320,
        marginTop: responsiveHeight(1),
        marginVertical: 10,
        paddingVertical: responsiveHeight(7)
    },
    HaveAccount: {
        color: '#0000008A',
        marginBottom: responsiveHeight(1),
        marginTop: responsiveHeight(0),
        fontSize: 10,
        fontWeight: '500',
    },
    EllipseContainerStyle: {
        width: "100%",
        height: "100%",
        maxWidth: 320,
        aspectRatio: 3 / 2
        // position:'relative'
    },
    formContainer: {
        // elevation:3,
        height: "100%",
        width: "100%",
        marginLeft: responsiveWidth(-5),
        paddingLeft: responsiveWidth(10),
        gap: 15,
        paddingVertical: responsiveHeight(7),
        margin: 20,
        maxHeight: 400,
        maxWidth: 300,
        minWidth: 300,
        minHeight: 300,
        // paddingTop:responsiveHeight(10)
    },
    border: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 3,
        paddingLeft: 8,
        height: 28,
        width: "80%",
        maxWidth: 200,
        maxHeight: 80,
        fontWeight: '600'
    },
    Btncontainer: {
        height: 35,
        width: "35%",
        maxWidth: 200,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#56698F",
        borderRadius: responsiveWidth(15),
        elevation: 3,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        shadowRadius: 15,
        shadowOffset: { width: 1, height: 13 },
    },
    Btntitle: {
        color: "#FFFFFF",
        fontSize: responsiveFontSize(1.6),
        fontFamily: "Redressed-Regular"
    }
})