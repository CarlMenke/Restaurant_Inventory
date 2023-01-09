import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions';
import User from "../models/user"
import BcryptReactNative from 'bcrypt-react-native';
import { get, child, ref } from '@firebase/database';
import { db, auth } from '../firebaseConfig'


//const bcrypt = require("bcrypt")

export default function RegistrationScreen() {

  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [displayMessage, setDisplayMessage] = useState("")

  const dispatch = useDispatch()
  const setUserAction = (user) => dispatch(setUser(user))

  const signup = async () => {
    if(password !== "" && userName !== ""){
      const salt = await BcryptReactNative.getSalt(10)
      const hashedPassword = await BcryptReactNative.hash(salt, password);
      const user = new User(userName, hashedPassword)
      const res = await user.addToDataBase()
      if(res ? res.completed : false){
        setUserAction(user)
      }
      setDisplayMessage(res.message)
    }else{
      setDisplayMessage("Please Enter Valid Name And Password")
    }
  }

  const login = async () => {
    if(password !== "" && userName !== ""){
      await get(child(ref(db), `/users/${userName}`)).then(async (snapshot) => {
        if(snapshot.exists()){
          const hash = snapshot.child(`${snapshot._node.children_.root_.key}/hashedPassword`)._node.value_
          const isSame = await BcryptReactNative.compareSync(password, hash);
          if(isSame){
            const user = new User(userName, hash)
            setUserAction(user)
          }else{
            setDisplayMessage("Incorrect Password")
          }
        }else{
          setDisplayMessage("User Not Found.")
        }
      }).catch((error) => {
          console.error(error);
      });
    }else{
      setDisplayMessage("Please Enter Valid Name And Password")
    }
  }

  //second anuthenticate all the calls to and from the database  (research the professional ways that acceptable with apple)

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
            onChangeText = {setUserName}
            value = {userName}
            placeholder = "Enter Username"/>
          <TextInput 
            onChangeText = {setPassword}
            value = {password}
            placeholder = "Enter Password"/>
          <Button
            onPress = {signup}
            title = "Signup" />
          <Button
            onPress = {login}
            title = "Login" />
      </View>
  )
}