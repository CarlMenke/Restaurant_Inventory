import { StyleSheet, Text, View, Button } from 'react-native';
import { useDispatch } from 'react-redux';

export default function RegistrationScreen() {

    const dispatch = useDispatch()
    const setIsSignedIn = () => dispatch(setIsSignedIn(true))

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
                onPress = {setIsSignedIn}
                title = "Enter" />
        </View>
    )
}