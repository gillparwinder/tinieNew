import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Header from '../../../components/header'
import CustomBtn from '../../../components/CustomBtn/CustomBtn'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ALERT_TYPE, Dialog, Root, Toast } from 'react-native-alert-notification';
import axios from 'axios'
import { Loader } from '../../../components/loader'

const TermsandConditions = ({ navigation, route }) => {
    const { data } = route?.params
    console.log(data);
    const [checkBox, setCheckBox] = useState(false)
    const [loading, setLoading] = useState(false)

    const btnPressed = async () => {
        console.log("data == ", data);
        setLoading(true)
        if (checkBox == false) {
            Toast.show({
                onPress: () => { Toast.hide() },
                type: ALERT_TYPE.WARNING,
                title: 'WARNING',
                textBody: 'Please agree terms and conditions before continuing.',
            })
            setLoading(false)
        } else {
            const url = "https://tiniev1vendorauth.azurewebsites.net/api/v1/register-merchant"
            console.log(url);
            //     "name": "John Doe",
            // "email: "name@email.com",
            // "phoneNumber": 9999999999,
            // "phoneOtp": <OTP sent to phone number>,
            // "emailOtp": <OTP sent to email>,
            // "passcode": "0000",
            // "files": <GSTIN image file named "business-gstin" (supported file types are jpg, png and tiff>,
            // "files": <Proof of ID image file named "merchant-id" (supported file types are jpg, png and tiff>,
            // "address": "123 Street name, city name",
            // "businessName": "None of your Business",
            // "businessPhoneNumber": 9999999999,
            // "subCategoryId": <ID of associated subcategory>,
            // "yearEstablished": 2222,
            // "pan": <Business's PAN number>,
            // "latitude": 0.000000,
            // "longitude": 0.000000,
            // "additionalServices": <Additional service option (Can make multiple selections just like files></ID>
            let formData = new FormData();
            formData.append('name', data.name);
            formData.append('phoneNumber', data.number);
            formData.append('phoneOtp', data.otp);
            formData.append('emailOtp', data.emailOtp);
            formData.append('passcode', data.passcode);
            formData.append('files', data.gstImage);
            formData.append('files', data.ownImage);
            formData.append('address', data.address);
            formData.append('businessName', data.businessName);
            formData.append('businessPhoneNumber', data.managNumber);
            formData.append('subCategoryId', data.typeOfBusiness);
            formData.append('yearEstablished', data.yearOfEstablishment);
            formData.append('pan', data.pan);
            formData.append('latitude', data.latitude);
            formData.append('longitude', data.longitude);
            formData.append('additionalServices', data.furtherAssistanceData);
            console.log("formData == ", formData);
            let bodyData = formData;
            let headerData = {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            };
            return await
                axios
                    .post(url, bodyData, headerData)
                    .then((response) => {
                        //alert(JSON.stringify(response.data));
                        console.log(' response = ', JSON.stringify(response.data));
                        setLoading(false)
                        Toast.show({
                            onPress: () => { Toast.hide() },
                            type: ALERT_TYPE.SUCCESS,
                            title: 'SUCCESS',
                            textBody: 'Success',
                        })

                    })
                    .catch((error) => {
                        setLoading(false)
                        alert(error);
                        // alert(JSON.stringify(error.response.data.status));

                    });
        }
    }
    return (
        <Root>
            <View style={{ backgroundColor: "#fff", }}>
                <Loader loading={loading} />
                <Header text={'Terms and Conditons'} />
                <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>

                    <Text style={styles.heading} >Terms & Conditions</Text>

                    <Text style={styles.text}>

                        By downloading or using the app, these terms will automatically apply to you – you should make sure therefore that you read them carefully before using the app. You’re not allowed to copy or modify the app, any part of the app, or our trademarks in any way. You’re not allowed to attempt to extract the source code of the app, and you also shouldn’t try to translate the app into other languages or make derivative versions. The app itself, and all the trademarks, copyright, database rights, and other intellectual property rights related to it, still belong to tinie business private limited.{'\n'}

                        tinie business private limited is committed to ensuring that the app is as useful and efficient as possible. For that reason, we reserve the right to make changes to the app or to charge for its services, at any time and for any reason. We will never charge you for the app or its services without making it very clear to you exactly what you’re paying for.{'\n'}

                        The tinie app stores and processes personal data that you have provided to us, to provide our Service. It’s your responsibility to keep your phone and access to the app secure. We therefore recommend that you do not jailbreak or root your phone, which is the process of removing software restrictions and limitations imposed by the official operating system of your device. It could make your phone vulnerable to malware/viruses/malicious programs, compromise your phone’s security features and it could mean that the tinie app won’t work properly or at all.{'\n'}
                        The app does use third-party services that declare their Terms and Conditions.{'\n'}
                        Link to Terms and Conditions of third-party service providers used by the app{'\n'}
                        <Text>  {'\u25CF'} Google Play Services</Text>{'\n'}
                        <Text>  {'\u25CF'} AdMob</Text>{'\n'}
                        <Text>  {'\u25CF'} Google Analytics for Firebase</Text>{'\n'}
                        <Text>  {'\u25CF'} Firebase Crashlytics</Text>{'\n'}
                        <Text>  {'\u25CF'} Facebook</Text>{'\n'}

                        You should be aware that there are certain things that tinie business private limited will not take responsibility for. Certain functions of the app will require the app to have an active internet connection. The connection can be Wi-Fi or provided by your mobile network provider, but tinie business private limited cannot take responsibility for the app not working at full functionality if you don’t have access to Wi-Fi, and you don’t have any of your data allowance left.{'\n'}
                        If you’re using the app outside of an area with Wi-Fi, you should remember that the terms of the agreement with your mobile network provider will still apply. As a result, you may be charged by your mobile provider for the cost of data for the duration of the connection while accessing the app, or other third-party charges. In using the app, you’re accepting responsibility for any such charges, including roaming data charges if you use the app outside of your home territory (i.e. region or country) without turning off data roaming. If you are not the bill payer for the device on which you’re using the app, please be aware that we assume that you have received permission from the bill payer for using the app.{'\n'}
                        {'\n'}
                        Along the same lines, tinie business private limited cannot always take responsibility for the way you use the app i.e. You need to make sure that your device stays charged – if it runs out of battery and you can’t turn it on to avail the Service, tinie business private limited cannot accept responsibility.{'\n'}
                        With respect to tinie business private limited’s responsibility for your use of the app, when you’re using the app, it’s important to bear in mind that although we endeavor to ensure that it is updated and correct at all times, we do rely on third parties to provide information to us so that we can make it available to you. tinie business private limited accepts no liability for any loss, direct or indirect, you experience as a result of relying wholly on this functionality of the app.{'\n'}
                        At some point, we may wish to update the app. The app is currently available on Android – the requirements for the system(and for any additional systems we decide to extend the availability of the app to) may change, and you’ll need to download the updates if you want to keep using the app. tinie business private limited does not promise that it will always update the app so that it is relevant to you and/or works with the Android version that you have installed on your device. However, you promise to always accept updates to the application when offered to you, We may also wish to stop providing the app, and may terminate use of it at any time without giving notice of termination to you. Unless we tell you otherwise, upon any termination,{'\n'}(a) the rights and licenses granted to you in these terms will end; {'\n'}(b) you must stop using the app, and (if needed) delete it from your device.{'\n'}
                    </Text>
                    <Text style={styles.heading} >Changes to This Terms and Conditions</Text>
                    <Text style={styles.text}>
                        We may update our Terms and Conditions from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Terms and Conditions on this page.{'\n'}

                        These terms and conditions are effective as of 2022-07-25{'\n'}
                    </Text>
                    <Text style={styles.heading} >Contact Us</Text>
                    <Text style={styles.text}>
                        If you have any questions or suggestions about our Terms and Conditions, do not hesitate to contact us at info@tinie.in. {'\n'}
                    </Text>
                    <View style={styles.cont}>
                        <Pressable onPress={() => setCheckBox(!checkBox)} >
                            {!checkBox ?
                                <View style={[{ borderColor: "#A3A1A1", marginRight: 15 }, styles.box]}></View>
                                :
                                <View style={[{ borderColor: '#065987', marginRight: 15, backgroundColor: '#065987', alignItems: 'center', justifyContent: 'center' }, styles.box]}><Ionicons name={'checkmark'} size={18} color={"#fff"} /></View>
                            }
                        </Pressable>
                        <Text style={styles.text}>I Agree to the terms and Conditions*</Text>

                    </View>
                    <View style={{ paddingBottom: 250 }}>
                        <CustomBtn text={'Save and Continue'} onPress={() => btnPressed()} />
                    </View>
                </ScrollView>
            </View>
        </Root>
    )
}

export default TermsandConditions

const styles = StyleSheet.create({
    root: {
        padding: 20,
        // backgroundColor: "#fff",
        paddingBottom: 450,
        flexGrow: 1
    },
    heading: {
        fontWeight: '700',
        lineHeight: 25,
        color: "#000"
    },
    text: {
        color: '#000'
    },
    cont: {
        flexDirection: "row",
        justifyContent: 'center',
        paddingVertical: 30,
        paddingTop: 100
    },
    box: {
        height: 22,
        width: 22,
        borderWidth: 1,
        borderBottomWidth: 2,
        borderRightWidth: 2
    },
})
