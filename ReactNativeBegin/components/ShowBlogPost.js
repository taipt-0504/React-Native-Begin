import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Context as BlogContext } from '../contexts/BlogContextProvider';

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    content: {
        fontSize: 16,
        textAlign: 'justify'
    }
})

const ShowBlogPost = ({ }) => {
    const { state } = useContext(BlogContext)
    const { id } = useRoute().params;

    const blogPost = state.blogLists.find(value => {
        return value.id == id;
    })
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {blogPost.title}
            </Text>
            <Text style={styles.content}>
                {blogPost.content}
            </Text>
        </View>
    );
}

export default ShowBlogPost;