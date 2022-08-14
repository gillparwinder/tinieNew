import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const Account = () => {
    
    return (
        <View style={styles.container}>
            <Text>Account Screen</Text>
        </View>
    );

};

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'pink',
        },
    }
);

export default Account;