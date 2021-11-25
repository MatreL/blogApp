import React, {useContext} from 'react'
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import { EvilIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 


const IndexScreen = ({navigation}) => {
    
    const {state, addBlogPost, deleteBlogPost} = useContext(Context);

    return (
        <View>
            <Button  title="Add post" onPress={() => addBlogPost()} />
            <FlatList 
                data={state}
                keyExtractor={blogPosts => blogPosts.id}
                renderItem={({item}) =>{
                    return (
                    <TouchableOpacity onPress={() => navigation.navigate("Show", {id: item.id})}>
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.title}</Text>
                        <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                            <EvilIcons style={styles.icon} name="trash" />
                        </TouchableOpacity>
                    </View>
                    </TouchableOpacity>
                    )
                }}
                />
        </View>
    );
};

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: ( ) => (
        <TouchableOpacity onPress={ () => navigation.navigate("Create")}>
            <AntDesign style={styles.headerIcon} name="plus" size={30} color="black" />
        </TouchableOpacity>
        )
    };
};

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
    },
    headerIcon: {
        marginRight: 20
    }
})

export default IndexScreen
