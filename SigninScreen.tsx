import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();


const SignupScreen = () => {
    const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [cellNumber, setCellNumber] = useState<string>('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 6; // Password must be at least 6 characters
  };

  const validateCellNumber = (number: string) => {
    return /^\d{10}$/.test(number); // Cell number must be 10 digits
  };

  const handleSignup = () => {
    let isValid = true;
    let newErrors: { [key: string]: string } = {};

    if (!validateEmail(email)) {
      newErrors.email = 'Invalid email address.';
      isValid = false;
    }

    if (!validatePassword(password)) {
      newErrors.password = 'Password must be at least 6 characters.';
      isValid = false;
    }

    if (!validateCellNumber(cellNumber)) {
      newErrors.cellNumber = 'Cell number must be 10 digits.';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      console.log('Signup button pressed with valid input');
      // Implement your signup logic here
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Create an Account</Text>

      <TextInput
        style={styles.input}
        placeholder="First Name"
        
        />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
      />
       <TextInput
        style={styles.input}
        placeholder="Cell Number"
        />
      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
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
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    width: '80%',
  },
  signupButton: {
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  
});
export default SignupScreen;

