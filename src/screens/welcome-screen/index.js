import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, ScrollView, Text, StyleSheet, Image, Button, Alert } from 'react-native'
import InputBox from "../../components/inputBox";
import tinieLogo from '../../assets/images/tinie-LOGO.png';
import TinieButton from "../../components/button";
import axios from "axios";

const WelcomeScreen = props => {
    const [phNumber, onChangeNumber] = React.useState(null);
    const { navigation, route } = props;
    const [otp, setOtp] = useState(null);
    const [enlarge, setEnlarge] = useState(null);

    const sendPhNumber = async (mobileNo) => {

        return await axios.get(`https://tiniev0loginbroker.azurewebsites.net/api/v1/login-broker`, { params: { phonenumber: mobileNo } })
            .then((response) => {
                console.log('response from API 1 is --->>>>>', response);
                setEnlarge(response.data.action);

            })
            .catch((error) => {
                console.log("errror---->", error);
                setEnlarge(error.response.data.action);
                // console.log(,enlarge)
                // if (error.response.data.action == 'Register')
                //     navigation.navigate('DetailsScreen', { otp: otp, phNumber: phNumber });
            });


    };

    const sendOtp = async (otp, mobileNo) => {
        console.log(otp)
        try {
            const res = await axios.get(`https://tiniev0loginbroker.azurewebsites.net/api/v1/get-token?phonenumber=${mobileNo}&otp=${otp}`);
            console.log('response from API 7 is --->>>>>', res);
            if (res.data.username)
                navigation.navigate('Dashboard');
        } catch (error) {
            console.log("errror---->", error);

            if (enlarge == 'Register')
                setOtp(null)
            navigation.navigate('DetailsScreen', { otp: otp, phNumber: phNumber, enlarge, setEnlarge });
        }
    };

    const onEnterPress = () => {
        sendPhNumber(phNumber);
        console.log('THE USER MOBILE NUMBER IS --->', phNumber);
    }

    const onRegisterPress = () => {
        sendOtp(otp, phNumber);
    }
    return (
        <View style={styles.container}>
            <View style={{
                flex: 1, alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Image source={tinieLogo} />
            </View>
            <View style={{ flex: 1, }}>
                <InputBox
                    keyboardType='numeric'
                    placeholderText='Enter Your Phone Number'
                    onChangeText={onChangeNumber}
                    value={phNumber}
                />
                {enlarge &&
                    <>
                        <InputBox
                            keyboardType='numeric'
                            placeholderText='enter OTP'
                            onChangeText={setOtp}
                            value={otp}
                        />
                        <View style={{ flexDirection: "row", justifyContent: 'space-between', marginHorizontal: 12 }}>
                            <Text style={{ fontSize: 10 }}>cancel</Text>
                            <Text style={{ fontSize: 10 }}>didn't receive? Resend OTP</Text>
                        </View>
                    </>

                }
                <View style={{
                    alignSelf: otp ? 'flex-end' : 'center',
                    marginVertical: 25,
                }}>
                    {enlarge !== null ?
                        <TinieButton
                            title={enlarge}
                            style={{ backgroundColor: '#1B92AD', width: 150, height: 50, marginRight: 10, }}
                            onButtonPress={onRegisterPress}
                            textStyle={{ color: '#ffffff' }}
                        /> :
                        <TinieButton
                            title={"Enter"}
                            style={{ backgroundColor: '#1B92AD', width: 150, height: 50 }}
                            onButtonPress={onEnterPress}
                            textStyle={{ color: '#ffffff' }}
                        />}
                </View>

            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#34EBEB',
    }
})

export default WelcomeScreen;