import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Flexbox = () => {
  return (
    <View style={{ 
      backgroundColor: '#fff',
      flex:1 ,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
    }}>
      <View
        style={{
          backgroundColor:'orange',
          flexBasis:100,
          // width:100,
          height:100
        }}
      ></View>
      <View
      style={{
        backgroundColor:'yellow',
        width:100,
        height:100
      }}
      ></View>
      <View
      style={{
        backgroundColor:'blue',
        width:100,
        height:100
      }}
      ></View>
    </View>
  )
}

const styles = StyleSheet.create({

})


export default Flexbox;