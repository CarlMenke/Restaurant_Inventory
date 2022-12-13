import { StyleSheet, Text, View } from 'react-native';


export default function ViewMenuItems() {
    return (
        <View style={styles.container}>
            <Text>Menu Items</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: '#ffd',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });