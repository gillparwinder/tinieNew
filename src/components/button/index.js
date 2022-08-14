import React from "react";
import { View, Text, StyleSheet, TouchableOpacity,} from "react-native";

const TinieButton = ({ onButtonPress, style, title, textStyle }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onButtonPress} style={[style, styles.container]}>
            <Text style={[styles.titleText,textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: { justifyContent: 'center', alignItems: 'center', borderRadius: 6 },
    titleText: { fontSize: 16, fontWeight: '500' }
});

export default TinieButton;