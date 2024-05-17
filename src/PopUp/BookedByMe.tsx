import { View, Text, StyleSheet,Pressable,Image ,TextInput} from 'react-native'
import React from 'react'
import { rV , rS , rMS } from '../Styles/responsive'

const BookedByMe = ({navigation,closeModal}:any) => {
    return (
        
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={closeModal}>
                    <Image source={require("../assets/charm_cross.png")} style={styles.imageStyle}/>
          <Text style={styles.text}>Booked By Me(Plot#)</Text>
          </Pressable>
        
        <Text style={styles.text1}>Buyers Name</Text>
        <TextInput style={styles.Block} placeholder=''/>

        <Text style={styles.text1}>Booking Date</Text>
        <TextInput style={styles.Block} placeholder=''/>
    
          <Text style={styles.text1}>Select Status</Text>  
    
           
          <View style={styles.Block}>
            <Text style={styles.text2}>Block</Text>
            </View> 
            <View style={styles.Block}>
            <Text style={styles.text2}>Available</Text>
            </View> 
            <View style={styles.Block}>
            <Text style={styles.text2}>Sold</Text>
            </View>    
    
            {/* <Button title={'Change Status'} onPress={()=>{Navigation.navigate("BuyersDetails")}} style={styles.Button}/> */}
            <Pressable style={styles.Button} onPress={()=>{navigation.navigate("BuyersDetails")}}>
          <Text style={styles.text3}>Change Status</Text>
        </Pressable>
        <Pressable style={styles.Button2} onPress={()=>{navigation.navigate("BuyersDetails")}}>
          <Text style={styles.text3}>Modify Details</Text>
        </Pressable>
    
          </View>
        </View>
        
      )
    }


export default BookedByMe
const styles=StyleSheet.create({
    container:{
        
        height:rV(470),
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
        marginTop:rV(-19)
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
        lineHeight:rV(16.8),
        color:"#000000"
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
        marginTop:rV(10),
        marginLeft:rS(55),
        borderRadius:rMS(15),
        backgroundColor:"#56698F",
        padding:10,
        justifyContent:'space-between',
        marginBottom:rV(-50)
    },
    text3:{
        alignItems:'center',
        color:"#FFFFFF",
        fontWeight:"600",
        fontSize:rMS(14),
        marginTop:rV(-6),
        marginLeft:rS(16),

    },
    Button2:{
        height:rV(26),
        width:rS(131),
        marginTop:rV(70),
        marginLeft:rS(55),
        borderRadius:rMS(15),
        backgroundColor:"#56698F",
        padding:10,
        marginBottom:rV(-60)
    

    }
 
})