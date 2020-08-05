import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        alignSelf: 'center',
        fontSize: 35,
        marginHorizontal: 15
    }
})

const SearchBar = ({term, onTermChange, onTermSubmit}) => (
    <View style={styles.backgroundStyle}>
        <Icon 
            name="search" 
            style={styles.iconStyle}
        />
        <TextInput 
            style={styles.inputStyle}
            placeholder="Search"
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
        />
    </View>
);

export default SearchBar;