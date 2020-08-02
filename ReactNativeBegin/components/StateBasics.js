import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

const StateBasics = () => {
    const [name, setName] = useState('');

    return (
        <View>
            <Text>Input Your Name</Text>
            <TextInput 
                placeholder="Enter your Name"
                onChangeText={(text) => {
                    setName(text);
                }}                
                >
            </TextInput>
            <Text>Your name is: {name}</Text>
        </View>
    )
}

export default StateBasics;