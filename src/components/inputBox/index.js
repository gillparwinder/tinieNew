import React from "react";
import { View, Text, SafeAreaView, StyleSheet, TextInput } from "react-native";

const InputBox = ({ keyboardType, placeholderText, inputTitle, value, onChangeText }) => {
    return (
        <View>
            <Text style={{ marginHorizontal: 12, }}>{inputTitle}</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholderText}
                keyboardType={keyboardType}
                placeholderTextColor={'#858585'}
                keyboardType='name-phone-pad'
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 45,
        width: 300,
        margin: 12,
        textAlign: 'center',
        color: '#858585',
        borderColor: 'white',
        borderWidth: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },
});

export default InputBox;