import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context as BlogContext } from '../contexts/BlogContextProvider';
import { useNavigation } from '@react-navigation/native';

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

const BlogCreate = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigation = useNavigation();
    const { addBlogPost } = useContext(BlogContext);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                Enter Title:
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={setTitle}
            />
            <Text style={styles.label}>
                Enter Content:
            </Text>
            <TextInput
                style={styles.input}
                multiline={true}
                numberOfLines={5}
                onChangeText={setContent}
            />
            <Button
                title="Save"
                onPress={() => {
                    addBlogPost(title, content, () => navigation.navigate('Blog Component'));
                }}
            />
        </View>
    );
}

export default BlogCreate;