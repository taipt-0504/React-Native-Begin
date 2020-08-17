import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Input, Button } from "react-native-elements";

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: "red",
        marginLeft: 15,
        marginBottom: 10
    }
});

const AuthForm = ({ headerTitle, buttonTitle, errorMessage, onSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Text h3>{headerTitle}</Text>
            <Input
                label="Email"
                onChangeText={setEmail}
            />
            <Input
                label="Password"
                secureTextEntry
                onChangeText={setPassword}
            />
            {
                errorMessage ?
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    : null
            }
            <Button
                title={buttonTitle}
                onPress={() => onSubmit(email, password)}
            />
        </>
    );
}

export default AuthForm;