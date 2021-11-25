import React, {useContext} from 'react'
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import { EvilIcons } from '@expo/vector-icons'; 


const IndexScreen = () => {

    const {state, addBlogPost, deleteBlogPost} = useContext(Context);

    return (
        <View>
            <Button title="Add post" onPress={() => addBlogPost()} />
            <FlatList 
                data={state}
                keyExtractor={blogPosts => blogPosts.title}
                renderItem={({item}) =>{
                    return <View style={styles.row}>
                        <Text style={styles.title}>{item.title}</Text>
                        <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                            <EvilIcons style={styles.icon} name="trash" />
                        </TouchableOpacity>
                    
                    </View>
                }}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: "gray",
    },
    title: {
        fontSize: 18
    },
    icon:{
        fontSize: 32
    }
})

export default IndexScreen
