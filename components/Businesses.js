import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import User from "../models/user"
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import BcryptReactNative from 'bcrypt-react-native';
import { get, child, ref } from '@firebase/database';
import { db, auth } from '../firebaseConfig'

export default function Businesses() {

  const [action , setAction ] = useState("")
  const [businessName, setBusinessName] = useState()

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: '#fdf',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

    const createBusiness = () => {

    }
    switch(action){
      case "creating":
        return(
          <BusinessForm/>
        )
    }
    return (
        <View style={styles.container}>
            <Text>Businesses</Text>
            <Button 
              onPress = {createBusiness}
              title = "Create" />
        </View>
    )
  }