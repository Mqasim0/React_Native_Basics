import React from 'react'
import { View, StyleSheet, Image, TouchableHighlight, Touchable } from 'react-native';
import colors from '../app/config/colors';
import AppText from './AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';


const ListItem = ({image, title, subTitle, onPress, renderRightActions}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
    <TouchableHighlight
    underlayColor={colors.light}
    onPress={onPress}
    >
    <View style={styles.container}>
      <Image style={styles.image} source={image}/>
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
    </TouchableHighlight>
    </Swipeable>
  )
}


const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    padding:15
  },
  image:{
    width:70,
    height:70,
    borderRadius:35,
    marginRight: 10
  },
  title:{
    fontWeight:"900"
  },
  subTitle:{
    color: colors.medium
  }
})

export default ListItem;