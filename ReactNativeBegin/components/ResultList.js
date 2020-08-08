import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ResultItem from './ResultItem';

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 10
    }
})

const ResultList = ({title, items}) => {
    if (!items.length) return null;

    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={items}
                renderItem={({item}) => {
                    return <ResultItem item={item} />
                }}
                keyExtractor={(item) => {
                    return item.id;
                }}
            />
        </View>
    )
};

export default ResultList;