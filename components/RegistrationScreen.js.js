import { StyleSheet, Text, View, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { setIsSignedIn } from '../redux/actions';

export default function RegistrationScreen() {

    const dispatch = useDispatch()
    const setIsSignedInAction = () => dispatch(setIsSignedIn(true))

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