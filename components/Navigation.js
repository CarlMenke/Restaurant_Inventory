import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import HomeScreen from './HomeScreen';
import Businesses from './Businesses';
import ViewMenuItems from './ViewMenuItems';
import Account from './Account';
import SignUpScreen from './SignUpScreen.js';

const Tab = createBottomTabNavigator();

export default function Navigation() {

    const { user } = useSelector(state => state.reducer)

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          flexDirection: "column",
          backgroundColor: '#544D57',
          alignItems: 'center',
          justifyContent: 'center',
        },
    });

      if(user){
        return (
            <NavigationContainer style={styles.container}>
                <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Tab.Screen
                    name="Businesses"
                    component={Businesses}
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
          <SignUpScreen/>
        )
      }
}