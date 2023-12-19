
// import React, { useState, useEffect } from "react";
// import { StyleSheet, View, ActivityIndicator } from "react-native";
// import { WebView } from "react-native-webview";
// import {API_URL} from '@env';
// // import {YT_URL} from '@env';
//  import {useNavigation} from '@react-navigation/native';

// const WebApp = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   const handleLoadEnd = () => {
//     setIsLoading(false);
//   };
//   // console.log(API_URL)

//   const navigation = useNavigation();

//   const goBack = (webview) => {
//     webview.navigation.goBack();
//   };

//   return (
//     <View style={styles.container}>
//       {isLoading && (
//         <ActivityIndicator size="large" style={styles.loadingIndicator} />
//       )}
//       <WebView
//        // source={{ uri: `${API_URL}` }}
//         // source={{ uri: `${YT_URL}` }}
//         source={{ uri: "http://192.168.10.4:3000" }}
//         style={styles.webview}
//         onMessage={(event) => console.log("WebView message:", event.nativeEvent.data)}
//         injectedJavaScript={`
//     document.getElementById('yourSubmitButton').click();
//   `}
//         onLoadEnd={handleLoadEnd}
//         javaScriptEnabled={true}
//         domStorageEnabled={true}
//         onLoad={(event) => console.log("WebView loaded:", event.nativeEvent)}
//         onError={(error) => console.error("WebView error:", error)}
//         // onMessage={(message) => console.log("WebView message:", message)}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "black",
//   },
//   header: {
//     backgroundColor: "blue",
//     paddingVertical: 10,
//     alignItems: "center",
//   },
//   headerText: {
//     color: "white",
//     fontSize: 18,
//   },
//   webview: {
//     flex: 1,
//   },
//   loadingIndicator: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgba(0, 0, 0, 0.8)",
//   },
// });

// export default WebApp;



// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { View, StyleSheet, StatusBar } from 'react-native';
// import { globalStyles } from './src/styles/globalStyles';
// import HomeScreen from './src/screens/homeScreen';

// const Stack = createStackNavigator();

// const App = () => {
//   console.log("App Executed");
//   return (

// <NavigationContainer>
// <Stack.Navigator initialRouteName="Home">
//   <Stack.Screen name="Fire Guard" component={HomeScreen} />
// </Stack.Navigator>
// </NavigationContainer>

//   );
// };

// export default App;