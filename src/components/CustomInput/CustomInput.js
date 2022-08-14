import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import moment from 'moment'

const CustomInput = ({ placeholder, value, onChangeText, keyboardType,maxLength }) => {


    return (
        <View
        style={styles.inputCont}
        >
            {/* {changed ?
                <View style={{ alignItems: 'flex-start', position: 'absolute', marginVertical: 1 }}>
                    <Text style={{ marginTop: -10, backgroundColor: '#fff', marginLeft: 14 }}>{text}hjhjh</Text>
                </View>
                :
                null
            } */}

            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                style={styles.input}
                keyboardType={keyboardType}
                placeholderTextColor={'#858585'}
                maxLength={maxLength}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputCont: {
        borderWidth: 1,
        borderColor: '#A3A1A1',
        // marginVertical: 10,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginVertical:15
    },
    input: {
        fontSize: 12
    }

})

export default CustomInput