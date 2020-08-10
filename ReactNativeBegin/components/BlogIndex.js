import React, { useState, useContext } from 'react';
import { View, Text, Button } from 'react-native';
import BlogContext, { BlogContextProvider } from '../contexts/BlogContextProvider';
import { FlatList } from 'react-native-gesture-handler';

const BlogIndex = () => {
    const { blogLists, addBlogPost } = useContext(BlogContext);

    return (
        <View style={{ flex: 1 }}>
            <Text>
                This is blog list
                </Text>
            <FlatList
                data={blogLists}
                keyExtractor={item => item.title}
                renderItem={({ item }) => <Text>{item.title}</Text>}
            />
            <Button
                title="Add"
                onPress={addBlogPost}
            />
        </View>
    )
};

export default BlogIndex;