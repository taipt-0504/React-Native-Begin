import trackAppApi from '../api/trackAppApi';
import createContextData from './createContextData';
import AsyncStorage from '@react-native-community/async-storage';

const reducer = (state, action) => {
    switch (action.type) {
        case 'authenticated':
            return { token: action.payload, errorMessage: '' };
        case 'clear_error':
            return { ...state, errorMessage: '' };
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        default:
            return state;
    }
}

const login = (dispatch) => {
    return async (email, password, callback) => {
        try {
            let response = await trackAppApi.post('/signin', { email, password })
            console.log(response.data);
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'authenticated', payload: response.data.token })
            if (callback) {
                callback();
            }
        } catch (error) {
            console.log(error.response.data.error);
            dispatch(({ type: 'add_error', payload: 'Something went wrong!' }))
        }
    }
}

const signup = (dispatch) => {
    return async (email, password, callback) => {
        try {
            let response = await trackAppApi.post('/signup', { email, password })
            console.log(response.data);
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'authenticated', payload: response.data.token })
            if (callback) {
                callback();
            }
        } catch (error) {
            dispatch(({ type: 'add_error', payload: 'Something went wrong!' }))
        }
    }
}

const autoLogin = (dispatch) => {
    return async () => {
        try {
            let token = await AsyncStorage.getItem('token');
            dispatch({ type: 'authenticated', payload: token ?? '' });
        } catch (error) {
            console.log(error);
        }
    }
}

const logout = (dispatch) => {
    return async (callback) => {
        try {
            await AsyncStorage.removeItem('token');
            dispatch({ type: 'authenticated', payload: '' });
            
            if (callback) {
                callback();
            }
        } catch (error) {
            console.log(error);
        }
    }
}

const clearErrorMessage = (dispatch) => {
    return () => {
        dispatch({ type: 'clear_error' });
    }
}

export const { Context, Provider } = createContextData(
    reducer,
    { login, signup, clearErrorMessage, autoLogin, logout },
    { token: '', errorMessage: '' },
);