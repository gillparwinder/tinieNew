import { StyleSheet, Text, View, Pressable, Modal } from 'react-native'
import React,{useState} from 'react'
import Header from '../../../components/header'
import CustomInput from '../../../components/CustomInput/CustomInput'
import CustomBtn from '../../../components/CustomBtn/CustomBtn'

const ResetPasscode = ({navigation}) => {

    const [passcode, SetPasscode] = useState('')
    const [confirmPasscode, SetConfirmPasscode] = useState('')
    const [showModal, setShowModal] = useState(false);

    const savedBtn = () => {
        setShowModal(!showModal) 
    }
 
    const cancelBtn = () => {
        console.log("btn is pressed")
    }
    const btnPress = () => {
        setShowModal(!showModal)
        navigation.navigate('Login')
    }

  return (
    <View style={{flex:1}}>
    <Header text={'Reset passcode'} />
    <View style={styles.root}>
        <View style={styles.textStyle}>
            <Text style={[styles.text, styles.textFirst]}>Set your new 4 digit passcode</Text>
            <Text style={[styles.text, styles.textSecond]}>(you will use this to login)</Text>
        </View>
        <CustomInput placeholder={"CHOOSE PASSCODE"} value={passcode} onChangeText={(text) => SetPasscode(text)} />
        <CustomInput placeholder={"CONFIRM PASSCODE"} value={confirmPasscode} onChangeText={(text) => SetConfirmPasscode(text)} />
        <Pressable onPress={()=> cancelBtn}>
            <Text style={{paddingLeft:5}}>CANCEL</Text>
        </Pressable>
        <View style={{paddingVertical:18}}/>
        <CustomBtn text={'Save'} onPress={() => savedBtn()}/>
    </View>
    <Modal
        animationType={'fade'}
        transparent={true}
        visible={showModal}
        >
          <View style={styles.modelCont}>
              <View style={styles.modelView}>
                  <Text style={styles.modalText}>passcode set successfully!</Text>
                  
                  <Pressable  onPress={ () =>btnPress() } type={'PRIMARY'} ><Text style={styles.modalBtn}>DONE</Text></Pressable>
                  
              </View>
          </View>
        </Modal>
</View>
  )
}

export default ResetPasscode

const styles = StyleSheet.create({
    root: {
        padding: 20,
        backgroundColor: "#fff",
        // paddingBottom: 250,
        flexGrow: 1,
        justifyContent:'center'
    },
    text:{
        color:'#000'
    },
    textStyle:{
        flexDirection:'row',
        alignItems:"center"
    },
    textFirst:{
        fontWeight:'600',
        paddingHorizontal:5
    },
    textSecond:{
        fontSize:11
    },
    modelCont:{
        flex:1,
        justifyContent:'center', 
        alignItems:'center',
    },
    modelView:{
        justifyContent:'space-between',
        paddingVertical:15,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        backgroundColor:'#ffff',
        borderRadius:15,
        height:129, 
        width:229, 
        alignItems:'center',
        borderColor:'#0F8989',
        borderWidth:1
    },
    modalText:{
        fontSize:16, 
        fontWeight:'500',
        color:"#000"
    },
    modalBtn:{
        paddingHorizontal:13,
        paddingVertical:10,
        textAlign: 'center',
        backgroundColor: '#34EBEB',
        borderRadius: 12,
        width: "50%",
        elevation: 1.5,
        shadowColor: '#470000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        color: '#000',
        fontSize: 16,
        fontWeight: "400"
    }
})