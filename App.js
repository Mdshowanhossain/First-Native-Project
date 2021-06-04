import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';
import hotels from './pSrc/consts/hotels';
import ProductPage from './pSrc/Components/Products/ProductPage';
import DetailsScreen from './pSrc/views/screens/DetailsScreen';
import HomeScreen from './pSrc/views/screens/HomeScreen';
import Footer from './pSrc/Components/Footer/Footer';
// import Body from './pSrc/Components/Body.js';
// import Home from './src/screens/Home';
// import ListCard from './src/screens/ListCard';
// import ModalCard from './src/screens/ModalCard';
// import Drawer from './src/Drawer.js';
export default function App() {


  return (
    <View>
      <Image source={require('./pSrc/assets/hotel3.jpg')} />
      <HomeScreen></HomeScreen>
      <ProductPage />
      <Footer />
      {/* <Body></Body>
      <Home />
      <ListCard />
      <ModalCard /> */}
      {/* <DrawerNav /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
