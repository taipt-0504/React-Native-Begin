import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const searchApi = async searchTerm => {
        try {
            let params = {
                limit: 50,
                term: searchTerm,
                location: 'NYC'
            }
            
            let response = await yelp.get('/search', {
                params
            });
            setResults(response.data);
        } catch (error) {
            setErrorMessage('Something went wrong!');
        }
    }
    
    const [results, setResults] = useState({businesses: []});
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        searchApi('pasta')
    }, [])

    return [results, errorMessage, searchApi];
};
