import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Replace with the desired icon library
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
  Social:undefined;
  Courses:undefined;
 
  // Add other routes here
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'DashboardScreen'>;

const DashboardScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome User</Text>
      {/* Profile button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ProfileScreen')}
      >
        <Icon name="user" size={20} color="white" />
        <Text style={styles.buttonText}>my Profile</Text>
      </TouchableOpacity>
      {/* Education button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Courses')}
      >
        <Icon name="graduation-cap" size={20} color="white" />
        <Text style={styles.buttonText}>Education</Text>
      </TouchableOpacity>
      {/* Scams button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Scams')}
      >
        <Icon name="exclamation-triangle" size={20} color="white" />
        <Text style={styles.buttonText}>Scams</Text>
      </TouchableOpacity>
    {/* Social button */}
    <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Social')}
      >
        <Icon name="users" size={20} color="white" />
        <Text style={styles.buttonText}>Social</Text>
      </TouchableOpacity>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    flexDirection: "column", // Align icon and text horizontally
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
