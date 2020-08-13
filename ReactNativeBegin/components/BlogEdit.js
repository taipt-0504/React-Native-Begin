import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context as BlogContext } from '../contexts/BlogContextProvider';
import { useNavigation, useRoute } from '@react-navigation/native';

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10
    },
    input: {
        fontSize: 16,
        textAlign: 'justify',
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 5,
        textAlignVertical: 'top'
    }
})

const BlogEdit = () => {
    const {id} = useRoute().params;
    const { state, editBlogPost } = useContext(BlogContext);
    const blogPost = state.blogLists.find(value => {
        return value.id == id;
    })
    const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content);
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                Enter Title:
            </Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={setTitle}
            />
            <Text style={styles.label}>
                Enter Content:
            </Text>
            <TextInput
                style={styles.input}
                value={content}
                multiline={true}
                numberOfLines={5}
                onChangeText={setContent}
            />
            <Button
                title="Save"
                onPress={() => {
                    editBlogPost(id, title, content, () => navigation.navigate('Blog Component'));
                }}
            />
        </View>
    );
}

export default BlogEdit;