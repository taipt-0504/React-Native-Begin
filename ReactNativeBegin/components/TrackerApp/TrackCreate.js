import React, { useState, useEffect, useContext, useCallback } from 'react';
import { View, Text } from 'react-native';
import { Context as LocationContext } from '../../contexts/LocationContextProvider';
import Map from './Map';
import useLocation from '../../hooks/useLocation';
import { useIsFocused } from '@react-navigation/native';
import TrackForm from './TrackForm';

const TrackCreate = () => {
    const { addLocation, state } = useContext(LocationContext);
    const isFocused = useIsFocused();
    const callback = useCallback((location) => {
        addLocation(location, state.recording);
    }, [state.recording]);
    const [err] = useLocation(isFocused || state.recording, callback);
    
    return (
        <View>
            <Text>TrackCreate</Text>
            <Map />
            {err ? <Text>{err}</Text> : null}
            <TrackForm />
        </View>
    );
}

export default TrackCreate;