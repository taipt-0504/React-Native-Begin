import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const searchApi = async searchTerm => {
        try {
            setIsLoading(true);
            let params = {
                limit: 50,
                term: searchTerm,
                location: 'NYC'
            }
            
            let response = await yelp.get('/search', {
                params
            });
            setResults(response.data);
            setIsLoading(false);
        } catch (error) {
            setErrorMessage('Something went wrong!');
            setIsLoading(false);
        }
    }
    
    const [results, setResults] = useState({businesses: []});
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        searchApi('pasta')
    }, [])

    return [results, errorMessage, isLoading, searchApi];
};
