import createContextData from './createContextData';

const reducer = (state, payload) => {
    switch (payload.type) {
        case 'create':
            let id = Math.round(Math.random() * 100000);
            return { ...state, blogLists: [...state.blogLists, { id, title: `Title ${id}`, content: `content ${state.blogLists.length + 1}` }] };
        case 'delete':
            return { ...state, blogLists: state.blogLists.filter(v => {
                return v.id != payload.id;
            })};

        default:
            return state;
    }
}

const addBlogPost = (dispatch) => {
    return () => {
        dispatch({ type: 'create' });
    }
}

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete', id });
    }
}

export const { Context, Provider } = createContextData(reducer, { addBlogPost, deleteBlogPost }, { blogLists: [] });