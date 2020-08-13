import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Context as BlogContext } from '../contexts/BlogContextProvider';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 5
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});

const BlogListItem = ({ blog }) => {
    const { deleteBlogPost } = useContext(BlogContext);
    const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Blog Detail Component', { id: blog.id })}>
                <Text style={styles.title}>
                    {blog.title}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(blog.id)}>
                    <Icon
                        style={styles.icon}
                        name='trash-2'
                    />
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
    )
};

export default BlogListItem;