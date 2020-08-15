import React, { useContext, useEffect } from 'react';
import { View } from 'react-native';
import { Context as BlogContext } from '../contexts/BlogContextProvider';
import { FlatList } from 'react-native-gesture-handler';
import BlogListItem from './BlogListItem';
import { useNavigation } from '@react-navigation/native';

const BlogIndex = () => {
    const { state, fetchBlogLists } = useContext(BlogContext);
    const navigation = useNavigation();
    
    useEffect(() => {
        fetchBlogLists()

        const listener = navigation.addListener('focus', () => {
            fetchBlogLists();
        });

        return listener;
    }, []);
    
    return (
        <View>
            <FlatList
                data={state.blogLists}
                keyExtractor={item => item.title}
                renderItem={({ item }) => <BlogListItem blog={item} />}
            />
        </View>
    )
};

export default BlogIndex;