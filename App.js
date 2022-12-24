import * as React from 'react';
import { Provider, useSelector } from 'react-redux';
import {store} from './redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import HomeScreen from './components/HomeScreen';
import ViewInventory from './components/ViewInventory';
import ViewMenuItems from './components/ViewMenuItems';
import Account from './components/Account';
import RegistrationScreen from './components/RegistrationScreen.js';

const Tab = createBottomTabNavigator();

export default function App() {

  const { isSignedIn } = useSelector(state => state.reducer)

  if(isSignedIn){
    return (
      <Provider store = { store }>
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
      </Provider>
    )
  }else{
    return(
      <RegistrationScreen/>
    )
  }
}

