import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const HighLights = props => {

    const { heading, source } = props;

    return (
        <TouchableOpacity style={styles.container} onPress={() => { }} activeOpacity={0.7}>
            <Image
                style={styles.tinyLogo}
                source={source}
            />
            <Text style={{ paddingVertical: 5,color:"#222222",fontWeight:'700'}}>{heading}</Text>
        </TouchableOpacity >
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginHorizontal:5,
        marginVertical:10
    },
    tinyLogo: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#F0B51B',
    },
});

export default HighLights;