import React from 'react';
import Account from './Account';
import TrackLists from './TrackLists';
import TrackCreate from './TrackCreate';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Track from './Track';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const TrackApp = () => {
    const navigation = useNavigation();

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Account"
                component={Account}
                navigation={navigation}
            />
            <Tab.Screen
                name="Track"
                component={Track}
            />
            <Tab.Screen
                name="Track Create"
                component={TrackCreate}
            />
        </Tab.Navigator>
    );
}

export default TrackApp;