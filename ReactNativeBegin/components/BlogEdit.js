import React, { useState, useContext } from 'react';
import { Context as BlogContext } from '../contexts/BlogContextProvider';
import { useNavigation, useRoute } from '@react-navigation/native';
import BlogPostForm from './BlogPostForm';

const BlogEdit = () => {
    const { id } = useRoute().params;
    const { state, editBlogPost } = useContext(BlogContext);
    const navigation = useNavigation();
    const blogPost = state.blogLists.find(value => {
        return value.id == id;
    })

    return (
        <BlogPostForm blogPost={blogPost} onSubmit={(title, content) => {
            editBlogPost(id, title, content, () => navigation.pop())
        }} />
    );
}

export default BlogEdit;