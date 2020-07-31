import React from 'react';
import { Text, View, TextInput } from 'react-native';

const getFullName = (firstName, secondName, thirdName) => {
  return firstName + " " + secondName + " " + thirdName;
}

const Cat = () => {
  return (
    <View>
        <Text>
        Hello, I am {getFullName("Phung", "The", "Tai")}!
        </Text>
        <View>
        <Text>Hello, pls input your name</Text>
            <TextInput
            style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1
            }}
            placeholder="Name me!"
            />
        </View>
    </View>
  );
}

export default Cat;