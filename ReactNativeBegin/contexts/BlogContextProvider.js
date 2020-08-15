import createContextData from './createContextData';
import blogApi from '../api/blogApi';

const reducer = (state, payload) => {
    switch (payload.type) {
        case 'create':
            let id = Math.round(Math.random() * 100000);
            return { ...state, blogLists: [...state.blogLists, { id, title: payload.title, content: payload.content }] };
        case 'delete':
            return {
                ...state, blogLists: state.blogLists.filter(v => {
                    return v.id != payload.id;
                })
            };
        case 'edit':
            return {
                ...state, blogLists: state.blogLists.map((blog) => {
                    if (blog.id == payload.id) {
                        return { id: blog.id, title: payload.title, content: payload.content }
                    } else {
                        return blog;
                    }
                })
            }
        case 'fetch':
            return payload.data;

        default:
            return state;
    }
}

const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
        await blogApi.post('blogLists', { title, content })
        // dispatch({ type: 'create', title, content });
        if (callback) {
            callback();
        }
    }
}

const editBlogPost = (dispatch) => {
    return async (id, title, content, callback) => {
        await blogApi.put(`blogLists/${id}`, { title, content })
        dispatch({ type: 'edit', id, title, content });
        if (callback) {
            callback();
        }
    }
}

const deleteBlogPost = (dispatch) => {
    return async (id) => {
        await blogApi.delete(`blogLists/${id}`);
        dispatch({ type: 'delete', id });
        // fetchBlogLists();
    }
}

const fetchBlogLists = (dispatch) => {
    return async () => {
        let response = await blogApi.get('blogLists');
        dispatch({ type: 'fetch', data: { blogLists: response.data } });
    }
}

export const { Context, Provider } = createContextData(
    reducer,
    { addBlogPost, deleteBlogPost, editBlogPost, fetchBlogLists },
    { blogLists: [] }
);