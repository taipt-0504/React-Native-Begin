import React, { useEffect, useState, useCallback } from 'react';
import * as Location from 'expo-location';

export default useLocation = (isFocused, callback) => {
    const [err, setErr] = useState('');

    useEffect(() => {
        let subcriber = null;

        const requestPermission = async () => {
            try {
                let { status } = await Location.requestPermissionsAsync();
                if (status !== 'granted') {
                    setErr('Permission to access location was denied');
                }

                subcriber = await Location.watchPositionAsync({
                    accuracy: Location.Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10,
                }, callback);

            } catch (error) {
                setErr('error');
            }
        }
        if (isFocused) {
            requestPermission();
        } else {
            if (subcriber) {
                subcriber.remove();
            }
            subcriber = null;
        }

        return () => {
            if (subcriber) {
                subcriber.remove();
            }
        }
    }, [isFocused, callback]);

    return [err];
}