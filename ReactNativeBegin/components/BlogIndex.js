import React, { useState, useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { Context as BlogContext } from '../contexts/BlogContextProvider';
import { FlatList } from 'react-native-gesture-handler';
import BlogListItem from './BlogListItem';

const BlogIndex = () => {
    const { state } = useContext(BlogContext);

    return (
        <View>
            <FlatList
                data={state.blogLists}
                keyExtractor={item => item.title}
                renderItem={({ item }) => <BlogListItem blog={item}/>}
            />
        </View>
    )
};

export default BlogIndex;