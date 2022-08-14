import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomActiveLine = ({ text, type }) => {
    return (
        <View style={styles.root}>
            <View style={[styles.line, styles[`line_${type}`]]}></View>
            <View style={[styles.dot, styles[`dot_${type}`]]} />
            <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
        </View>
    )
}

export default CustomActiveLine

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    line: {
        backgroundColor: '#065987',
        width: "45%",
        height: 3.3,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        borderRadius:50
        // marginLeft: 5
    },
    line_SECONDARY: {
        backgroundColor: '#A3a1a1',
        width: "45%",
        height: 2.3,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        paddingLeft: 5
    },
    dot: {
        backgroundColor: '#065987',
        width: 12,
        height: 12,
        borderRadius: 25
    },
    dot_SECONDARY: {
        backgroundColor: '#A3a1a1',
        width: 11,
        height: 11,
        borderRadius: 25
    },
    text: {
        color: '#000',
        paddingLeft: 3,
        fontSize:11
    },
    text_SECONDARY: {
        color: '#A3a1a1'
    }
})