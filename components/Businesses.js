import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react'

export default function Businesses() {

  const [action , setAction ] = useState("")
  const [businessName, setBusinessName] = useState()

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: '#fdf',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

    const createBusiness = () => {

    }
    switch(action){
      case "creating":
        return(
          <BusinessForm/>
        )
    }
    return (
        <View style={styles.container}>
            <Text>Businesses</Text>
            <Button 
              onPress = {createBusiness}
              title = "Create" />
        </View>
    )
  }