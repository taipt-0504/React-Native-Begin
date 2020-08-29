import React, { useEffect, useContext } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Context as TrackContext } from '../../contexts/TrackContextProvider';
import { FlatList } from 'react-native-gesture-handler';
import { ListItem } from 'react-native-elements';
const TrackLists = () => {
    const navigation = useNavigation();
    const { state, fetchTracks } = useContext(TrackContext);
    useEffect(() => {
        const listener = navigation.addListener('focus', () => {
            fetchTracks();
        });

        return listener;
    }, []);

    return (
        <View>
            <Text>TrackLists</Text>
            <FlatList
                data={state.trackLists}
                keyExtractor={(item => item._id)}
                renderItem={({ item }) => <TouchableOpacity onPress={() => navigation.navigate('Track Detail Component', { id: item._id })}>
                    <ListItem chevron title={item.name} />
                </TouchableOpacity>}
            />
        </View>
    );
}

export default TrackLists;