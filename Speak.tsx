import { Platform } from 'react-native';
import * as Speech from 'expo-speech';

export const speak = (text: string) => {
  if (Platform.OS === 'android') {
    // For Android, use the react-native-tts package
    import('react-native-tts').then((Tts) => {
      Tts.default.speak(text);
    });
  } else {
    // For iOS and web, use the expo-speech package
    Speech.speak(text);
  }
};
