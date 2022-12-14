import { StyleSheet, Text, View } from 'react-native';

export default function ViewInventory() {

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          flexDirection: "column",
          backgroundColor: '#fdf',
          alignItems: 'center',
          justifyContent: 'center',
        },
      });

    return (
        <View style={styles.container}>
            <Text>Inventory</Text>
        </View>
    )
}