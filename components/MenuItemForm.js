import { StyleSheet, Text, View, TextInput } from 'react-native';
import User from "../models/user"
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useDispatch } from 'react-redux';
import BcryptReactNative from 'bcrypt-react-native';
import { get, child, ref } from '@firebase/database';
import { db, auth } from '../firebaseConfig'

export default function MenuItemForm() {

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
        <Button 
            onPress = {addMenuItem}
            title = "Add"/>
        </View>
    )
  }