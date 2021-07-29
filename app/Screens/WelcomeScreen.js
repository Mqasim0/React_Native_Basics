import React from 'react'
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import AppButton from '../../Components/AppButton';


const WelcomeScreen = () => {
  return (
   <ImageBackground 
    blurRadius={9}
   style={styles.background}
   source={require('../assets/background.jpg')}>
     
     <View style={styles.logoContainer}>
     <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
     <Text style={styles.tagline}>Sell What You Don't Need</Text>
     </View>
     
    <View style={styles.buttonContainer}>
      <AppButton title="login"/>
      <AppButton title="Register" color="secondary"/>
    </View>
     </ImageBackground>
  )
}

const styles= StyleSheet.create({
   background:{
     flex:1,
     justifyContent:'flex-end',
     alignItems:'center'
   },
   logo:{
    width:100,
    height:100,
   },
   buttonContainer:{
      padding:20,
      width:'100%'
   },
   logoContainer:{
    position:'absolute',
    top:70,
    alignItems:'center'
   },
   tagline:{
     fontSize: 25,
     fontWeight:"600",
     paddingVertical: 20
   }
   
})


export default WelcomeScreen;