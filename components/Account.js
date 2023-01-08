import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { setUser } from '../redux/actions'
import { useSelector, useDispatch } from 'react-redux';

export default function  Account(){
    
    //used to update the store through an aciton
    const dispatch = useDispatch()
    const setUserAction = (user) => dispatch(setUser(user))
    
    //used to get data from the reducer which gets it from the store
    const { user } = useSelector(state => state.reducer)
    

    const logout = () => {
        setUserAction(null)
    }

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
            <Text > Signed In As: {user.name}</Text>
            <Button
                onPress={logout}
                title={"Logout"}
            />
        </View>
    )
}
