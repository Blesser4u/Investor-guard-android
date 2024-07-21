import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  SignupScreen: undefined;
  Login: undefined;
  Aboutus: undefined;
  Dashboard: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();



  

  return (
    <View style={styles.container}>
        <Text style={styles.logoText}>INVESTOR GUARD</Text>
  <Image
    source={{ uri: 'https://www.creativefabrica.com/wp-content/uploads/2018/11/Graphic-concept-logo-by-DEEMKA-STUDIO.jpg' }}
    style={styles.image}
  />
      <Text style={styles.text}>investment solutions for you</Text>
      <Text style={styles.text}>(you cannot be scammed while We’re watching)</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 500,
    height: 250,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'darkblue',
    padding: 10,
    borderRadius: 25,
    marginBottom: 20,
    width: 150,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  logoText: {
    color: 'darkblue',
    fontSize: 28,
    fontStyle: 'italic',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  
},
text: {
  color: '#4b5320',
  fontSize: 15,
  fontStyle: 'italic',
  marginBottom: 20,
}
});

export default HomeScreen;
