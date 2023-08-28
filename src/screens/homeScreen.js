import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
    const navigation = useNavigation();

    const handleProfile1Press = () => {
      navigation.navigate('React Profile'); // Navigate to WebViewScreen
    };
    const handleProfile2Press = () => {
        navigation.navigate('Elegant Profile'); // Navigate to WebViewScreen
      };
  return (
    <View style={styles.container}>
    <Text style={styles.message}>Which profile do you want to see?</Text>
    <TouchableOpacity style={styles.button} onPress={handleProfile1Press}>
      <Text style={styles.buttonText}>Profile 1</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={handleProfile2Press}>
      <Text style={styles.buttonText}>Profile 2</Text>
    </TouchableOpacity>
  </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    message: {
      fontSize: 18,
      marginBottom: 20,
    },
    button: {
      backgroundColor: 'blue',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginBottom: 10,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
  });

export default HomeScreen;
