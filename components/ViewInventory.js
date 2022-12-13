import { StyleSheet, Text, View } from 'react-native';


export default function ViewInventory() {
    return (
        <View style={styles.container}>
            <Text>Inventory</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: '#fdf',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });