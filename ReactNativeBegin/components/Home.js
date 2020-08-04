import React from 'react';
import { Button, View } from 'react-native';
import NavigationButton from './NavigationButton';

const Home = ({ navigation }) => {
    return (
        <View style={{ alignItems:"center" }}>
            <NavigationButton
                name="Go to Cat Component"
                component="Cat Component"
                navigation={ navigation }
            />
            <NavigationButton
                name="Go to Flat List Component"
                component="Flat List Component"
                navigation={ navigation }
            />
            <NavigationButton
                name="Go to Scroll View Component"
                component="Scroll View Component"
                navigation={ navigation }
            />
            <NavigationButton
                name="Go to Section List Component"
                component="Section List Component"
                navigation={ navigation }
            />
            <NavigationButton
                name="Go to State Basics Component"
                component="State Basics Component"
                navigation={ navigation }
            />
            <NavigationButton
                name="Go to Color Generator Component"
                component="Color Generator Component"
                navigation={ navigation }
            />
            <NavigationButton
                name="Go to Color Adjust Component"
                component="Color Adjust Component"
                navigation={ navigation }
            />
        </View>
    )
}

export default Home;