import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet, StatusBar } from 'react-native';
import { globalStyles } from './src/styles/globalStyles';
import HomeScreen from './src/screens/homeScreen';
import WebApp from './src/components/webapp';
import WebProfile from './src/components/Webprofile';

const Stack = createStackNavigator();

const App = () => {
  console.log("App Executed")
  return (

<NavigationContainer>
<Stack.Navigator initialRouteName="Home">
  <Stack.Screen name="Home" component={HomeScreen} />
  <Stack.Screen name="React Profile" component={WebApp} />
  <Stack.Screen name="Elegant Profile" component={WebProfile} />
</Stack.Navigator>
</NavigationContainer>

  );
};

export default App;
