import { View, Text, StyleSheet, Pressable, Image, Button, Alert, Modal } from 'react-native'
import React, { useState } from 'react'
import { rV, rS, rMS } from '../Styles/responsive'
import RadioForm from 'react-native-simple-radio-button';
import MyButton from '../components/MyButton';
import firestore from '@react-native-firebase/firestore';
import auth from "@react-native-firebase/auth";
import { firebase } from '@react-native-firebase/auth';
import BuyersDetails from '../components/BuyersDetails';
import BookingPage from '../components/BookingPage';


const GetModalByOptions = ({ currSector, chosenOption, closeModal }: any) => {
  const currowner = currSector?.owner
  console.log(chosenOption)
  
  if (chosenOption === "yellow"){
    return <BuyersDetails currSector={currSector} closeModal={closeModal} currowner={currowner} />
  }
  
    return <BookingPage currSector={currSector} closeModal={closeModal} currowner={currowner} />
  }




const Available = ({ closeModal, currSector }: any) => {


  const currentUser = firebase.auth().currentUser;


  const [chosenOption, setChosenOption] = useState('');
  const ref = firestore().collection('Sectors');
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  //will store our current user options
  const OnSubmit = () => {
    if (chosenOption === 'red') {
      ref
        .doc(currSector.key)
        .update({
          owner: currentUser?.email || "",
          Status: chosenOption
        })
        .then(() => {
          Alert.alert('User updated!');
          closeModal()

        });

    } else if (chosenOption === 'yellow' || chosenOption === 'blue') {
      showModal();

    } 
  }



  const options = [
    { label: 'Block', value: 'yellow' },
    { label: 'Book', value: 'blue' },
    { label: 'Sold', value: 'red' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => closeModal()}>
          <Image source={require("../assets/charm_cross.png")} style={styles.imageStyle} />
          <Text style={styles.text}>Status:Available(Plot#)</Text>
        </Pressable>
        <Text style={styles.text1}>Select Status</Text>
        <View style={styles.Block1}>
          <RadioForm
            radio_props={options}
            buttonColor='black'
            initial={0} //initial value of this group
            onPress={(value) => {
              setChosenOption(value);
              
            }} //if the user changes options, set the new value
          />
        </View>
        {/* <Button title={'Change Status'}  onPress={()=>{navigation.navigate("BuyersDetails")}}/> */}

        <Pressable style={styles.Button} onPress={OnSubmit}>
          <Text style={styles.text3} >Change Status</Text>
        </Pressable>


      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <GetModalByOptions currSector={currSector} chosenOption={chosenOption} closeModal={closeModal} />
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default Available
const styles = StyleSheet.create({
  container: {

    height: rV(275),
    width: rS(236),
    backgroundColor: "#AAEDFB",
    marginTop: rV(50),
    // marginLeft: rS(50),
    borderRadius: rMS(15)
  },
  header: {

    height: rV(30),
    width: rS(236),
    backgroundColor: "#1A5F6D",
    borderRadius: rMS(5)


  },
  text: {
    fontSize: rMS(16),
    fontWeight: '600',
    color: "#FFFFFF",
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: rS(38),
    marginTop: rV(-22)
  },
  imageStyle: {
    marginLeft: rS(215),
    marginTop: rV(4)

  },
  text1: {
    fontSize: rMS(14),
    marginTop: rV(37),
    marginLeft: rS(29),
    height: rV(17),
    width: rS(83),
    fontWeight: '500',
    lineHeight: rV(16.8), color: "#000000"
  },

  Button: {
    height: rV(26),
    width: rS(131),
    marginTop: rV(20),
    marginLeft: rS(55),
    borderRadius: rMS(15),
    backgroundColor: "#808080"

  },
  text3: {
    alignItems: 'center',
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: rMS(14),
    marginTop: rV(3),
    marginLeft: rS(18)
  },
  Block1: {
    height: rV(90),
    width: rS(181),
    marginTop: rV(12),
    marginLeft: rS(30),
    backgroundColor: "#FFFFFF",
    borderRadius: rMS(5),
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    padding: 0
  },
  modalView: {
    alignItems: 'center',
  }
})