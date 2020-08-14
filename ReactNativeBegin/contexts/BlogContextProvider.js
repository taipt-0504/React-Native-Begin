import createContextData from './createContextData';

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
        // return {
        //     ...state, blogLists: [...state.blogLists.filter(v => {
        //         return v.id != payload.id;
        //     }), { id: payload.id, title: payload.title, content: payload.content }]
        // };

        default:
            return state;
    }
}

const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({ type: 'create', title, content });
        if (callback) {
            callback();
        }

    }
}

const editBlogPost = (dispatch) => {
    return (id, title, content, callback) => {
        dispatch({ type: 'edit', id, title, content });
        if (callback) {
            callback();
        }
    }
}

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete', id });
    }
}

export const { Context, Provider } = createContextData(
    reducer,
    { addBlogPost, deleteBlogPost, editBlogPost },
    { blogLists: [{ id: 1, title: 'test', content: 'test' }] }
);