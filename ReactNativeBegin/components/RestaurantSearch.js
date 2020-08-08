import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ScrollView, ActivityIndicator } from 'react-native';
import SearchBar from './SearchBar';
import useResult from '../hooks/useResult';
import ResultList from './ResultList';

const RestaurantSearch = () => {
    const [term, setTerm] = useState('');
    const [results, errorMessage, isLoading, searchApi] = useResult();
    const filterRestaurantByPrice = price => {
        return results.businesses.filter( item => {
            return item.price ? (item.price.length == price) : false;
        });
    }
    
    return (
        <>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)} 
            />
            {
                isLoading ? 
                <ActivityIndicator color='red' size='large'/> :
                errorMessage ? 
                <Text>{errorMessage}</Text> : 
                <ScrollView>
                    <ResultList title='Best Price' items={filterRestaurantByPrice(1)}/>
                    <ResultList title='Big Price' items={filterRestaurantByPrice(3)}/>
                    <ResultList title='Normal Price' items={filterRestaurantByPrice(2)}/>
                </ScrollView>
            }
        </>
    );
}

export default RestaurantSearch;