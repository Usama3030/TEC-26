import React, { useEffect, useRef, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, Button } from 'react-native';
import { WebView } from "react-native-webview";
import { ActivityIndicator, BackHandler } from 'react-native';
import { TouchableOpacity, Image } from 'react-native';
import {API_URL} from '@env';
import { FontAwesome } from '@expo/vector-icons'; 

const Loading = () => <ActivityIndicator
  style={[styles.container, styles.loading]}
  color="blue"
  size="large"
/>

const WebviewScreen = ({ navigation }) => {
  const webviewRef = useRef(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  const [currentURL, setCurrenetURL] = useState('http://192.168.1.20:3000');

  const backAction = () => {
 if(canGoBack){
    webviewRef.current.goBack();
 }else {
  navigation.goBack();
 }
    return true;
  }

  const forwardAction = () => {
    if(webviewRef.current) webviewRef.current.goForward();
  }

  useEffect(() =>{
    BackHandler.addEventListener("hardwareBackPress", backAction);
    () => BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, [ canGoBack ])

  return (
    <>
    <WebView
    ref= {webviewRef}
     // source={{ uri: `${API_URL}` }}
      source={{ uri: currentURL }}
      style={styles.webview}
      startInLoadingState
      renderLoading={Loading}
      onNavigationStateChange={navState =>{
        setCanGoBack(navState.canGoBack);
        setCanGoForward(navState.canGoForward);
        setCurrenetURL(navState.url)
      }}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      onLoad={(event) => console.log("WebView loaded:", event.nativeEvent)}
      onError={(error) => console.error("WebView error:", error)}
      // onMessage={(message) => console.log("WebView message:", message)}
//       onMessage={(event) => console.log("WebView message:", event.nativeEvent.data)}
//       injectedJavaScript={`
//   document.getElementById('yourSubmitButton').click();
// `}
/>
    <View style= {styles.navigationContainer}>
<TouchableOpacity disabled={!canGoBack} onPress={backAction} style={styles.navigationButton}>
  {/* <Text style= {[styles.btn, !canGoBack && {color: 'gray'} ]}>Back</Text> */}
  <FontAwesome name="chevron-left" size={24} color={canGoBack ? 'black' : 'grey'} />
</TouchableOpacity>
<TouchableOpacity disabled={!canGoForward} onPress={forwardAction} style={styles.navigationButton}>
  {/* <Text style= {[styles.btn, !canGoForward && {color: 'gray'} ]}>Forward</Text> */}
  <FontAwesome name="chevron-right" size={24} color={canGoForward ? 'black' : 'grey'} />
</TouchableOpacity>
    </View>
    </>
  )
}

const Stack = createStackNavigator();

const App = () => {
  console.log("App Executed");
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Fire Guard" component={WebviewScreen}   options={{
            title: 'Fire Guard',
            headerStyle: {
              // backgroundColor: '#3498db',
              // backgroundColor: '#34495e', 
              backgroundColor: '#EDF1F2',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    loading: {
      position: "absolute",
      height: "100%",
      width: "100%"
    },
    navigationContainer: {
      // backgroundColor: "#3498db",
      backgroundColor: "#EDF1F2",
      padding: 10,
      justifyContent: "space-around",
      flexDirection: "row"
    },
    navigationButton: {
      padding: 10,
      borderRadius: 5,
    },
  }
)

export default App;
