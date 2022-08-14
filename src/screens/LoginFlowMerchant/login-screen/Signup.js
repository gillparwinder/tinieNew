
import { StyleSheet, Text, View, Pressable, Image, Dimensions } from 'react-native'
import React, { useState } from 'react';
import Header from '../../../components/header'
import CustomInput from '../../../components/CustomInput/CustomInput';
import CustomBtn from '../../../components/CustomBtn/CustomBtn';
import { ScrollView } from 'react-native-gesture-handler';
import TinieButton from '../../../components/button';
import axios from 'axios';
import { ALERT_TYPE, Dialog, Root, Toast } from 'react-native-alert-notification';
import { Loader } from '../../../components/loader';


const Signup = ({ navigation }) => {

    const [name, setName] = useState("abcd")
    const [number, setNumber] = useState("1234567890")
    const [loading, setLoading] = useState(false)
    const [otp, setOtp] = useState("0000")
    const [email, setEmail] = useState("qwerty@yopmail.com")
    const [emailOtp, setEmailOtp] = useState("0000")
    const [enlargeSecond, setEnlargeSecond] = useState(null);
    const [enlarge, setEnlarge] = useState(null);

    const windowWidth = Dimensions.get('window').width;

    const onSignUp = async () => {
        setLoading(true)
        if (name == "") {
            Toast.show({
                onPress: () => { Toast.hide() },
                type: ALERT_TYPE.WARNING,
                title: 'WARNING',
                textBody: 'Name is required',
            })
            setLoading(false)
        } else if (number == "") {
            Toast.show({
                onPress: () => { Toast.hide() },
                type: ALERT_TYPE.WARNING,
                title: 'WARNING',
                textBody: 'Mobile number is required',
            })
            setLoading(false)
        } else if (otp == "") {
            Toast.show({
                onPress: () => { Toast.hide() },
                type: ALERT_TYPE.WARNING,
                title: 'WARNING',
                textBody: 'Mobile otp is required',
            })
            setLoading(false)
        } else if (email == "") {
            Toast.show({
                onPress: () => { Toast.hide() },
                type: ALERT_TYPE.WARNING,
                title: 'WARNING',
                textBody: 'Email is required',
            })
            setLoading(false)
        } else if (emailOtp == "") {
            Toast.show({
                onPress: () => { Toast.hide() },
                type: ALERT_TYPE.WARNING,
                title: 'WARNING',
                textBody: 'Email otp is required',
            })
            setLoading(false)
        } else {
            const data = {
                name: name,
                number: number,
                otp: otp,
                email: email,
                emailOtp: emailOtp
            }
            console.log("data == ", data)
            navigation.navigate('MerchantRegistration', {
                data
            })
            setLoading(false)
            // console.log(number)
            // const url = "https://tiniev0loginbroker.azurewebsites.net/api/v1/get-token?phonenumber=" + number + "&otp=" + otp

            // console.log(url);
            // return await
            //     axios
            //         .get(url)
            //         .then((response) => {
            //             setLoading(false)
            //             alert(JSON.stringify(response.data));
            //             console.log(' response = ', JSON.stringify(response.data));

            //         })
            //         .catch((error) => {
            //             setLoading(false)
            //             console.log(error.response.data);
            //             if (error.response.data.status == 500) {
            //                 Toast.show({
            //                     onPress: () => { Toast.hide() },
            //                     type: ALERT_TYPE.DANGER,
            //                     title: 'ERROR',
            //                     textBody: error.response.data.error,
            //                 })
            //             } else {
            //                 Toast.show({
            //                     onPress: () => { Toast.hide() },
            //                     type: ALERT_TYPE.DANGER,
            //                     title: 'ERROR',
            //                     textBody: error.response.data.status,
            //                 })
            //             }
            // });
        }
    }
    const toGetNumberOtp = async () => {
        setLoading(true)
        if (name == "") {
            Toast.show({
                onPress: () => { Toast.hide() },
                type: ALERT_TYPE.WARNING,
                title: 'WARNING',
                textBody: 'Name is required',
            })
            setLoading(false)
        } else if (number == "") {
            Toast.show({
                onPress: () => { Toast.hide() },
                type: ALERT_TYPE.WARNING,
                title: 'WARNING',
                textBody: 'Mobile number is required',
            })
            setLoading(false)
        } else {
            console.log(number)
            const url = 'https://tiniev1vendorauth.azurewebsites.net/api/v1/get-merchant-otp?contact=' + number;
            // let bodyData = JSON.stringify({
            //     contact: number
            // });
            // let headerData = {
            //     headers: {
            //         Accept: 'application/json',
            //         'Content-Type': 'application/json',
            //     },
            // };
            console.log(url);
            // console.log('bodyData = ', bodyData);
            return await
                axios
                    .get(url)
                    .then((response) => {
                        setLoading(false)
                        alert(JSON.stringify(response.data));
                        console.log(' response = ', JSON.stringify(response.data));
                        if (response.data.status == 'OTP successfully sent') {
                            setEnlarge(response.data.status);
                            Toast.show({
                                onPress: () => { Toast.hide() },
                                type: ALERT_TYPE.SUCCESS,
                                title: 'SUCCESS',
                                textBody: 'Otp Sent Successfully On Your WhatsApp',
                            })
                        } else {
                            // alert(response.data.message);
                        }
                    })
                    .catch((error) => {
                        setLoading(false)
                        // alert(JSON.stringify(error.response.data.status));
                        alert(error);
                    });
        }
    };

    const toGetEmailOtp = async () => {
        setLoading(true)
        if (email == "") {
            Toast.show({
                onPress: () => { Toast.hide() },
                type: ALERT_TYPE.WARNING,
                title: 'WARNING',
                textBody: 'Email is required',
            })
            setLoading(false)
        } else {
            console.log(email)
            const url = 'https://tiniev1vendorauth.azurewebsites.net/api/v1/get-merchant-otp?contact=' + email;
            console.log(url);
            return await
                axios
                    .get(url)
                    .then((response) => {
                        //alert(JSON.stringify(response.data));
                        console.log(' response = ', JSON.stringify(response.data));
                        setLoading(false)
                        if (response.data.status == 'OTP successfully sent') {
                            setEnlargeSecond(response.data.status);
                            Toast.show({
                                onPress: () => { Toast.hide() },
                                type: ALERT_TYPE.SUCCESS,
                                title: 'SUCCESS',
                                textBody: 'Otp Sent Successfully On Your Email',
                            })
                        } else {
                            // alert(response.data.message);
                        }
                    })
                    .catch((error) => {
                        setLoading(false)
                        alert(error);

                    });
        }

    }
    const resendMobileOtp = async () => {
        const url = 'https://tiniev1vendorauth.azurewebsites.net/api/v1/get-merchant-otp?contact=' + number;

        return await
            axios
                .get(url)
                .then((response) => {
                    //alert(JSON.stringify(response.data));
                    console.log(' response = ', JSON.stringify(response.data));
                    if (response.data.status == 'OTP successfully sent') {
                        setEnlarge(response.data.status);
                        Toast.show({
                            onPress: () => { Toast.hide() },
                            type: ALERT_TYPE.SUCCESS,
                            title: 'SUCCESS',
                            textBody: 'Otp Sent Successfully On Your WhatsApp',
                        })
                    } else {
                        // alert(response.data.message);
                    }
                })
                .catch((error) => {
                    alert(error);

                });

    }
    const resendEmailOtp = async () => {
        const url = 'https://tiniev1vendorauth.azurewebsites.net/api/v1/get-merchant-otp?contact=' + email;
        console.log(url);
        return await
            axios
                .get(url)
                .then((response) => {
                    //alert(JSON.stringify(response.data));
                    console.log(' response = ', JSON.stringify(response.data));
                    if (response.data.status == 'OTP successfully sent') {
                        setEnlargeSecond(response.data.status);
                        Toast.show({
                            onPress: () => { Toast.hide() },
                            type: ALERT_TYPE.SUCCESS,
                            title: 'SUCCESS',
                            textBody: 'Otp Sent Successfully On Your Email',
                        })
                    }
                    // else {
                    // alert(response.data.message);
                    // }
                })
                .catch((error) => {
                    // console.log("err", error);
                    alert(error);
                    // alert(JSON.stringify(error.response.data.status));

                });

    }


    return (
        <Root>
            <View style={styles.root}>
                <Loader loading={loading} />
                <Header text={"Host your business"} type='PRIMARY' />
                <View style={{ paddingVertical: 10 }} />
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{ flex: 1 }}>
                        <View style={styles.mainCont}>
                            <CustomInput placeholder={"Enter  Name*"} value={name} onChangeText={(text) => setName(text)} />
                            <CustomInput placeholder={"Mobile Number*"} maxLength={12} value={number} onChangeText={(text) => setNumber(text)} keyboardType={'numeric'} />
                            {enlarge &&
                                <>
                                    <CustomInput placeholder={"OTP sent to Phone number"} value={otp} onChangeText={(text) => setOtp(text)} keyboardType={'numeric'} />
                                </>
                            }
                            {enlarge !== null ?
                                null
                                :
                                <TinieButton
                                    title={"Enter"}
                                    style={{ backgroundColor: '#1B92AD', width: 150, height: 50 }}
                                    onButtonPress={toGetNumberOtp}
                                    textStyle={{ color: '#ffffff' }}
                                />}
                            {/* <CustomInput placeholder={"OTP sent to Phone number"} value={otp} onChangeText={(text) => setOtp(text)} /> */}
                        </View>
                        <View style={{ paddingHorizontal: 25, flexDirection: 'row', justifyContent: 'flex-end', paddingVertical: 15 }}>
                            <Pressable onPress={() => resendMobileOtp()}>
                                <Text style={[styles.textSize, { textDecorationLine: 'underline', paddingHorizontal: 5 }]}>Resend OTP,</Text>
                            </Pressable>
                            <Text style={styles.textSize}>If not received</Text>

                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={styles.mainCont}>
                            <CustomInput placeholder={"Enter Email ID*"} value={email} onChangeText={(text) => setEmail(text)} />
                            {enlargeSecond &&
                                <>
                                    {/* <CustomInput placeholder={"OTP sent to Phone number"} value={otp} onChangeText={(text) => setOtp(text)} /> */}
                                    <CustomInput placeholder={"Enter OTP Sent to Your Email*"} value={emailOtp} onChangeText={(text) => setEmailOtp(text)} keyboardType={'numeric'} />
                                </>
                            }
                            {enlargeSecond !== null ?
                                null
                                :
                                <TinieButton
                                    title={"Enter"}
                                    style={{ backgroundColor: '#1B92AD', width: 150, height: 50 }}
                                    onButtonPress={toGetEmailOtp}
                                    textStyle={{ color: '#ffffff' }}
                                />}
                            {/* <CustomInput placeholder={"Enter OTP Sent to Your Email*"} value={emailOtp} onChangeText={(text) => setEmailOtp(text)} /> */}
                        </View>
                        <View style={{ paddingVertical: 5 }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 20 }}>
                            <Pressable onPress={() => navigation.goBack()}>
                                <Text style={styles.textSize}>CANCEL</Text>
                            </Pressable>
                            <View style={{ flexDirection: 'row' }}>
                                <Pressable onPress={() => resendEmailOtp()}>
                                    <Text style={[styles.textSize, { textDecorationLine: 'underline', paddingHorizontal: 5, color: "#000", }]}>Resend OTP,</Text>
                                </Pressable>
                                <Text style={styles.textSize}>If not received</Text>
                            </View>
                        </View>


                    </View>
                    <View style={{ paddingVertical: 60 }}>
                        <CustomBtn text={'Proceed to Register'} onPress={() => onSignUp()} />
                    </View>
                </ScrollView >
            </View>
        </Root>

    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#fff",
    },
    mainCont: {
        padding: 15
    },
    textSize: {
        fontSize: 12,
        color: '#000'
    },


})

export default Signup