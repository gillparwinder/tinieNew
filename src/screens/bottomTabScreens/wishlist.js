import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const Wishlist = () => {
    return (
        <View style={styles.container}>
            <Text>Wishlist Screen</Text>
        </View>
    );

};

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'green',
        },
    }
);

export default Wishlist;