import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListingDetailsScreen from './app/Screens/ListingDetailsScreen';
import MessagesScreen from './app/Screens/MessagesScreen';
import ViewImageScreen from './app/Screens/ViewImageScreen';
import WelcomeScreen from './app/Screens/WelcomeScreen';
import AppButton from './Components/AppButton';
import Card from './Components/Card'

export default function App() {
  return (
    // <WelcomeScreen/>
    // <ViewImageScreen/>

    <MessagesScreen/>

    // <View style={styles.container}>
    //    <AppButton title="Login" onPress={() =>  console.log('Press Login Button')}/>
    // </View>

    // <View style={{
    //   backgroundColor:'#f8f4f4',
    //   padding:20,
    //   paddingTop:100
    // }}>
    //  <Card 
    //     title="Red Jacket for sale"
    //     subTitle="$100"
    //     image={require('./app/assets/jacket.jpg')}
    //  />
    // </View>

    // <ListingDetailsScreen/>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center', 
    alignItems:'center'
  }
});
