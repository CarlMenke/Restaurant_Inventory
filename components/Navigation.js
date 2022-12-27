import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import HomeScreen from './HomeScreen';
import ViewInventory from './ViewInventory';
import ViewMenuItems from './ViewMenuItems';
import Account from './Account';
import RegistrationScreen from './RegistrationScreen.js';

const Tab = createBottomTabNavigator();

export default function Navigation() {

    const { isSignedIn } = useSelector(state => state.reducer)
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          flexDirection: "column",
          backgroundColor: '#ffd',
          alignItems: 'center',
          justifyContent: 'center',
        },
    });

      if(isSignedIn){
        return (
            <NavigationContainer>
                <Tab.Navigator>
                <Tab.Screen
                    name="Inventory"
                    component={ViewInventory}
                />
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Tab.Screen
                    name="Menu"
                    component={ViewMenuItems}
                />
                <Tab.Screen
                    name="Account"
                    component={Account}
                />
                </Tab.Navigator>
            </NavigationContainer>
        )
      }else{
        return(
          <RegistrationScreen/>
        )
      }
}