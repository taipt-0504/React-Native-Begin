import React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 10
    },
    name: {
        marginVertical: 5,
        fontWeight: 'bold'
    },
    info: {
        fontWeight: 'bold',
        opacity: 0.5
    }
});

const ResultItem = ({item}) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                onPress={() => navigation.navigate('Restaurant Detail Component', {id: item.id})}>
                <Image 
                    source={{ uri: item.image_url ? item.image_url : 'https://reactnative.dev/docs/assets/p_cat1.png' }}
                    style={styles.image}
                />
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.info}>{item.rating} Stars, {item.review_count} Reviews</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ResultItem;
