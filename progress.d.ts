declare module 'react-native-progress/Bar' {
    import { Component } from 'react';
    import { ViewStyle, TextStyle } from 'react-native';
  
    interface ProgressBarProps {
      progress: number;
      width?: number | string;
      height?: number;
      color?: string;
      unfilledColor?: string;
      borderColor?: string;
      borderRadius?: number;
      borderWidth?: number;
      style?: ViewStyle;
      textStyle?: TextStyle;
    }
  
    export default class ProgressBar extends Component<ProgressBarProps> {}
  }
  