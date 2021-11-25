import React, {useContext} from 'react'
import { StyleSheet } from 'react-native'
import BlogpostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';

const EditScreen = ({navigation}) => {
  const {state} = useContext(Context);

  const blogPost = state.find(
    blogPost => blogPost.id === navigation.getParam("id"));

  return (
  <BlogpostForm 
      initialValues = {{title: blogPost.title, content: blogPost.content}}
      onSubmit={(title, content) => {
        console.log(title, content)
  }} />
  )
}

export default EditScreen

const styles = StyleSheet.create({})
