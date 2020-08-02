import React from 'react';
import { Button, View } from 'react-native';

const NavigationButton = ( { navigation, name, component }) => {
    return (
        <View style={{ marginTop:10, width:200 }}>
            <Button 
                title={name}
                onPress={() => {
                    navigation.navigate(component)
                }}
            />
        </View>
    )
}

export default NavigationButton;