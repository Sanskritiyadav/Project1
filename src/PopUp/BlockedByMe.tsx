import { View, Text, Image, Pressable, StyleSheet, TextInput, Alert, Modal } from 'react-native'
import React, { useState } from 'react'
import { rV, rS, rMS } from '../Styles/responsive'
import RadioForm from 'react-native-simple-radio-button';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';
import BuyersDetails from '../components/BuyersDetails';
import BookingPage from '../components/BookingPage';



const GetModalByOptions = ({ currSector, chosenOption, closeModal }: any) => {
  const currowner = currSector?.owner
  console.log("Status",currSector)
  
  if (chosenOption === "blue" || chosenOption==="grey"){
    return <BuyersDetails currSector={currSector} closeModal={closeModal} currowner={currowner} chosenOption={chosenOption} />
  }
  
  
}
  

const BlockedByMe = ({closeModal, currSector }: any) => {

  const currentUser = firebase.auth().currentUser;
  console.log("blocked by me",currSector)
  


  const [chosenOption, setChosenOption] = useState('');
  const ref = firestore().collection('Sectors');

  const [modalVisible, setModalVisible] = useState(false);

  //will store our current user options

  const options = [
    { label: 'Available', value: 'grey' },
    { label: 'Book', value: 'blue' },
    { label: 'Sold', value: 'red' },
  ];
  const showModal = () => {
    setModalVisible(true);
  };
  const OnChangeStatus = () => {
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
      }
    }

    const OnSubmit = () => {
      if (chosenOption === 'blue' || chosenOption === 'grey') {
      showModal();
      }   
    }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={closeModal}>
          <Image source={require("../assets/charm_cross.png")} style={styles.imageStyle} />
          <Text style={styles.text}>Blocked By Me(Plot#)</Text>
        </Pressable>

        <Text style={styles.text1}>Buyers Name</Text>
        <TextInput style={styles.Block} placeholder='' />

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
        <Text style={styles.text2}>This will become available again after the time expires</Text>

        <Pressable style={styles.Button} onPress={OnChangeStatus}>
          <Text style={styles.text3}>Change Status</Text>
        </Pressable>
        <Pressable style={styles.Button2} onPress={OnSubmit}>
          <Text style={styles.text3}>Modify Details</Text>
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

export default BlockedByMe


const styles = StyleSheet.create({
  container: {

    height: rV(470),
    width: rS(236),
    backgroundColor: "#AAEDFB",
    marginTop: rV(50),
    // marginLeft: rS(30),
    borderRadius: rMS(15),
    marginBottom: rV(50)
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
    marginTop: rV(-19)
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
    lineHeight: rV(16.8),
    color: "#000000"
  },
  Block1: {
    height: rV(90),
    width: rS(181),
    marginTop: rV(12),
    marginLeft: rS(30),
    backgroundColor: "#FFFFFF",
    borderRadius: rMS(5),
  },
  Block: {
    height: rV(29),
    width: rS(181),
    marginTop: rV(12),
    marginLeft: rS(28),
    backgroundColor: "#FFFFFF",
    borderRadius: rMS(5),
  },
  text2: {
    marginTop: rV(20),
    marginLeft: rS(10),
    fontSize: rMS(15),
    lineHeight: 15.6
  },
  Button: {
    height: rV(26),
    width: rS(131),
    marginTop: rV(10),
    marginLeft: rS(55),
    borderRadius: rMS(15),
    backgroundColor: "#56698F",
    padding: 10,
    justifyContent: 'space-between',
    marginBottom: rV(-50)
  },
  text3: {
    alignItems: 'center',
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: rMS(14),
    marginTop: rV(-6),
    marginLeft: rS(16),

  },
  Button2: {
    height: rV(26),
    width: rS(131),
    marginTop: rV(70),
    marginLeft: rS(55),
    borderRadius: rMS(15),
    backgroundColor: "#56698F",
    padding: 10,
    marginBottom: rV(-60)
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
  }
})