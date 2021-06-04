import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Footer from './component/Footer/Footer';
import HomeScreen from './component/HomeScreen';

export default function App() {
  return (
    <View>
      <HomeScreen></HomeScreen>
      <Footer></Footer>
    </View>
  );
}

