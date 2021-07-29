import React from 'react'
import { View, StyleSheet, Image } from 'react-native';
import AppText from '../../Components/AppText';
import colors from '../config/colors';
import ListItem from '../../Components/ListItem';

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/jacket.jpg')}/>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
        <ListItem
         image={require('../assets/qasim.jpeg')}
         title="Muhammad Qasim"
         subTitle="5 listings"
      />    
        </View>
      
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  detailsContainer:{
    padding:20
  },
  title:{
    fontSize:24,
    fontWeight:"500"
  },
  price:{
    color:colors.secondary,
    fontWeight:'bold',
    fontSize:20,
    marginVertical:10
  },
  image:{
    width: '100%',
    height: 300
  },
  userContainer:{
    marginVertical:50
  }
})

export default ListingDetailsScreen;