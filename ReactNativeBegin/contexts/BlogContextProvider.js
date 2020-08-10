import React, { useState } from 'react';

const BlogContext = React.createContext();

export const BlogContextProvider = ({ children }) => {
    const [blogLists, setBlogLists] = useState([]);

    const addBlogPost = () => {
        setBlogLists([...blogLists, { title: `${blogLists.length + 1}`, content: `content ${blogLists.length + 1}` }]);
    }

    return (
        <BlogContext.Provider value={{ blogLists, addBlogPost }}>
            {children}
        </BlogContext.Provider>
    )
};

export default BlogContext;