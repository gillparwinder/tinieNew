import { StyleSheet, Text, View, Pressable, Image, Dimensions, Modal, TextInput } from 'react-native'
import React, { useState } from 'react';
import Header from '../../../components/header'
import CustomInput from '../../../components/CustomInput/CustomInput';
import CustomBtn from '../../../components/CustomBtn/CustomBtn';
import TinieButton from '../../../components/button';
import axios from 'axios';
import { ALERT_TYPE, Dialog, Root, Toast } from 'react-native-alert-notification';


const Login = ({navigation}) => {

  const [number, setnumber] = useState('')
  const [numberOtp, setNumberOtp] = useState('')
  const [showModal, setShowModal] = useState(false);
  const [enlarge, setEnlarge] = useState(null);



  const windowWidth = Dimensions.get('window').width;

  const onLogin = () => {
    console.log('btn pressed ')
    setShowModal(!showModal) 
    
  }
  const toGetNumberOtp = async () => {
    const url = 'https://tiniev1vendorauth.azurewebsites.net/api/v1/get-merchant-otp?contact=' + number;
  
    console.log(url);
 
    return await
        axios
            .get(url)
            .then((response) => {
                //alert(JSON.stringify(response.data));
                console.log(' response = ', JSON.stringify(response.data));
                if (response.data.status == 'OTP successfully sent') {
                    setEnlarge(response.data.status);
                    alert('toast nhi chla')
                    Toast.show({
                        type: ALERT_TYPE.SUCCESS,
                        title: 'SUCCESS',
                        textBody: 'Otp Sent Successfully On Your WhatsApp',
                    })
                } 
                // else {
                //     // alert(response.data.message);
                // }
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

  const resetPassCode = () => {
    navigation.navigate('ForgetPasscode')
  }

  const enterPressed =() => {
    setShowModal(!showModal)
    alert('Sprint One is Completed Here')

  }

  return (
    <View style={styles.root}>
      <Header text={"Welcome, User"} type='PRIMARY' />

      <View style={{ justifyContent: 'space-around', flex: 1, padding:5}}>
        <View style={{ flex: 2, justifyContent: 'center', }}>
          <View style={styles.mainCont}>
            <CustomInput placeholder={"Mobile Number*"} value={number} onChangeText={(text) => setnumber(text)} />
            {enlarge &&
                                <>
                                    <CustomInput placeholder={"OTP sent to Phone number"} value={numberOtp} onChangeText={(text) => setNumberOtp(text)}/>
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
            {/* <CustomInput placeholder={"OTP sent to Phone number"} value={numberOtp} onChangeText={(text) => setNumberOtp(text)} /> */}
          </View>
          <View style={{ paddingVertical: 5 }} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
            <Pressable onPress={() => navigation.goBack()}>

              <Text style={styles.textSize}>CANCEL</Text>
            </Pressable>
            <View style={{ flexDirection: 'row' }}>
              <Pressable onPress={() => resendOtp()}>
                <Text style={[styles.textSize, { textDecorationLine: 'underline', paddingHorizontal: 5, color: "#000" }]}>Resend OTP,</Text>
              </Pressable>
              <Text style={styles.textSize}>If not received</Text>
            </View>
          </View>
          <View style={{ paddingVertical: 20 }} />
        </View>
        <View style={{ paddingVertical: 40 }}>
          <CustomBtn text={'Login'} onPress={() => onLogin()} />
        </View>
      </View>
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={showModal}
      >
        <View style={styles.modelCont}>
          <View style={styles.modelView}>
            <Text style={styles.modalText}>ENTER PASSCODE</Text>
            <View style={styles.inputCont}>
            <TextInput
            style={styles.passcodeInput}
            maxLength={4}
            keyboardType={'numeric'}
            />
            </View>
            <View style={styles.textCont}><Text style={{color:'#fff',fontSize:10}}>Forget password - </Text><Pressable onPress={() =>resetPassCode()}><Text style={styles.reset}>reset</Text></Pressable></View>
            <View style={styles.btmBtn}>
              <View style={{flexGrow:1}}>
            <Pressable onPress={() => setShowModal(!showModal)}><Text style={{color:"#fff"}}>Cancel</Text></Pressable>
             </View>
            <View style={{flexGrow:1}}> 
            <Pressable 
            onPress={() => enterPressed()
           
            // navigation.navigate('BookingInfoMainMenu')
            } ><Text style={styles.modalBtn}>Enter</Text></Pressable>
            </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: 'space-between'
  },
  mainCont: {
    padding: 20
  },
  textSize: {
    fontSize: 12,
    color: "#000"
  },
  imgView: {
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#470000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  imgCont: {
    width: "33%",
    height: 55,
  },
  modelCont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modelView: {
    justifyContent: 'space-between',
    paddingVertical: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 15
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
    backgroundColor: '#353535',
    borderRadius: 10,
    height: 353,
    width: 255,
    alignItems: 'center',
    // borderColor: '#0F8989',
    // borderWidth: 1
  },
  modalText: {
    fontSize: 16,
    fontWeight: '500',
    color: "#fff"
  },
  modalBtn: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    textAlign: 'center',
    backgroundColor: '#34EBEB',
    borderRadius: 12,
    // width: "50%",
    elevation: 8,
    // shadowColor: '#470000',
    shadowColor:'#34EBEB',
    shadowOffset: { width: 4, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    color: '#000',
    fontSize: 16,
    fontWeight: "400"
  },
  btmBtn:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:20,
  },
  passcodeInput:{
    // borderBottomWidth:2,
    // borderBottomColor:'#fff',
    // borderStyle:'dashed',
    fontSize:16,
    color:'#fff',
    letterSpacing:15,
    // width:'45.2%'
  },
  inputCont:{
    width:'45.2%',
    borderStyle:'dashed',
    borderBottomWidth:2,
    borderBottomColor:'#fff',
  },
  reset:{
    color:'#fff',
    borderBottomColor:"#fff",
    borderBottomWidth:1,
    width:27,
    fontSize:10
  },
  textCont:{
    width:"100%",
    flexDirection:'row',
    justifyContent:'flex-end',
    paddingHorizontal:20,
  

  }


})

export default Login
