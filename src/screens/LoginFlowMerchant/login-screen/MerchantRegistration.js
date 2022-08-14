import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import Header from '../../../components/header'
import CustomActiveLine from '../../../components/CustomActiveLine/CustomActiveLine'
import CustomHeaderText from '../../../components/CustomHeaderText/CustomHeaderText'
import CustomInput from '../../../components/CustomInput/CustomInput'
import { ScrollView } from 'react-native-gesture-handler'
import CustomBtn from '../../../components/CustomBtn/CustomBtn'
import ImagePicker from 'react-native-image-crop-picker';
import * as Progress from 'react-native-progress';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ALERT_TYPE, Dialog, Root, Toast } from 'react-native-alert-notification';
import { Loader } from '../../../components/loader'


const MerchantRegistration = ({ route, navigation }) => {

    const { data } = route?.params
    // console.log(data)

    const [ownName, setOwnName] = useState("user")
    const [ownID, setOwnID] = useState("123")
    const [isValid, setIsValid] = useState(false)
    const [isValidOwnIDProof, setIsValidOwnIDProof] = useState(false)
    const [isValidManag, setIsValidManag] = useState(false)
    const [isValidManagEmail, setIsValidManagEmail] = useState(false)
    const [isValidManagNum, setIsValidManagNum] = useState(false)
    const [isValidManagOtp, setIsValidManagOtp] = useState(false)
    const [isValidManagIDProof, setIsValidManagIDProof] = useState(false)
    const [managName, setManagName] = useState("manger name")
    const [managNumber, setManagNumber] = useState("9876543210")
    const [managEmail, setManagEmail] = useState("qwerty@yopmail.cvom")
    const [managNumOtp, setManagNumOtp] = useState("1111")
    const [managID, setManagID] = useState("1234")
    const [ownImage, setOwnImage] = useState(null)
    const [managImage, setManagImage] = useState(null)
    const [loading, setLoading] = useState(false)

    const onSubmit = () => {
        setLoading(true)
        if (ownName == "") {
            Toast.show({
                onPress: () => { Toast.hide() },
                type: ALERT_TYPE.WARNING,
                title: 'WARNING',
                textBody: 'Name is required',
            })
            setLoading(false)
        } else if (ownID == "") {
            Toast.show({
                onPress: () => { Toast.hide() },
                type: ALERT_TYPE.WARNING,
                title: 'WARNING',
                textBody: 'Proof of Identification is required',
            })
            setLoading(false)
        } else if (ownImage == null) {
            Toast.show({
                onPress: () => { Toast.hide() },
                type: ALERT_TYPE.WARNING,
                title: 'WARNING',
                textBody: 'Owner proof document is required',
            })
            setLoading(false)
        } else if (managName == "") {
            Toast.show({
                onPress: () => { Toast.hide() },
                type: ALERT_TYPE.WARNING,
                title: 'WARNING',
                textBody: 'Manager name is required',
            })
            setLoading(false)
        } else if (managEmail == "") {
            Toast.show({
                onPress: () => { Toast.hide() },
                type: ALERT_TYPE.WARNING,
                title: 'WARNING',
                textBody: 'Manager email is required',
            })
            setLoading(false)
        } else if (managNumber == "") {
            Toast.show({
                onPress: () => { Toast.hide() },
                type: ALERT_TYPE.WARNING,
                title: 'WARNING',
                textBody: 'Manager mobile number is required',
            })
            setLoading(false)
        } else if (managNumOtp == "") {
            Toast.show({
                onPress: () => { Toast.hide() },
                type: ALERT_TYPE.WARNING,
                title: 'WARNING',
                textBody: 'Manager mobile number otp is required',
            })
            setLoading(false)
        } else if (managID == "") {
            Toast.show({
                onPress: () => { Toast.hide() },
                type: ALERT_TYPE.WARNING,
                title: 'WARNING',
                textBody: 'Manger proof of identityfication is required',
            })
            setLoading(false)
        } else if (managImage == null) {
            Toast.show({
                onPress: () => { Toast.hide() },
                type: ALERT_TYPE.WARNING,
                title: 'WARNING',
                textBody: 'Manager proof document is required',
            })
            setLoading(false)
        } else {
            const merchantData = {
                ...data,
                ownName: ownName,
                ownID: ownID,
                ownImage: ownImage,
                managName: managName,
                managEmail: managEmail,
                managNumber: managNumber,
                managNumOtp: managNumOtp,
                managID: managID,
                managImage: managImage,
            }
            setLoading(false)
            console.log("merchantData == ", merchantData);
            navigation.navigate('BusinessInfo', {
                merchantData
            })
        }
    }
    const ownTextChange = (text) => {
        if (text.length != 0) {
            setOwnName(text),
                setIsValid(true)
        }
        else {
            setOwnName(text),
                setIsValid(false)
        }
    }

    const ownIDChange = (text) => {
        if (text.length != 0) {
            setOwnID(text),
                setIsValidOwnIDProof(true)
        }
        else {
            setOwnID(text),
                setIsValidOwnIDProof(false)
        }
    }

    const managTextChange = (text) => {
        if (text.length != 0) {
            setManagName(text),
                setIsValidManag(true)
        }
        else {
            setManagName(text),
                setIsValidManag(false)
        }
    }
    const managEmailChange = (text) => {
        if (text.length != 0) {
            setManagEmail(text),
                setIsValidManagEmail(true)
        }
        else {
            setManagEmail(text),
                setIsValidManagEmail(false)
        }
    }
    const managNumChange = (text) => {
        if (text.length != 0) {
            setManagNumber(text),
                setIsValidManagNum(true)
        }
        else {
            setManagNumber(text),
                setIsValidManagNum(false)
        }
    }
    const managOTPChange = (text) => {
        if (text.length != 0) {
            setManagNumOtp(text),
                setIsValidManagOtp(true)
        }
        else {
            setManagNumOtp(text),
                setIsValidManagOtp(false)
        }
    }
    const managIDChange = (text) => {
        if (text.length != 0) {
            setManagID(text),
                setIsValidManagIDProof(true)
        }
        else {
            setManagID(text),
                setIsValidManagIDProof(false)
        }
    }

    const uploadOwnID = () => {

        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            includeBase64: true
        }).then(image => {
            console.log("selected Image", image)
            //   setShowoption(false)
            setOwnImage(image)
            //   setImagee({imagedata})

            imageUploadOwnId(image.path)
        })
    }
    const imageUploadOwnId = (imagePathOwn) => {
        const imageDataOwn = new FormData()
        imageDataOwn.append("file", {
            uri: imagePathOwn,
            name: 'image.jpeg',
            fileName: 'image',
            type: 'image/jpeg'
        })
        console.log("formdata", imageDataOwn)
    }


    const uploadManagID = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            includeBase64: true
        }).then(image => {
            //   console.log("selected Image", image)
            console.log("selected Image path", image.path)

            imageUploadManagId(image.path)
            //   setShowoption(false)
            setManagImage(image)
            //   setImagee({imagedata})
        })
    }
    const imageUploadManagId = (imagePathManag) => {
        const imageDataManag = new FormData()
        imageDataManag.append("file", {
            uri: imagePathManag,
            name: 'image.jpeg',
            fileName: 'image',
            type: 'image/jpeg'
        })
        console.log("formdata", imageDataManag)
    }



    return (
        <Root>
            <View style={{ backgroundColor: '#fff' }}>
                <Loader loading={loading} />
                <Header name={'arrow-back'} text={'Business Registration'} nameIcon={'alert'} type={'SECONDARY'} onPress={() => navigation.goBack()} />
                <View style={styles.root}>

                    <View style={styles.topNav}>
                        <View style={{ width: "33%", alignItems: 'flex-end', paddingRight: 5 }}><CustomActiveLine text={'Basic'} /></View>
                        <View style={{ width: "36%" }}><CustomActiveLine text={'Business'} type={'SECONDARY'} /></View>
                        <View style={{ width: "33%" }}><CustomActiveLine text={'Address'} type={'SECONDARY'} /></View>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false} style={{ flexGrow: 1, }}>
                        <View style={{ paddingVertical: 35 }}>
                            <CustomHeaderText text={"Basic Information"} />
                        </View>

                        <View>
                            <CustomHeaderText text={"Outlet Owner Details"} type={"SECONDARY"} />
                            <View style={{ paddingVertical: 10 }} />
                            <View>
                                {isValid ?
                                    <View style={{ alignItems: 'flex-start', paddingHorizontal: 4, position: 'absolute', zIndex: 1 }}>
                                        <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal: 4 }}>Name</Text>
                                    </View>
                                    :
                                    null

                                }
                                <View>
                                    <CustomInput placeholder={"Enter  Name*"} value={ownName} onChangeText={(text) => ownTextChange(text)} />
                                </View>
                                {/* <View>
                            {isValidOwnEmail ?
                                <View style={{ alignItems: 'flex-start',   paddingHorizontal: 4, position: 'absolute' ,zIndex:1}}>
                                    <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal:4 }}>Email ID</Text>
                                </View>
                                :
                                null

                            }
                            <CustomInput placeholder={'Enter Email ID*'} value={ownEmail} onChangeText={(text) => ownEmailChange(text)} />
                            </View>
                            <View>
                            {isValidOwnNum ?
                                <View style={{ alignItems: 'flex-start',   paddingHorizontal: 4, position: 'absolute' ,zIndex:1}}>
                                    <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal:4 }}>Mobile Number</Text>
                                </View>
                                :
                                null

                            }
                            <CustomInput placeholder={'Mobile Number*'} value={ownNumber} onChangeText={(text) => ownNumChange(text)} keyboardType={'numeric'} />
                            </View>
                            <View>
                            {isValidOwnOtp ?
                                <View style={{ alignItems: 'flex-start',   paddingHorizontal: 4, position: 'absolute' ,zIndex:1}}>
                                    <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal:4 }}>OTP</Text>
                                </View>
                                :
                                null

                            }
                            <CustomInput placeholder={'Enter OTP Sent to the Mobile Number*'} value={ownNumOtp} onChangeText={(text) => ownOTPChange(text)} keyboardType={'numeric'} />
                            </View> */}
                                <View>
                                    {isValidOwnIDProof ?
                                        <View style={{ alignItems: 'flex-start', paddingHorizontal: 4, position: 'absolute', zIndex: 1 }}>
                                            <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal: 4 }}>ID Proof</Text>
                                        </View>
                                        :
                                        null

                                    }
                                    <CustomInput placeholder={'Upload Proof of Identification*'} value={ownID} onChangeText={(text) => ownIDChange(text)} />
                                </View>
                            </View>
                            <View style={{ paddingVertical: 5 }} />
                            {/* <View>
                            <Pressable style={styles.fileBtnCont} onPress={() => uploadOwnID()}>
                            <Text style={styles.fileBtn}>Choose file</Text>
                            </Pressable>
                            <Text style={{ fontSize: 8, paddingLeft: 5, color: "#000" }}>Only PDF, JPEG & PNG Files with size Limit 5MB</Text>
                        </View> */}
                            {ownImage == null ?
                                <View>
                                    <Pressable style={styles.fileBtnCont} onPress={() => uploadOwnID()}>
                                        <Text style={styles.fileBtn}>Choose file</Text>
                                    </Pressable>
                                    <Text style={{ fontSize: 8, paddingLeft: 5, color: "#000" }}>Only PDF, JPEG & PNG Files with size Limit 5MB</Text>
                                </View>
                                :
                                <View style={styles.barStyl}><Progress.Bar progress={1} width={120} color={'#7ADF4B'} /><Text style={{ color: '#000' }}>Uploading Successfull</Text><View style={styles.box}><Ionicons name={'checkmark'} size={22} color={"#000"} fontSize={'600'} /></View></View>}

                        </View>
                        <View style={{ paddingVertical: 60 }}>
                            <CustomHeaderText text={"Outlet Manager Details"} type={"SECONDARY"} />
                            <View style={{ paddingVertical: 10 }}></View>

                            <View>
                                {isValidManag ?
                                    <View style={{ alignItems: 'flex-start', paddingHorizontal: 4, position: 'absolute', zIndex: 1 }}>
                                        <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal: 4 }}>Name</Text>
                                    </View>
                                    :
                                    null

                                }
                                <CustomInput placeholder={"Enter  Name*"} value={managName} onChangeText={(text) => managTextChange(text)} />
                            </View>
                            <View>
                                {isValidManagEmail ?
                                    <View style={{ alignItems: 'flex-start', paddingHorizontal: 4, position: 'absolute', zIndex: 1 }}>
                                        <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal: 4 }}>Email ID</Text>
                                    </View>
                                    :
                                    null

                                }
                                <CustomInput placeholder={'Enter Email ID*'} value={managEmail} onChangeText={(text) => managEmailChange(text)} />
                            </View>
                            <View>
                                {isValidManagNum ?
                                    <View style={{ alignItems: 'flex-start', paddingHorizontal: 4, position: 'absolute', zIndex: 1 }}>
                                        <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal: 4 }}>Mobile Number</Text>
                                    </View>
                                    :
                                    null

                                }
                                <CustomInput placeholder={'Mobile Number*'} value={managNumber} onChangeText={(text) => managNumChange(text)} keyboardType={'numeric'} />
                            </View>
                            <View>
                                {isValidManagOtp ?
                                    <View style={{ alignItems: 'flex-start', paddingHorizontal: 4, position: 'absolute', zIndex: 1 }}>
                                        <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal: 4 }}>OTP</Text>
                                    </View>
                                    :
                                    null

                                }
                                <CustomInput placeholder={'Enter OTP Sent to the Mobile Number*'} value={managNumOtp} onChangeText={(text) => managOTPChange(text)} keyboardType={'numeric'} />
                            </View>
                            <View>
                                {isValidManagIDProof ?
                                    <View style={{ alignItems: 'flex-start', paddingHorizontal: 4, position: 'absolute', zIndex: 1 }}>
                                        <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal: 4 }}>ID Proof</Text>
                                    </View>
                                    :
                                    null

                                }
                                <CustomInput placeholder={'Upload Proof of Identification*'} value={managID} onChangeText={(text) => managIDChange(text)} />
                            </View>


                            <View style={{ paddingVertical: 5 }} />
                            {/* <View>
                            <Pressable style={styles.fileBtnCont} onPress={() => uploadManagID()}>
                                <Text style={styles.fileBtn}>Choose file</Text>
                            </Pressable>
                            <Text style={{ fontSize: 8, paddingLeft: 5 }}>Only PDF, JPEG & PNG Files with size Limit 5MB</Text>
                        </View> */}
                            {managImage == null ?
                                <View>
                                    <Pressable style={styles.fileBtnCont} onPress={() => uploadManagID()}>
                                        <Text style={styles.fileBtn}>Choose file</Text>
                                    </Pressable>
                                    <Text style={{ fontSize: 8, paddingLeft: 5 }}>Only PDF, JPEG & PNG Files with size Limit 5MB</Text>
                                </View>
                                : <View style={styles.barStyl}><Progress.Bar progress={1} width={120} color={'#7ADF4B'} /><Text style={{ color: '#000' }}>Uploading Successfull</Text><View style={styles.box}><Ionicons name={'checkmark'} size={22} color={"#000"} fontSize={'600'} /></View></View>}
                        </View>
                        <View style={{ paddingBottom: 200 }}>
                            <CustomBtn text={'Next'} onPress={onSubmit} />
                        </View>
                    </ScrollView>
                </View>
            </View>
        </Root>
    )
}

export default MerchantRegistration

const styles = StyleSheet.create({
    root: {
        padding: 20,
        // backgroundColor: "#fff"
    },
    topNav: {
        flexDirection: "row",
        paddingBottom: 10,
        justifyContent: 'center'
    },
    fileBtnCont: {
        alignItems: 'flex-start'
    },
    fileBtn: {
        backgroundColor: '#5A849B',
        paddingVertical: 4,
        color: "#fff",
        fontSize: 12,
        paddingHorizontal: 20,
        borderRadius: 25
    },
    barStyl: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    box: {
        backgroundColor: '#7ADF4B',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0.5,
        borderRadius: 50,
        height: 24,
        width: 24
    }

})