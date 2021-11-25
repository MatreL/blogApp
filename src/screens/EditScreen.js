import React, {useContext} from 'react'
import { StyleSheet } from 'react-native'
import BlogpostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';

const EditScreen = ({navigation}) => {
  const id = navigation.getParam("id");
  const {state, updateBlogPost} = useContext(Context);

  const blogPost = state.find(
    blogPost => blogPost.id === id
  )

  return (
  <BlogpostForm 
      initialValues = {{title: blogPost.title, content: blogPost.content}}
      onSubmit={(title, content) => {
        updateBlogPost(id, title, content, () => navigation.pop());
  }} />
  )
}

export default EditScreen

const styles = StyleSheet.create({})
