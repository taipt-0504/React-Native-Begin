import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import SearchBar from './SearchBar';
import yelp from '../api/yelp';
import ResultItem from './ResultItem';

const RestaurantSearch = () => {
    const onTermSubmit = async () => {
        try {
            let params = {
                term,
                latitude: 40.7128,
                longitude: 74.0060
            }
            
            let response = await yelp.get('/search', {
                params
            });
            setResults(response.data);
        } catch (error) {
            setResults([]);
        }
    }
    const [term, setTerm] = useState('');
    const [results, setResults] = useState({businesses: []});

    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={onTermSubmit} 
            />
            <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ overflow: 'scroll' }}
                data={results.businesses}
                renderItem={({item}) => {
                    return <ResultItem item={item} />
                }}
                keyExtractor={(item) => {
                    return item.id;
                }}
            />
        </View>
    );
}

export default RestaurantSearch;