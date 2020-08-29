import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Context as AuthContext } from '../../contexts/AuthContextProvider';

const Account = ({ navigation }) => {
    // const navigation = useNavigation();
    const { logout } = useContext(AuthContext);
    return (
        <View>
            <Button
                title="Logout"
                onPress={() => {
                    logout(navigation.navigate('Home Component'))
                }}
            />
            <Text>Account</Text>
        </View>
    );
}

export default Account;