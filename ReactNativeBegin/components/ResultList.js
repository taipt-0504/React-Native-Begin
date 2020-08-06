import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ResultItem from './ResultItem';

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

const ResultList = ({title, items}) => (
    <View>
        <Text style={styles.title}>{title}</Text>
        <Text>{items.length}</Text>
        <FlatList 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ overflow: 'scroll' }}
            data={items}
            renderItem={({item}) => {
                return <ResultItem item={item} />
            }}
            keyExtractor={(item) => {
                return item.id;
            }}
        />
    </View>
);

export default ResultList;