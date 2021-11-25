import React, {useContext} from 'react'
import { StyleSheet } from 'react-native'
import BlogpostForm from '../components/BlogPostForm'
import { Context } from '../context/BlogContext'

const CreateScreen = ({navigation}) => {
  const {addBlogPost } = useContext(Context)

  return <BlogpostForm onSubmit={(title, content) => {
    addBlogPost(title, content, () => navigation.navigate("Index"))
  }} />

}

export default CreateScreen

const styles = StyleSheet.create({
 
});
