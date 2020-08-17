import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TrackLists = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Text>TrackLists</Text>
            <Button 
                title="Go to track detail"
                onPress={() => navigation.navigate('Track Detail Component')}
            />
        </View>
    );
}

export default TrackLists;