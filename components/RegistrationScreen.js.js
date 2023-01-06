import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { setIsSignedIn } from '../redux/actions';
import { firebaseConfig } from '../firebaseConfig'

export default function RegistrationScreen() {

    const dispatch = useDispatch()

    const setIsSignedInAction = () => dispatch(setIsSignedIn(true))

    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()

    const signInAttempt = async () => {
      const data = {
        userName: userName,
        password: password
      }
      const res = await firebaseConfig.collection('users').add(data)
      console.log(res)
    }
 
    //YOU SHOULD BE ABLE TO WRITE TO A FIREBASE DATABASE FROM HERE

    //maybe be able to watch a firebase documents? subscriptions?
    //first be able to read and write from a database
    //second anuthenticate all the calls to and from the database  (research the professional ways that acceptable with apple)

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          flexDirection: "column",
          backgroundColor: '#dff',
          alignItems: 'center',
          justifyContent: 'center',
        },
      });
    return (
        <View style={styles.container}>
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
                onPress = {setIsSignedInAction}
                title = "Go to signed in screen" />
            <Button
                onPress = {signInAttempt}
                title = "Add user to firebase" />
        </View>
    )
}