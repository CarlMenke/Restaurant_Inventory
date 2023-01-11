import { StyleSheet, View} from 'react-native';

export default function MenuItemForm() {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: '#fdf',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

    return(
        <View>
        <Button 
            onPress = {addMenuItem}
            title = "Add"/>
        </View>
    )
  }