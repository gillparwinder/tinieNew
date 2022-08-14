import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomHeaderText = ({ text, type }) => {
    return (
        <View>
            <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
        </View>
    )
}

export default CustomHeaderText

const styles = StyleSheet.create({
    text: {
        fontWeight: "700",
        fontSize: 16,
        color: "#000"
    },
    text_SECONDARY: {
        fontWeight: "400",
        fontSize: 15,

    },
    text_TERTIARY:{
        color: "#fff",
        fontSize:19,
        borderRadius: 50,
        shadowOpacity: 0.5,
            shadowRadius: 7,
            elevation: 7,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2
            },
    }
})