import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const CategoryTile = props => {

    const { heading, source, navigation } = props;

    return (
        <TouchableOpacity style={styles.container} onPress={() => { navigation.navigate('CategoryScreen') }} activeOpacity={0.7} >
            <Image
                style={styles.tinyLogo}
                source={source}
            />
            <View style={styles.imageWrap} >
                <Text style={{ paddingVertical: 5, textAlign: "center",color:"#222222" }}>{heading}</Text>
            </View>

        </TouchableOpacity >

    );
};

const styles = StyleSheet.create({
    container: {
        width: 80,
        height: 110,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1.25,
        borderColor: 'black',
        margin: 5,
    },
    tinyLogo: {
        width: 80,
        height: 110,
        borderRadius: 10,
        borderWidth: 1.75,
        borderColor: '#C0C0C0',
    },
    imageWrap: {
        position: 'absolute', bottom: -0, backgroundColor: '#FFFFFF', alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.80,
        width: 80,
        borderBottomLeftRadius: 9,
        borderBottomRightRadius: 9,
    },
});

export default CategoryTile;