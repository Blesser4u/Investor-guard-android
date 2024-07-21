import { StackNavigationProp } from '@react-navigation/stack';
import { Linking } from 'react-native';


  
  import React from 'react';
  import { View, StyleSheet } from 'react-native';
  import { WebView } from 'react-native-webview';
  
  const FacebookWebView = () => {
    return (
      <View style={styles.container}>
        <WebView source={{ uri: 'https://www.facebook.com' }} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  
  export default FacebookWebView;
  