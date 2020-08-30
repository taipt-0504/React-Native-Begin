import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const api = axios.create({
    baseURL: "https://track-app-vn.herokuapp.com"
});

api.interceptors.request.use(
    async (config) => {
        let token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default api;