import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/navigation/Navigator';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Navigator />
    </>
  );
}
