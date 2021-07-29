import React from 'react'
import {View, StyleSheet, TouchableOpacity, Text  } from 'react-native';

import colors from '../app/config/colors';

const AppButton = ({title, onPress, color= "primary"}) => {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button:{
     backgroundColor: colors.primary,
     justifyContent:'center',
     alignItems:'center',
     borderRadius:25,
     padding:15,
     width:'100%',
     marginVertical:10
  },
  text:{
    color:'#fff',
    fontSize:18,
    fontWeight:'bold',
    textTransform:'uppercase'
  }
})


export default AppButton;