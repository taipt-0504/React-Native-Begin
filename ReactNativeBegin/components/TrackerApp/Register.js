import React, { useContext, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Context as AuthContext } from '../../contexts/AuthContextProvider';
import AuthForm from './AuthForm';
import NavLink from './NavLink';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 200,
    }
})

const Register = () => {
    const navigation = useNavigation();
    const { state, signup, clearErrorMessage } = useContext(AuthContext);

    useEffect(() => {
        const listener = navigation.addListener('blur', () => {
            clearErrorMessage();
        });

        return listener;
    }, [navigation]);

    return (
        <View style={styles.container}>
            <AuthForm
                headerTitle="Signup for Track App"
                buttonTitle="Signup"
                errorMessage={state.errorMessage}
                onSubmit={(email, password) => {
                    signup(email, password, () => navigation.navigate('Track App Component'))
                }}
            />
            <NavLink
                text="Have account? Pls Signin"
                routeName="Login Track App Component"
            />
        </View>
    );
}

export default Register;