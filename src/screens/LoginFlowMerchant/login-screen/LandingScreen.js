import { StyleSheet, Text, View,Image, Pressable } from 'react-native'
import React from 'react'

const LandingScreen = ({navigation}) => {
  return (
    <View style={styles.root}>
        <Pressable onPress={() => navigation.navigate('SignUpWelcome')}>
       <View style={styles.imgView}>
                <Image source={require('../../../assets/images/tinie-LOGO.png')} style={styles.imgCont} resizeMode="contain" />
        </View>
        </Pressable>
    </View>
  )
}

export default LandingScreen

const styles = StyleSheet.create({
    root:{
        backgroundColor:'#065987',
        flex:1,
        justifyContent:'center',
    },
    imgView: {
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#470000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        paddingTop:20
    },
    imgCont: {
        width: "65%",
        height: 105,
      },
})