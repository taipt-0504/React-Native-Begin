import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';

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

const BlogPostForm = ({ onSubmit, blogPost }) => {
    const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                Enter Title:
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={setTitle}
                value={title}
            />
            <Text style={styles.label}>
                Enter Content:
            </Text>
            <TextInput
                style={styles.input}
                multiline={true}
                numberOfLines={5}
                onChangeText={setContent}
                value={content}
            />
            <Button
                title="Save Blog Post"
                onPress={() => {
                    onSubmit(title, content);
                }}
            />
        </View>
    );
}

BlogPostForm.defaultProps = {
    blogPost: {
        title: '',
        content: ''
    }
}

export default BlogPostForm;