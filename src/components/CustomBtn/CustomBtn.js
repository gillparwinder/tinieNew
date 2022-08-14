import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'



const CustomBtn = ({ text, onPress, type}) => {

    const windowWidth = Dimensions.get('window').width;
    return (
        <TouchableOpacity style={styles.btnCont} onPress={onPress}>
            <Text style={[styles.btnText, styles[`btnText_${type}`]]}>{text}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    btnCont: {
        alignItems: 'center',
        height: 55,
        // textAlign: 'center'
    },
    btnText: {
        // padding: 13,
        paddingVertical:13,
        textAlign: 'center',
        backgroundColor: '#34EBEB',
        borderRadius: 50,
        width: "65%",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        color: '#000',
        fontSize: 16,
        fontWeight: "400"

    },
    btnText_SECONDARY:{
        backgroundColor: '#857070',
        width: "80%",
    },
    btnText_PRIMARY:{
        width: "80%",
    },
 

})

export default CustomBtn