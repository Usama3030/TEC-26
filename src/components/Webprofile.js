import React, { useState } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";

const WebProfile = () => {
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
        //  source={{ uri: 'https://usama3030.github.io/Portfolio/' }}
        source={{ uri: "https://www.youtube.com/" }}
        style={styles.webview}
        onLoadEnd={handleLoadEnd}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
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

export default WebProfile;
