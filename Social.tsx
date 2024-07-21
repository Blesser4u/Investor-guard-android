import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useColorScheme } from '@/hooks/useColorScheme';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  ProfileScreen: undefined;
  Education: undefined;
  Scams: undefined;
  DashboardScreen: undefined;
  Social: undefined;
  Courses: undefined;
  Twitter: undefined;
  facebook: undefined;
  // Add other routes here
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Twitter'>;

const DashboardScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const backgroundImageUri = 'https://lapraim.com/assets/images/insights/social-media-editorial-content-planning-tools/editorial-content-planning-tools-social-media.jpg'; // Replace with your image URI

  return (
    <ImageBackground source={{ uri: backgroundImageUri }} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Our Social Media Page</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('facebook')}
        >
          <Icon name="facebook" size={20} color="white" />
          <Text style={styles.buttonText}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Twitter')}
        >
          <Icon name="twitter" size={20} color="white" />
          <Text style={styles.buttonText}>Twitter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Twitter')}
        >
          <Icon name="tiktok" size={20} color="white" />
          <Text style={styles.buttonText}>TikTok</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent overlay
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  button: {
    flexDirection: 'row', // Align icon and text horizontally
    alignItems: 'center', // Center vertically
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    marginLeft: 10, // Add some spacing between icon and text
  },
});

export default DashboardScreen;
