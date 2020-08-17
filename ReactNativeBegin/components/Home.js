import React, { useContext, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import NavigationButton from './NavigationButton';
import { Context as AuthContext } from '../contexts/AuthContextProvider';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();
    const { state, autoLogin } = useContext(AuthContext);
    useEffect(() => {
        autoLogin();
    }, []);
    
    return (
        <ScrollView contentContainerStyle={{ alignItems: "center" }}>
            <NavigationButton
                name="Go to Cat Component"
                component="Cat Component"
                navigation={navigation}
            />
            <NavigationButton
                name="Go to Flat List Component"
                component="Flat List Component"
                navigation={navigation}
            />
            <NavigationButton
                name="Go to Scroll View Component"
                component="Scroll View Component"
                navigation={navigation}
            />
            <NavigationButton
                name="Go to Section List Component"
                component="Section List Component"
                navigation={navigation}
            />
            <NavigationButton
                name="Go to State Basics Component"
                component="State Basics Component"
                navigation={navigation}
            />
            <NavigationButton
                name="Go to Color Generator Component"
                component="Color Generator Component"
                navigation={navigation}
            />
            <NavigationButton
                name="Go to Color Adjust Component"
                component="Color Adjust Component"
                navigation={navigation}
            />
            <NavigationButton
                name="Go to Restaurant Search"
                component="Restaurant Search Component"
                navigation={navigation}
            />
            <NavigationButton
                name="Go to Blog"
                component="Blog Component"
                navigation={navigation}
            />
            {
                !state.token ?
                    <NavigationButton
                        name="Go to Track App"
                        component="Register Track App Component"
                        navigation={navigation}
                    />
                    :
                    <NavigationButton
                        name="Go to Track App"
                        component="Track App Component"
                        navigation={navigation}
                    />
            }
            <NavigationButton
                name="Go to Activity Indicator"
                component="Loading Component"
                navigation={navigation}
            />
        </ScrollView>
    )
}

export default Home;