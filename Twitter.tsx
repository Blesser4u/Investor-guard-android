import { StackNavigationProp } from '@react-navigation/stack';
import { Linking } from 'react-native';


type RootStackParamList = {
    Home:undefined;
    SignupScreen: undefined;
    LoginScreen: undefined;
    Aboutus: undefined;
    Courses:undefined;
    facebook:undefined
  };
  
  type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'facebook'>;
  
  import React from 'react';
  import { View, StyleSheet } from 'react-native';
  import { WebView } from 'react-native-webview';
  
  const FacebookWebView = () => {
    return (
      <View style={styles.container}>
        <WebView source={{ uri: 'https://x.com/BNhlahla12343/communities/explore' }} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  
  export default FacebookWebView;
  