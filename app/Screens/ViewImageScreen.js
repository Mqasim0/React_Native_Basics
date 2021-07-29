import React from 'react'
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={30} />
      </View>
      <View style={styles.deleteIcon}>
      <MaterialCommunityIcons name="trash-can-outline" color="white" size={30} />
      </View>
    <Image style={styles.image} resizeMode="contain" source={require('../assets/chair.jpg')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#000',
    flex:1
  },
  closeIcon:{
    
    position:'absolute',
    top: 40,
    left: 30

  },
  deleteIcon:{
    position:'absolute',
    top: 40,
    right: 30

  },
  image:{
    width:'100%',
    height:'100%'


  }

})


export default ViewImageScreen;