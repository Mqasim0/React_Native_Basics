import React from 'react'
import constants from 'expo-constants'
import { View, StyleSheet, SafeAreaView } from 'react-native';


const Screen = ({children}) => {
  return (
    <SafeAreaView style={styles.screen}>
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen:{
    paddingTop: constants.statusBarHeight,
    flex: 1
  }
})

export default Screen;