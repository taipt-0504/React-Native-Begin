import React from 'react'
import { View, Image, Text } from 'react-native'

const ResultItem = ({item}) => (
    <View style={{ marginHorizontal: 15 }}>
        <Image 
            source={{ uri: item.image_url ? item.image_url : 'https://reactnative.dev/docs/assets/p_cat1.png' }}
            style={{width: 100, height: 100}}
        />
        <Text style={{ fontSize: 18, alignSelf: 'flex-end'}}>{item.name}</Text>
    </View>
);

export default ResultItem;