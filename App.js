import * as React from 'react';
import { Provider } from 'react-redux';
import {store} from './redux/store';
import 'react-native-gesture-handler';
import Navigation from './components/Navigation';

export default function App() {
  return (
    <Provider store = { store }>
      <Navigation/>
    </Provider>
  )

}

