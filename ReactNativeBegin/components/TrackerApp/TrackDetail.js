import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { Context as TrackContext } from '../../contexts/TrackContextProvider';
import { useRoute } from '@react-navigation/native';
import MapView, { Polyline } from 'react-native-maps';

const TrackDetail = () => {
    const { state } = useContext(TrackContext);
    const { id } = useRoute().params;
    const track = state.trackLists.find((item) => {
        return item._id == id;
    });
    const initCoords = track.locations[0];

    if (!track.locations.length) return null;

    return (
        <View>
            <Text>TrackDetail</Text>
            <MapView style={{ height: 300 }}
                initialRegion={{
                    ...initCoords.coords,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
            >
            <Polyline
                coordinates={track.locations.map((loc) => loc.coords)}
            />
            </MapView>
        </View>
    );
}

export default TrackDetail;