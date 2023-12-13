import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet, StatusBar } from 'react-native';
import { globalStyles } from './src/styles/globalStyles';
import HomeScreen from './src/screens/homeScreen';

const Stack = createStackNavigator();

const App = () => {
  console.log("App Executed");
  return (

<NavigationContainer>
<Stack.Navigator initialRouteName="Home">
  <Stack.Screen name="Fire Guard" component={HomeScreen} />
</Stack.Navigator>
</NavigationContainer>

  );
};

export default App;
