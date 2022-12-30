import { StyleSheet, Text, View, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { setIsSignedIn } from '../redux/actions';
import { firebase } from '../firebaseConfig'
import { getApps, initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function RegistrationScreen() {

    const dispatch = useDispatch()

    const setIsSignedInAction = () => dispatch(setIsSignedIn(true))

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
            <Button
                onPress = {setIsSignedInAction}
                title = "Enter" />
        </View>
    )
}