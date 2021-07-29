import React from 'react'
import { View , StyleSheet, Touchable, TouchableWithoutFeedback} from 'react-native';
import colors from '../app/config/colors';

import { MaterialCommunityIcons} from '@expo/vector-icons'

const ListItemDelete = ({onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.separable}> 
      <MaterialCommunityIcons 
        name="trash-can"
        size={35}
        color="white"
      />
    </View>
    </TouchableWithoutFeedback>
  )
}


const styles = StyleSheet.create({
  separable:{
    backgroundColor: colors.danger,
    width:70,
    justifyContent:'center',
    alignItems:'center'
  }
})

export default ListItemDelete;
