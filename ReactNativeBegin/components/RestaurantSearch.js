import React, { useState } from 'react';
import { View, Text } from 'react-native';
import SearchBar from './SearchBar';


const RestaurantSearch = () => {
    const [term, setTerm] = useState('');
    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => alert(123)} 
            />
            <Text>{term}</Text>
        </View>
    );
}

export default RestaurantSearch;