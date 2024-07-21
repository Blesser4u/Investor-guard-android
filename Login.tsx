import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, ImageBackground, Image, Alert, TouchableOpacity } from 'react-native';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendPasswordResetEmail, onAuthStateChanged } from '@firebase/auth';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

import { StackNavigationProp } from '@react-navigation/stack';
import { auth } from '@/firebaseConfig';

type RootStackParamList = {
  Home: undefined;
  SignupScreen: undefined;
  LoginScreen: undefined;
  AboutUs: undefined;
  DashboardScreen: undefined;
  Courses: undefined;
  ScamAwarenessScreen: undefined;
  Social: undefined;
  TeamScreen: undefined;
  HomeScam: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'DashboardScreen'>;

const AuthScreen = ({
  email,
  setEmail,
  password,
  setPassword,
  reenterPassword,
  setReenterPassword,
  isLogin,
  setIsLogin,
  handleAuthentication,
  error,
}: {
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  reenterPassword: string;
  setReenterPassword: (value: string) => void;
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
  handleAuthentication: () => void;
  error: string;
}) => {
  const resetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert('Password Reset Email Sent', 'Check your email to reset your password.');
    } catch (error: any) {
      Alert.alert('Password Reset Failed', error.message);
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://media.istockphoto.com/photos/hacher-with-a-mask-is-using-laptop-picture-id952350664?k=6&m=952350664&s=612x612&w=0&h=LOl839L4LXBaveqxYCxwiZ-bWci90I2iuEWdFcubuX8=' }}
      style={styles.background}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.authContainer}>
        <Text style={styles.title}>{isLogin ? 'Sign In' : 'Sign Up'}</Text>
        {!isLogin && (
          <>
            <TextInput
              style={styles.input}
              placeholder="Full Names"
              placeholderTextColor="#aaa"
              autoCapitalize="words"
            />
            <TextInput
              style={styles.input}
              placeholder="Surname"
              placeholderTextColor="#aaa"
              autoCapitalize="none"
            />
          </>
        )}
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor="#aaa"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
        />
        {!isLogin && (
          <TextInput
            style={styles.input}
            value={reenterPassword}
            onChangeText={setReenterPassword}
            placeholder="Re-enter Password"
            placeholderTextColor="#aaa"
            secureTextEntry
          />
        )}
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleAuthentication}>
            <Ionicons name="person" size={24} color="white" />
            <Text style={styles.buttonText}>{isLogin ? 'Sign In' : 'Register'}</Text>
          </TouchableOpacity>
          
          {isLogin && (
            <TouchableOpacity style={[styles.button, { backgroundColor: '#000060' }]} onPress={resetPassword}>
              <Ionicons name="lock-closed" size={24} color="white" />
              <Text style={styles.buttonText}>Reset Password</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.toggleText} onPress={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Need an account? Register' : 'Already have an account? Sign In'}
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const AuthenticatedScreen = ({ user, handleAuthentication }: { user: any; handleAuthentication: () => void }) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [image, setImage] = useState<string | null>(null);

  const goToCourse = () => {
    navigation.navigate('Courses');
  };

  const goToScams = () => {
    navigation.navigate('HomeScam');
  };

  const goToSocial = () => {
    navigation.navigate('Social');
  };

  const pickImage = async (source: 'camera' | 'gallery') => {
    let result: ImagePicker.ImagePickerResult;

    if (source === 'camera') {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission denied', 'We need camera permissions to make this work!');
        return;
      }

      result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
    } else {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission denied', 'We need media library permissions to make this work!');
        return;
      }

      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
    }

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://th.bing.com/th/id/OIP.SyR1Ljl-UCw5777o81jGrwHaNK?w=1242&h=2208&rs=1&pid=ImgDetMain' }}
      style={styles.background}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.authContainer}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.emailText}>{user.email}</Text>
        {image && <Image source={{ uri: image }} style={styles.image} />}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => pickImage('camera')}>
            <Ionicons name="camera" size={24} color="white" />
            <Text style={styles.buttonText}>Upload Image</Text>
          </TouchableOpacity>
        </View>
       
        <TouchableOpacity style={styles.button} onPress={goToScams}>
          <Icon name="exclamation-triangle" size={20} color="white" />
          <Text style={styles.buttonText}>Scams</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={goToCourse}>
          <Icon name="graduation-cap" size={20} color="white" />
          <Text style={styles.buttonText}>Courses</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={goToSocial}>
          <Icon name="users" size={20} color="white" />
          <Text style={styles.buttonText}>Social</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { backgroundColor: '#e74c3c' }]} onPress={handleAuthentication}>
          <Ionicons name="log-out" size={24} color="white" />
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reenterPassword, setReenterPassword] = useState('');
  const [user, setUser] = useState<any>(null);
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleAuthentication = async () => {
    try {
      if (user) {
        await signOut(auth);
        console.log('User logged out successfully!');
      } else {
        if (isLogin) {
          await signInWithEmailAndPassword(auth, email, password);
          console.log('User signed in successfully!');
        } else {
          if (password !== reenterPassword) {
            setError('Passwords do not match');
            return;
          }
          await createUserWithEmailAndPassword(auth, email, password);
          console.log('User created successfully!');
        }
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {user ? (
        <AuthenticatedScreen user={user} handleAuthentication={handleAuthentication} />
      ) : (
        <AuthScreen
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          reenterPassword={reenterPassword}
          setReenterPassword={setReenterPassword}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          handleAuthentication={handleAuthentication}
          error={error}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000060',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 2,
    marginBottom: 10,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    opacity: 1,
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  authContainer: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 30,
    borderRadius: 10,
    elevation: 6,
    alignSelf: 'center',
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },
  input: {
    borderWidth: 2,
    borderColor: 'darkblue',
    borderRadius: 5,
    padding: 12,
    marginBottom: 16,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    fontSize: 16,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  toggleText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  bottomContainer: {
    marginTop: 20,
  },
  emailText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
  },
  errorText: {
    color: 'red',
    marginBottom: 16,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    alignSelf: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 18,
  },
});
