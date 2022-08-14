import { StyleSheet, Text, View, Modal,TextInput, Pressable } from 'react-native'
import React, {useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomBtn from '../../../components/CustomBtn/CustomBtn';


const RegisterationSuccess = ({navigation}) => {

    const [showModal, setShowModal] = useState(true);

  return (
    <View style={styles.root}>
        <Modal
        backdropOpacity={0.3}
        animationType={'fade'}
        transparent={true}
        visible={showModal}
        >
        <View style={styles.modelCont}>
          <View style={styles.modelView}>
        <View style={styles.cont}>
          <View style={[{ borderColor: '#065987', backgroundColor: '#065987', alignItems: 'center', justifyContent: 'center', padding:6, borderRadius:50, borderColor:'#7ADF4B', borderWidth:3,height:80, width:80}, styles.box]}><Ionicons name={'checkmark'} size={55} color={"#fff"}  fontSize={'900'}/></View>
          </View>
            <Text style={styles.modalText}>Thank you for registering with TINIE, Our team would get back to you within 24 hours</Text>
            {/* <View style={styles.btmBtn}> */}
            <View style={styles.btm}>
           <CustomBtn text={'Okay'} onPress={()=> navigation.navigate('WelcomeUser')}/>
           </View>
            {/* </View> */}
          </View>
        </View>
        </Modal>
    </View>
  )
}

export default RegisterationSuccess

const styles = StyleSheet.create({
    root:{
        flex:1
    },
    modelCont:{
        flex:1,
        justifyContent:'center', 
        alignItems:'center',
        backgroundColor:'#000'
    },
    modelView:{
        justifyContent:'space-between',
        paddingVertical:50,
        backgroundColor:'#ffff',
        borderRadius:15,
        height:338, 
        width:290, 
        alignItems:'center',
        borderColor:'#0F8989',
        borderWidth:2,
        padding:38,
    },
    modalText:{
        fontSize:14, 
        fontWeight:'400',
        color:"#000",
        paddingVertical:25
    },

    cont:{
        borderRadius:50,
        borderColor:'#065987',
        borderWidth:2,
    
    },
    btm:{
        flex:1,
        width: 350,
    }
 

})