import createContextData from "./createContextData";
import trackApi from '../api/trackAppApi';

const reducer = (state, action) => {
    switch (action.type) {
        case 'create_track':
            return state;
        case 'fetch_tracks':
            return { ...state, trackLists: action.payload };

        default:
            return state;
    }
}

const createTrack = dispatch => {
    return async (name, locations) => {
        try {
            await trackApi.post('/tracks', { name, locations })

            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

const fetchTracks = dispatch => {
    return async () => {
        try {
            let response = await trackApi.get('/tracks')

            dispatch({ type: 'fetch_tracks', payload: response.data });
        } catch (error) {
            console.log(error);
        }
    }
}

export const { Context, Provider } = createContextData(
    reducer,
    { createTrack, fetchTracks },
    { listTracks: [] }
);