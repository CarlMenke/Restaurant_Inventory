import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions';
import User from "../models/user"
import BcryptReactNative from 'bcrypt-react-native';
import { get, child, ref } from '@firebase/database';
import { db, auth } from '../firebaseConfig'

export default function SignUpScreen() {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [displayMessage, setDisplayMessage] = useState("")
  const [method, setMethod] = useState("signup")
  const [header2, setHeader2] = useState("create an account below.")
  const [header3, setHeader3] = useState("Signup:")

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
          const hash = snapshot.val().hashedPassword
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
      setDisplayMessage("Please Enter Valid Name And Password 1")
    }
  }

  const toggleMethod = () => {
    if(method === "signup"){
      setMethod("login")
      setHeader2("nice to see you again.")
      setHeader3("Login: ")
    }else{
      setMethod("signup")
      setHeader2("create an account below.")
      setHeader3("Signup: ")
    }
  }

  const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#353535',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop:50
      },
      displayMessage: {
        fontWeight:'bold',
        position:"absolute",
        top:35
      },
      header:{
        alignSelf:"flex-start",
        paddingLeft:30
      },
      header1:{
        color:"#FFC600",
        fontSize: 60,
        shadowColor: "black",
        shadowOffset: {width: .7, height: .7},
        shadowOpacity: .8,
        shadowRadius: 1,
        fontFamily: "Arial Rounded MT Bold"
      },
      header2: {
        color:"#FEFEFE",
        fontSize:20,
        shadowColor: "black",
        shadowOffset: {width: .5, height: .5},
        shadowOpacity: .8,
        shadowRadius: 1,
        fontFamily: "Arial Rounded MT Bold",
        paddingLeft: 5
      },
      header3: {
        color:"#FEFEFE",
        fontSize:50,
        shadowColor: "black",
        shadowOffset: {width: .5, height: .5},
        shadowOpacity: .8,
        shadowRadius: 1,
        fontFamily: "Arial Rounded MT Bold",
        padding: 5
      },
      input:{
        backgroundColor:"grey",
        fontFamily: "Arial Rounded MT Bold"
      },
      loginInputs:{
        alignSelf:"stretch",
        marginLeft: 20,
        marginRight: 20,
        flex: .7
      },
      loginInput1: {
        fontFamily: "Arial Rounded MT Bold",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: "white",
        padding: 40,
        fontSize: 20,
        fontFamily: "Verdana"
      },
      line:{
        width: 10,
        height:5,
        borderColor: "grey",
        marginLeft: 100,
        marginRight: 100
      },
      loginInput2: {
        fontFamily: "Arial Rounded MT Bold",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: "white",
        padding: 40,
        fontSize: 20,
        fontFamily: "Verdana"
      },
      signupButton: {

      },
    });
    if(method === "signup"){
      return (
        <View style={styles.container}>
            <Text style={styles.displayMessage}>{displayMessage}</Text>
            <View style={styles.header}>
              <Text style={styles.header1}>Welcome,</Text>
              <Text style={styles.header2}>{header2}</Text>
            </View>
            <TextInput 
              style = {styles.input}
              onChangeText = {setFirstName}
              value = {firstName}
              placeholder = "First Name"/>
            <TextInput 
              style = {styles.input}
              onChangeText = {setLastName}
              value = {lastName}
              placeholder = "Last Name"/>
            <TextInput 
              style = {styles.input}
              onChangeText = {setEmail}
              value = {email}
              placeholder = "Email"/>
            <TextInput 
              style = {styles.input}          
              onChangeText = {setPassword}
              value = {password}
              placeholder = "Password"/>
            <Button
              style = {styles.button}
              onPress = {signup}
              title = "Enter" />
            <Button
              style = {styles.button}
              onPress = {toggleMethod}
              title = "I Already Have An Account." />
        </View>
      )
    }else{
      return (
        <View style={styles.container}>
            <Text style={styles.displayMessage}>{displayMessage}</Text>
            <View style={styles.header}>
              <Text style={styles.header1}>Welcome,</Text>
              <Text style={styles.header2}>{header2}</Text>
            </View>
            <View style = {styles.loginInputs}>
              <Text style = {styles.header3}>{header3}</Text>
              <TextInput 
                style = {styles.loginInput1}
                onChangeText = {setEmail}
                value = {email}
                placeholder = "Email"/>
                <View style={styles.line}/>
              <TextInput 
                style = {styles.loginInput2}          
                onChangeText = {setPassword}
                value = {password}
                placeholder = "Password"/>
            </View>
            <Button
              style = {styles.button}
              onPress = {login}
              title = "Enter" />
            <Button
              style = {styles.button}
              onPress = {toggleMethod}
              title = "Create Account"  />
        </View>
      )
    }
}