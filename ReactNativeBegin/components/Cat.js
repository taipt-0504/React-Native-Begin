import React, { useState } from 'react';
import { Text, View, TextInput, Image, Button } from 'react-native';

const getFullName = (firstName, secondName, thirdName) => {
  return firstName + " " + secondName + " " + thirdName;
}

const Cat = (props) => {
  const [disable, setDisable] = useState(true);
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
        <Text>{props.content}</Text>
        <Image
            source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
            style={{width: 200, height: 200}}
        />
        <Button
            onPress={() => {
                setDisable(true)
            }}
            disabled={disable}
            title={"This button is " + (disable ? 'Disable' : 'Enable')}
        />
        <Button
            onPress={() => {
                setDisable(false)
            }}
            disabled={!disable}
            title={"Click to enable Button above"}
        />
    </View>
  );
}

export default Cat;