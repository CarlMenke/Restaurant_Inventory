import { StyleSheet, Text, View, TextInput } from 'react-native';
import User from "../models/user"
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
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