import { View, Text, StyleSheet, FlatList, Pressable, Image, Alert, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { rS, rV, rMS } from '../Styles/responsive'
import firestore from '@react-native-firebase/firestore';
import { responsiveHeight,responsiveWidth,responsiveFontSize } from 'react-native-responsive-dimensions';

const Organisation = () => {
  const messageRef = firestore().collection('Messages');
  const [list, setList] = useState([])

  const testDelete = (id: any) => {
    messageRef.doc(id).delete()
      .then(() => {
        Alert.alert("Message deleted")
      })
      .catch(() => {
        Alert.alert("Error Happen")
      })
    console.log(messageRef.doc())
  }



  useEffect(() => {
    return messageRef.onSnapshot((querySnapshot) => {
      const list: any = []
      querySnapshot.forEach(doc => {
        list.push({
          id: doc.id,
          message: doc.data().message,
        })
        console.log(list)
      })
      setList(list)
    })
  }, [])



  return (

    <View style={styles.container}>
      <Text style={styles.title}>Organisation transaction</Text>

      <FlatList
        data={list}
        renderItem={({ item }) => (
          <View id={item.id} style={styles.card}>
            <Text style={{ fontSize: 16, fontWeight: "bold", color: 'black' }} >{item.message}</Text>

            <TouchableOpacity
              onPress={() => { testDelete(item.id) }}
              style={styles.DeleteButton}>
              <Image source={require("../assets/charm_cross.png")} />
            </TouchableOpacity>

          </View>
        )}
      />
    </View>
  )
}

export default Organisation
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3C27D"
  },
  title: {
    marginTop:responsiveHeight(4),
    marginLeft:responsiveWidth(17),
    fontSize: responsiveFontSize(3),
    color: '#000000',
    fontWeight: '600',
  },
  card: {
    width: "95%",
    padding: 3,
    marginLeft: responsiveWidth(2),
    // marginRight: res(10),
    borderRadius:1,
    borderColor: '#000000',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingHorizontal: 10,
    borderWidth:2
  },
  imageStyle: {
    marginLeft: rS(215),
    marginTop: rV(2)

  },
  DeleteButton: {

    marginTop: rV(2),
    marginBottom: rV(40),
    //  marginRight:rS(150),
    marginLeft: rS(-10)
  }
})