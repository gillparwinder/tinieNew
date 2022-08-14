import { StyleSheet, Text, View, Pressable} from 'react-native'
import React from 'react'
import Header from '../../../components/header'
import CustomInput from '../../../components/CustomInput/CustomInput'
import CustomBtn from '../../../components/CustomBtn/CustomBtn'
import { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import TinieButton from '../../../components/button'

const ForgetPasscode = ({navigation}) => {

    const [number, setNumber] = useState("")
    const [otp, setOtp] = useState("")
    const [email, setEmail] = useState("")
    const [emailOtp, setEmailOtp] = useState("")
    const [enlargeSecond, setEnlargeSecond] = useState(null);
    const [enlarge, setEnlarge] = useState(null);

    const forgetCode = () => {
        console.log('btn is pressed')
        navigation.navigate('ResetPasscode')
    }

    const toGetNumberOtp = async () => {

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
                    //alert(JSON.stringify(response.data));
                    console.log(' response = ', JSON.stringify(response.data));
                    if (response.data.status == 'OTP successfully sent') {
                        setEnlarge(response.data.status);
                        Toast.show({
                            type: ALERT_TYPE.SUCCESS,
                            title: 'SUCCESS',
                            textBody: 'Otp Sent Successfully On Your WhatsApp',
                        })
                    } else {
                        // alert(response.data.message);
                    }
                })
                .catch((error) => {
                    alert(JSON.stringify(error.response.data.status));
                    // alert(error);
                    Toast.show({
                        type: ALERT_TYPE.DANGER,
                        title: 'ERROR',
                        textBody: error.response.data.status,
                    })
                });
    };

    const toGetEmailOtp = async () => {
        console.log(email)
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
                            type: ALERT_TYPE.SUCCESS,
                            title: 'SUCCESS',
                            textBody: 'Otp Sent Successfully On Your Email',
                        })
                    } else {
                        // alert(response.data.message);
                    }
                })
                .catch((error) => {
                    // alert(error);
                    // alert(JSON.stringify(error.response.data.status));
                    Toast.show({
                        type: ALERT_TYPE.DANGER,
                        title: 'ERROR',
                        textBody: error.response.data.status,
                    })
                });


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
                            type: ALERT_TYPE.SUCCESS,
                            title: 'SUCCESS',
                            textBody: 'Otp Sent Successfully On Your WhatsApp',
                        })
                    } else {
                        // alert(response.data.message);
                    }
                })
                .catch((error) => {
                    alert(JSON.stringify(error.response.data.status));
                    // alert(error);
                    Toast.show({
                        type: ALERT_TYPE.DANGER,
                        title: 'ERROR',
                        textBody: error.response.data.status,
                    })
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
                    // alert(error);
                    // alert(JSON.stringify(error.response.data.status));
                    Toast.show({
                        type: ALERT_TYPE.DANGER,
                        title: 'ERROR',
                        textBody: error.response.data.status,
                    })
                });

    }

  return (
    <View style={{flex:1,  backgroundColor: "#fff",}}>
      <Header text={'Forget password'}/>
      <View style={styles.root}>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={styles.mainCont}>
                        <CustomInput placeholder={"Mobile Number*"} value={number} onChangeText={(text) => setNumber(text)} />
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
                    <View style={{ paddingHorizontal: 25, flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Pressable onPress={() => resendMobileOtp()}>
                        <Text style={[styles.textSize, styles.otpBtnStyle]}>Resend OTP,</Text>
                        </Pressable>
                        <Text style={styles.textSize}>If not received</Text>

                    </View>
                    
                    <View style={{paddingVertical:15}}/>
                    <View style={{ flex: 1}}>
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
                        <View style={{ paddingVertical: 15 }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                            <Pressable onPress={() => navigation.goBack()}>

                                <Text style={styles.textSize}>CANCEL</Text>
                            </Pressable>
                            <View style={{ flexDirection: 'row', }}>
                                <Pressable onPress={() => resendEmailOtp()}>
                                    <Text style={[styles.textSize, styles.otpBtnStyle]}>Resend OTP,</Text>
                                </Pressable>
                                <Text style={styles.textSize}>If not received</Text>
                            </View>
                        </View>
                     

                    </View>
                    <View style={styles.btmBtn}>
                        <CustomBtn text={'Continue'} onPress={() => forgetCode()} />
                    </View>
                
                    </ScrollView>
            </View>
    </View>
  )
}

export default ForgetPasscode

const styles = StyleSheet.create({
    root: {
        padding: 20,
        // backgroundColor: "#fff",
        flexGrow: 1,
        justifyContent:'center',
        alignContent:'center'
    },
    otpBtnStyle:{
        textDecorationLine: 'underline',
        paddingHorizontal: 5
    },
    textSize:{
    fontSize: 12,
    color:'#000'
    },
    btmBtn:{
        paddingVertical:80
    }

})