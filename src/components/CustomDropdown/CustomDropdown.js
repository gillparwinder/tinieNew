import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
// import { TouchableOpacity } from 'react-native-gesture-handler'

import ImagesPaths from '../../constants/ImagesPaths'

const CustomDropdown = ({
    text,
    data = [],
    value = {},
    onSelect = () => { }
}) => {
    const [showOption, setShowOption] = useState(false)
    console.log('selected', !!value)

    const selectItem = (val) => {
        onSelect(val)
        setShowOption(false)
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.touchableDropdown}
                activeOpacity={0.5}
                onPress={() => setShowOption(!showOption)}
            >
                <Text style={{color:'#858585', fontSize:12}}>{!!value ? value?.sName : `${text}`}</Text>
                <Image source={ImagesPaths.icDropDown} style={{ transform: [{ rotate: showOption ? '180deg' : '0deg' }], width:20, height:12 }} />
            </TouchableOpacity>

            {showOption && (<View style={styles.dropDownCont}>
                {data.map((val, i, id) => {
                    return (
                        <TouchableOpacity
                            key={String(i)}
                            onPress={() => selectItem(val)}
                            style={{
                                backgroundColor: value.id == val.id ? '#f3f3f3': '#fff',
                                borderRadius:6,
                                padding:8,
                                // paddingHorizontal:10,
                                marginBottom:3,
                                color:'#000'
                            }}
                        >
                            <Text style={{color:'#343434'}} >{val.sName}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>)}

        </View>
    )
}

export default CustomDropdown

const styles = StyleSheet.create({
    touchableDropdown: {
        backgroundColor: '#fff',
        borderRadius: 8,
        borderColor: '#898888',
        padding: 12,
        borderWidth: 1,
        minHeight: 42,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:4,
        color:'#343434'
    },
    dropDownCont:{
        backgroundColor: '#f1f1f1',
        borderRadius: 12,
        paddingVertical: 8,
        paddingHorizontal:4,
        width:'90%',
        // marginRight:0,
        marginLeft:5,
        marginTop:35,
        zIndex:2,
        position:'absolute',
       
    },
    ropDownCont_SECONDARY:{
        width:'90%',
        marginRight:30,
        marginLeft:18,
    }

})