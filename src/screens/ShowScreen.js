import React, {useContext, useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext';
import { Entypo } from '@expo/vector-icons'; 

const ShowScreen = ({navigation}) => {

  const {state} = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id == navigation.getParam("id"));

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  )
};

ShowScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => (
      <TouchableOpacity 
        style={styles.headerIcon} 
        onPress={() => 
          navigation.navigate('Edit', {id: navigation.getParam("id") })
        }
          >
        <Entypo name="edit" size={24} color="black" />
      </TouchableOpacity>
    ),
  };
}

export default ShowScreen

const styles = StyleSheet.create({
  headerIcon: {
    marginRight: 20
}
})
