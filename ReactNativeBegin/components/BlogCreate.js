import React, { useContext } from 'react';
import { Context as BlogContext } from '../contexts/BlogContextProvider';
import { useNavigation } from '@react-navigation/native';
import BlogPostForm from './BlogPostForm';

const BlogCreate = () => {
    const { addBlogPost } = useContext(BlogContext);
    const navigation = useNavigation();

    return (
        <BlogPostForm onSubmit={(title, content) => {
            addBlogPost(title, content, () => navigation.pop());
        }} />
    );
}

export default BlogCreate;