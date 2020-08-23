import React from 'react';
import { TouchableOpacity, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
    navLink: {
        marginTop: 20,
        color: 'blue',
        fontSize: 16,
        marginLeft: 5
    }
})

const NavLink = ({ text, routeName }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
            <Text style={styles.navLink}>{text}</Text>
        </TouchableOpacity>
    );
}

export default NavLink;