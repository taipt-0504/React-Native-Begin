import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';

const TrackCreate = () => {
    const [err, setErr] = useState('');
    const requestPermission = async () => {
        try {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErr('Permission to access location was denied');
              }
        
              let location = await Location.getCurrentPositionAsync({});
              console.log(location);
        } catch (error) {
            console.log(error);
            setErr('error');
        }
    }
    useEffect(() => {
        requestPermission();
    }, []);

    return (
        <View>
            <Text>TrackCreate</Text>
            <MapView
                style={{ height: 300 }}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05
                }}
            />
            { err ? <Text>{err}</Text> : null }
        </View>
    );
}

export default TrackCreate;