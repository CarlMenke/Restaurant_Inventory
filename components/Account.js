import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { connect } from 'react-redux';
import { setUserName } from '../redux/actions'
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

export const SET_USERNAME = "SET_USERNAME"



const  Account = () => {

    const dispatch = useDispatch()

    const { userName } = useSelector(state => state.userReducer)
    const [ userNameInput, setUserNameInput ] = useState("")


    const setUserNameAction = () => dispatch(setUserName(userNameInput))

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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: '#dfe',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

const mapStateToProps = state => ({
    userName : state.userName
})

const ActionCreators = Object.assign(
    {},
    setUserName,
)

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Account)
