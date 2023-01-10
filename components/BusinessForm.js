import { StyleSheet, Text, View, TextInput } from 'react-native';
import User from "../models/user"
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useDispatch } from 'react-redux';
import BcryptReactNative from 'bcrypt-react-native';
import { get, child, ref } from '@firebase/database';
import { db, auth } from '../firebaseConfig'
import MenuItemForm from './MenuItemForm';

export default function BusinessForm() {

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

    return(
        <View>
        <TextInput
            onChangeText = {setBusinessName}
            value = {businessName}
            placeholder = "Enter Business Name"/>
        <MenuItemForm/>
        </View>
    )
}