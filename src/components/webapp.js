import React, { useState, useEffect } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";

//const localhostURL = process.env.REACT_URL;

const WebApp = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadEnd = () => {
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      {isLoading && (
        <ActivityIndicator size="large" style={styles.loadingIndicator} />
      )}
      <WebView
        source={{ uri: "http://192.168.18.42:3000/list" }}
        style={styles.webview}
        onLoadEnd={handleLoadEnd}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        onLoad={(event) => console.log("WebView loaded")}
        onError={(error) => console.error("WebView error:", error)}
        onMessage={(message) => console.log("WebView message:", message)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    backgroundColor: "blue",
    paddingVertical: 10,
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 18,
  },
  webview: {
    flex: 1,
  },
  loadingIndicator: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
});

export default WebApp;
