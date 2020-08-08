import React, { useState, useEffect } from 'react';
import { View, Image, Text, ActivityIndicator, StyleSheet } from 'react-native';
import yelp from '../api/yelp';
import { useRoute } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 10,
        marginBottom: 10,
        alignSelf: 'center'
    },
    name: {
        margin: 5,
        fontWeight: 'bold',
        fontSize: 18
    },
})

const ResultDetail = () => {
    const {id} = useRoute().params;
    const [item, setItem] = useState(null);

    const getDetail = async id => {
        try {
            const response = await yelp.get(`/${id}`);
            setItem(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getDetail(id)
    }, []);

    return (
        <>
            {
                item ? 
                <View>
                    <Text style={styles.name}>{item.name}</Text>
                    <FlatList 
                        data={item.photos}
                        keyExtractor={item => item}
                        renderItem={({item}) => <Image source={{ uri: item }} style={styles.image}/>}
                    />
                </View> :
                <ActivityIndicator color='red' size='large'/>
            }
        </>
    )
}

export default ResultDetail;