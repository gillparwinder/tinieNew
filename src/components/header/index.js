import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const Header = ({ name, text, nameIcon, type = 'Primary',onPress }) => {
    return (
        <View style={styles.headCont}>
            <View style={styles.headContLeft}>
                {/* Icon names  
            back btn ="arrow-back"
             */}
                <Pressable onPress={onPress}><Ionicons name={name} size={25} color={"#0B1C3F"} /></Pressable> 
                <Text style={styles.headText}>{text}</Text>
            </View>
            <Ionicons name={nameIcon} color={"#0B1C3F"} size={18} style={[styles.iconDes, styles[`iconDes_${type}`]]} />

        </View>
    )
}



const styles = StyleSheet.create({
    headCont: {
        backgroundColor: '#fff',
        alignItems: 'center',
        height: 60,
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        elevation: 5,
        shadowColor: '#470000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 5


    },
    headContLeft: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 60
    },
    iconDes_SECONDARY: {
        borderWidth: 2,
        borderRadius: 50,
        padding: 3,
        justifyContent: 'center',
        alignItems: 'center',
        width: 24,
        height: 24,
        marginRight: 8
    },
    iconDes_PRIMARY: {

    },
    headText: {
        fontWeight: "800",
        color: '#000',
        textAlign: 'left',
        paddingLeft: 20,
        fontSize: 17
    }
})

export default Header