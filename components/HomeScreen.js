import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {

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
            <Text>Home</Text>
        </View>
    )
}