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

const Login = () => {
    const navigation = useNavigation();
    const { state, login, clearErrorMessage } = useContext(AuthContext);
    useEffect(() => {
        const listener = navigation.addListener('blur', () => {
            clearErrorMessage();
        });

        return listener;
    }, [navigation]);

    return (
        <View style={styles.container}>
            <AuthForm
                headerTitle="Signin for Track App"
                buttonTitle="Signin"
                errorMessage={state.errorMessage}
                onSubmit={(email, password) => {
                    console.log(email);
                    login(email, password, () => navigation.navigate('Track App Component'))
                }}
            />
            <NavLink 
                text="You don't have account? Pls Signup"
                routeName="Register Track App Component"
            />
        </View>
    );
}

export default Login;