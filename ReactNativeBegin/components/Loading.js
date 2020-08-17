import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Loading = () => {
    return (
        <View>
            <ActivityIndicator size='large' color='red' />
        </View>
    );
}

export default Loading;