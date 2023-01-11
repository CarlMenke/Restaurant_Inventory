import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions';
import User from "../models/user"
import BcryptReactNative from 'bcrypt-react-native';

export default function RegistrationScreen() {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [displayMessage, setDisplayMessage] = useState("")

  const dispatch = useDispatch()
  const setUserAction = (user) => dispatch(setUser(user))

  const signup = async () => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(password !== "" && firstName !== "" && lastName !== "" && emailRegex.test(email)){
      const salt = await BcryptReactNative.getSalt(10)
      const hashedPassword = await BcryptReactNative.hash(salt, password);
      const user = new User(firstName, lastName, email, hashedPassword)
      const res = await user.addToDataBase()
      if(res ? res.completed : false){
        console.log(user)
        setUserAction(user)
      }
      setDisplayMessage(res.message)
    }else{
      setDisplayMessage("Invalid Credentials")
    }
  }

  const login = async () => {

  }

  const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#dff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      displayMessage: {
        fontWeight:'bold'
      }
    });
  return (
      <View style={styles.container}>
          <Text style={styles.displayMessage}>{displayMessage}</Text>
          <Text>Login Or Signup</Text>
          <TextInput
            onChangeText = {setFirstName}
            value = {firstName}
            placeholder = "First Name"/>
          <TextInput 
            onChangeText = {setLastName}
            value = {lastName}
            placeholder = "Last Name"/>
          <TextInput 
            onChangeText = {setEmail}
            value = {email}
            placeholder = "Email"/>
          <TextInput 
            onChangeText = {setPassword}
            value = {password}
            placeholder = "Password"/>
          <Button
            onPress = {signup}
            title = "Signup" />
          <Button
            onPress = {login}
            title = "Login" />
      </View>
  )
}