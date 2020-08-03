import React from 'react';
import { Button, View, Text } from 'react-native';

const ColorAdjustButton = ({ name, onIncrease, onDecrease }) => (
    <View style={{ marginBottom:10 }}>
        <Text style={{ fontSize:40, color:name, marginBottom:5 }}>{name}</Text>
        <Button 
            title="Increase"
            onPress={onIncrease}
        />
        <Button 
            title="Decrease"
            onPress={onDecrease}
        />
    </View>
);

export default ColorAdjustButton;