import { View, Text, StyleSheet, FlatList, ActivityIndicator, Modal, Pressable ,Dimensions,Alert} from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore';
import { rV,rS,rMS } from '../Styles/responsive';
import Available from '../PopUp/Available';
import BookedByMe from '../PopUp/BookedByMe';
import BookedBy from '../components/BookedBy';
import BuyersDetails from '../components/BuyersDetails';
import BookingPage from '../components/BookingPage';
import BlockedBy from '../components/BlockedBy';
import Sold from '../components/Sold';

const colorobj = {
  "blue": "#00B1E1",
  "red": "#E9573F",
  "yellow": "#F6BB42",
  "grey":"#808080"
}

const GetModalByStatus=({currSector, closeModal}:any)=>{
 const currStatus=currSector?.Status   
 switch(currStatus){
  case "red" : return <Sold closeModal={closeModal}/> ; 
  case "grey" : return <Available closeModal={closeModal}/> ;
  case "yellow" : return <BookedByMe closeModal={closeModal}/> ;
  case "blue" : return <BookedByMe closeModal={closeModal}/> ;
// default : return <></>
 }
}

const Home = () => {
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [Sectors, setSectors] = useState([]); // Initial empty array of users
  const [currSector, setcurrSector] = useState({})
  const [openModal, setopenModal] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);

 const closeModal=()=>{
  setModalVisible(false)
 }
  console.log('currSector', currSector)
  useEffect(() => {
    const subscriber = firestore()
      .collection('Sectors')
      .onSnapshot(querySnapshot => {
        const Sectors: any = [];

        querySnapshot.forEach(documentSnapshot => {
          Sectors.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setSectors(Sectors);
        setLoading(false);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);
  if (loading) {
    return <ActivityIndicator />;
  }
  
  console.log(Sectors)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projects</Text>

      <FlatList
        // horizontal
        data={Sectors}
        renderItem={({ item }) => (
          <Pressable onPress={() => {
            setcurrSector(item)
           setModalVisible(true)

          }}>
            <View style={[{backgroundColor:`${colorobj[item?.Status]}`},styles.Flatlist]}>
              <Text style={styles.HomeFlux}>Home Flux</Text>
              <Text style={styles.name}>{item.name}</Text>
            </View>
          </Pressable>
        )}
        numColumns={2}
      />
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
            {/* <Text style={styles.modalText}>{currSector.Status}</Text> */}
            {/* { getModalByStatus(currSector, closeModal)} */}
            <GetModalByStatus currSector={currSector} closeModal={closeModal}/>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      
    </View>
  )
}

export default Home
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3C27D",
  },
  title: {
    fontSize:rMS(30),
    fontWeight: '600',
    marginTop: rV(30),
    marginLeft:rS(20)
  },
  Flatlist: {
    fontSize:rMS(20),
    padding:rV(1),
    // backgroundColor: "#C2A5C1",
    borderRadius: rMS(20),
    margin:rS(3),
    height:rV(140),
    width:rS(170),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:rV(10),
    marginRight:rS(10),
    

  },
  HomeFlux: {
    fontSize:rMS(20),
    fontWeight: '400',
    color: "#FFFFFF"
  },
  name: {
    fontSize:rMS(20),
    fontWeight: '400',
    color: "#000000"

  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    padding:0
  },
  modalView: {
    // margin: 20,
    // padding:0,
    // borderRadius: 20,
    alignItems: 'center',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },


})