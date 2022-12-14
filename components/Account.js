import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { setUserName } from '../redux/actions'
import { useSelector, useDispatch } from 'react-redux';

export default function  Account(){

    //component scope state
    const [ userNameInput, setUserNameInput ] = useState("")
    
    //used to update the store through an aciton
    const dispatch = useDispatch()
    const setUserNameAction = () => dispatch(setUserName(userNameInput))
    
    //used to get data from the reducer which gets it from the store
    const { userName } = useSelector(state => state.reducer)

    //component scope styling
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          flexDirection: "column",
          backgroundColor: "#fed",
          alignItems: 'center',
          justifyContent: 'center',
        },
    });

    return (
        <View style={styles.container}>
            <Text > Username: {userName}</Text>
            <TextInput
                onChangeText = {setUserNameInput}
                value = {userNameInput}
                placeholder = "Enter Username"
            />
            <Button
                onPress = {setUserNameAction}
                title = "Enter"
            />
        </View>
    )
}
