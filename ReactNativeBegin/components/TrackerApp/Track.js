import React from 'react';
import Account from './Account';
import TrackLists from './TrackLists';
import TrackDetail from './TrackDetail';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Track = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Track Lists"
                component={TrackLists}
            />
            <Stack.Screen
                name="Track Detail Component"
                component={TrackDetail}
            />
        </Stack.Navigator>
    )
}

export default Track;