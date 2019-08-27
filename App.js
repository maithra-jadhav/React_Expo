import React from 'react';
import { Home } from './app/views/Home.js';
import { Contact } from './app/views/Contact.js';
import { StackNavigator } from 'react-navigation';
import {createStackNavigator, createAppContainer} from 'react-navigation';

  
const MainNavigator = createStackNavigator({
  HomeRT: {screen: Home},
  ContactRT: {screen: Contact},
});


const App = createAppContainer(MainNavigator);

export default App;



