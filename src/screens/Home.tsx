import { View, Text, StyleSheet, FlatList, ActivityIndicator, Modal, Pressable,Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';
import Available from '../PopUp/Available';
import BookedByMe from '../PopUp/BookedByMe';
import BlockedByMe from '../PopUp/BlockedByMe';
import Sold from '../components/Sold';
import BlockedBy from '../components/BlockedBy';
import BookedBy from '../components/BookedBy';

const colorobj = {
  "blue": "#00B1E1",
  "red": "#E9573F",
  "yellow": "#F6BB42",
  "grey": "#808080"
}

const GetModalByStatus = ({ currSector, closeModal,currentUser}: any) => {
  const currStatus = currSector?.Status
  const currowner = currSector?.owner
  if (currStatus === "red") {
    return <Sold closeModal={closeModal} currSector={currSector} />
  }
  else if (currStatus === "grey" ) {
    return <Available closeModal={closeModal} currSector={currSector} />
  }
  else if (currStatus === "yellow" && currowner===currentUser ) {
    return <BlockedByMe closeModal={closeModal} currSector={currSector} />
  }
  else if (currStatus==="yellow" && currowner!==currentUser){
      return <BlockedBy closeModal={closeModal} currSector={currSector}/>
  }
  else if (currStatus === "blue" && currowner===currentUser) {
    return <BookedByMe closeModal={closeModal} currSector={currSector} />
  }
  else if (currStatus === "blue" && currowner!==currentUser){
    return<BookedBy closeModal={closeModal} currSector={currSector}/>
  }

  // switch (currStatus) {
  //   case "red": return <Sold closeModal={closeModal} currSector={currSector} />;
  //   case "grey": return <Available closeModal={closeModal} currSector={currSector} />;
  //   case "yellow": return <BlockedByMe closeModal={closeModal} currSector={currSector} />;
  //   case "blue": return <BookedByMe closeModal={closeModal} currSector={currSector} />;
  //   // default : return <></>
  // }
}

const Home = () => {
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [Sectors, setSectors] = useState([]); // Initial empty array of users
  const [currSector, setcurrSector] = useState({})
  const [openModal, setopenModal] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);
  const currentUser = firebase.auth().currentUser;


  const closeModal = () => {
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
      <Text style={styles.titleProject}>Projects</Text>
  <View style={styles.FlatWrapper}>
      <FlatList
        // horizontal
        columnWrapperStyle={styles.row}
        numColumns={2}

        data={Sectors}
        renderItem={({ item }) => (
          <Pressable onPress={() => {
            setcurrSector(item)
            setModalVisible(true)

          }}>
            <View style={[{ backgroundColor: `${colorobj[item?.Status]}` }, styles.Flatlist]}>
              <Text style={styles.HomeFlux}>Home Flux</Text>
              <Text style={styles.name}>{item.name}</Text>
            </View>
          </Pressable>
        )}
      />
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

            <GetModalByStatus currSector={currSector} currUser={currentUser} closeModal={closeModal} />
            
          </View>
        </View>
      </Modal>

    </View>
  );
};
export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3C27D",
    alignItems:'stretch',  
  },
  titleProject: {
    fontSize:35,
    color:"#000000",
    fontWeight: '600',
    marginTop: 30,
    marginLeft:25
  },
  Flatlist: {
    fontSize:20,
    padding:25,
    borderRadius:20,
    margin: 25,
    flex: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    height:"150%",
    maxWidth:300,
    maxHeight:200
  },
  FlatWrapper:{
    flex:1,
    justifyContent:'space-between'

  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
    
  },

  HomeFlux: {
    fontSize: 26,
    fontWeight: '400',
    color: "#FFFFFF"
  },
  name: {
    fontSize:25,
    fontWeight: '400',
    color: "#000000"

  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {

    alignItems: 'center',
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
