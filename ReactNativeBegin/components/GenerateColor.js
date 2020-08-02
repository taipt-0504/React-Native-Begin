import React, { useState } from 'react';
import { View, Button, FlatList } from 'react-native';
import { color } from 'react-native-reanimated';

const GenerateColor = () => {
    const [colors, setColors] = useState([]);

    return (
        <View style={{ flex: 1 }}>
            <Button 
                title="Add random color"
                onPress={() => {
                    let newColor = '#' + Math.random().toString(16).substr(2,6);
                    setColors([...colors, {color: newColor, key: `${colors.length}`}]);
                }}
            />
            <FlatList 
                data={colors}
                renderItem={({item}) => {
                    return <View style={{ backgroundColor:item.color, height:30, marginTop:10 }}></View>
                }}
                refreshing="true"
            />
        </View>
    )
}

export default GenerateColor;