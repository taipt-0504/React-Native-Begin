import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import SearchBar from './SearchBar';
import ResultItem from './ResultItem';
import useResult from '../hooks/useResult';
import ResultList from './ResultList';

const RestaurantSearch = () => {
    const [term, setTerm] = useState('');
    const [results, errorMessage, searchApi] = useResult();
    const filterRestaurantByPrice = price => {
        return results.businesses.filter( item => {
            return item.price ? (item.price.length == price) : false;
        });
    }
    
    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)} 
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>There are: {results.businesses.length} results</Text>
            <ResultList title='Best Price' items={filterRestaurantByPrice(1)}/>
            <ResultList title='Big Price' items={filterRestaurantByPrice(3)}/>
            <ResultList title='Normal Price' items={filterRestaurantByPrice(2)}/>
        </View>
    );
}

export default RestaurantSearch;