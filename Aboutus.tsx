import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

// Define the root stack navigation parameter list
type RootStackParamList = {
  Home: undefined;
  SignupScreen: undefined;
  LoginScreen: undefined;
  AboutUs: undefined;
  TeamsScreen: undefined; // Define Teams screen in the navigation stack
};

// Define props for AboutUsScreen
type AboutUsScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'AboutUs'>;
};

const AboutUsScreen: React.FC<AboutUsScreenProps> = ({ navigation }) => {
  const handleMeetTheTeamPress = () => {
    navigation.navigate('TeamsScreen'); // Navigate to the Teams screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.content}>
        We are a team dedicated to making investment accessible and easy for everyone.
        Our app provides real-time market data, expert analysis, and secure investment options.
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleMeetTheTeamPress}>
        <Text style={styles.buttonText}>Meet the Team</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles for AboutUsScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#9400d3',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  content: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#9400d3', // Purple color
  },
});

export default AboutUsScreen;
