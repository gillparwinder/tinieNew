import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, } from "react-native";

const Chip = ({ content }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => { console.log('CHIP PRESS') }} activeOpacity={0.7}>
            {content}
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
        borderRadius: 4, borderWidth: 0.75, borderColor: '#333333', alignItems: 'center', justifyContent: 'center', padding: 10,
    },
});
export default Chip;