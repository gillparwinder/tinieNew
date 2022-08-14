import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../../components/header'
import CustomBtn from '../../../components/CustomBtn/CustomBtn'
import CustomHeaderText from '../../../components/CustomHeaderText/CustomHeaderText'



const WelcomeUser = ({navigation}) => {
    return (
        <View style={{ flex: 1,backgroundColor:'#fff' }}>
            <Header />
            <View style={{ paddingVertical: 35, paddingLeft: 25 }}>
                <CustomHeaderText text={"Welcome User,"} />
            </View>
            <View style={{ justifyContent: 'center', flex: 1 }}>
                <View style={{ paddingBottom: 2 }}>
                    <CustomBtn text={'Register Business'} onPress={() => navigation.navigate('Signup')} />
                </View>
                <View style={{ paddingVertical: 6 }} />
                <View style={{ paddingBottom: 2 }}>
                    <CustomBtn text={'LOGIN'}   onPress={() => navigation.navigate('Login')} />
                </View>
            </View>
        </View>
    )
}

export default WelcomeUser

const styles = StyleSheet.create({})