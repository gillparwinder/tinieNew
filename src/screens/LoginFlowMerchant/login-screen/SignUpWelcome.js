import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import CustomBtn from '../../../components/CustomBtn/CustomBtn'
import tinieLogo from '../../../assets/images/tinie-LOGO.png'




const SignUpWelcome = ({navigation}) => {
    return (
        <View style={{flex:1, backgroundColor:'#fff'}}>
            <View style={styles.imgView}>
                {/* <Image source={require('../../../assets/images/tinie-LOGO.png')} style={styles.imgCont} resizeMode="contain" /> */}
                <Image source={tinieLogo} style={styles.imgCont} resizeMode="contain" />

            </View>
            
            <View style={{ justifyContent: 'center', flex: 1 }}>
            <View style={{paddingBottom:20, alignItems:'center'}}>
                <Text style={{color:'#000', letterSpacing:0.75, fontSize:18, fontWeight:'600'}}>WELCOME!</Text>
            </View>
                <View style={{ paddingBottom: 2 }}>
                    <CustomBtn text={'Register Business'} onPress={() => navigation.navigate('Signup')}/>
                </View>
                <View style={{ paddingVertical: 6 }} />
                <View style={{ paddingBottom: 2 }}>
                    <CustomBtn text={'LOGIN'}  onPress={() => navigation.navigate('Login')}/>
                </View>
            </View>
        </View>
    )
}

export default SignUpWelcome

const styles = StyleSheet.create({
    imgView: {
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 15,
        paddingTop:40
    },
    imgCont: {
        width: "60%",
        height: 85,
        // elevation:15
      },
})