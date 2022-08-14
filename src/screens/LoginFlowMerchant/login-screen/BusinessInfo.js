import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'

import Header from '../../../components/header'
import CustomActiveLine from '../../../components/CustomActiveLine/CustomActiveLine'
import { ScrollView } from 'react-native-gesture-handler'
import CustomHeaderText from '../../../components/CustomHeaderText/CustomHeaderText'
import CustomInput from '../../../components/CustomInput/CustomInput'
import CustomBtn from '../../../components/CustomBtn/CustomBtn'
import CustomDropdown from '../../../components/CustomDropdown/CustomDropdown'
import ImagePicker from 'react-native-image-crop-picker';
import * as Progress from 'react-native-progress';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ALERT_TYPE, Dialog, Root, Toast } from 'react-native-alert-notification';
import { Loader } from '../../../components/loader'

const businessType = [
  { id: 1, sName: 'Saloon and SPA' },
  { id: 2, sName: 'Event Management' },
  { id: 3, sName: 'Boutique' },
  { id: 4, sName: 'Car Service Centre' },
  { id: 5, sName: 'Dance Studio' },
  { id: 6, sName: 'Gym Service' },
  { id: 7, sName: 'Zooba Centre' },
  { id: 8, sName: 'Day Care' },


]

const BusinessInfo = ({ route, navigation }) => {
  const { merchantData } = route?.params
  // console.log(merchantData)

  const [businessName, setBusinessName] = useState("businessName")
  const [type, setType] = useState("")
  const [year, setYear] = useState("1991")
  const [pan, setPan] = useState("asfds")
  const [gstin, setGstin] = useState("adsfds")
  const [cert, setCert] = useState("asdff")
  const [license, setLicense] = useState("asdfsdv")
  const [mcc, setMcc] = useState("asdfs")


  const [isValidName, setIsValidName] = useState(false)
  const [isValidType, setIsValidType] = useState(false)
  const [isValidYear, setIsValidYear] = useState(false)
  const [isValidPan, setIsValidPan] = useState(false)
  const [isValidGSTIN, setIsValidGSTIN] = useState(false)
  const [isValidCert, setIsValidCert] = useState(false)
  const [isValidLicense, setIsValidLicense] = useState(false)
  const [isValidMCC, setIsValidMCC] = useState(false)
  const [gstImage, setGstImage] = useState(null)
  const [panImage, setPanImage] = useState(null)
  const [licenseImage, setLicenseImage] = useState(null)
  const [certImage, setCertImage] = useState(null)
  const [mccImage, setMccImage] = useState(null)
  const [loading, setLoading] = useState(false)


  const [select, setSelected] = useState('sasd')

  const [image, setImage] = useState({})

  const onNext = () => {
    setLoading(true)
    if (businessName == "") {
      Toast.show({
        onPress: () => { Toast.hide() },
        type: ALERT_TYPE.WARNING,
        title: 'WARNING',
        textBody: 'Name is required',
      })
      setLoading(false)
    } else if (select == "") {
      Toast.show({
        onPress: () => { Toast.hide() },
        type: ALERT_TYPE.WARNING,
        title: 'WARNING',
        textBody: 'Type of business is required',
      })
      setLoading(false)
    } else if (year == "") {
      Toast.show({
        onPress: () => { Toast.hide() },
        type: ALERT_TYPE.WARNING,
        title: 'WARNING',
        textBody: 'Year of establishment is required',
      })
      setLoading(false)
    } else if (gstin == "") {
      Toast.show({
        onPress: () => { Toast.hide() },
        type: ALERT_TYPE.WARNING,
        title: 'WARNING',
        textBody: 'Business GSTIN is required',
      })
      setLoading(false)
    } else if (gstImage == null) {
      Toast.show({
        onPress: () => { Toast.hide() },
        type: ALERT_TYPE.WARNING,
        title: 'WARNING',
        textBody: 'GST document is required',
      })
      setLoading(false)
    } else if (pan == "") {
      Toast.show({
        onPress: () => { Toast.hide() },
        type: ALERT_TYPE.WARNING,
        title: 'WARNING',
        textBody: 'Pan card number is required',
      })
      setLoading(false)
    } else if (panImage == null) {
      Toast.show({
        onPress: () => { Toast.hide() },
        type: ALERT_TYPE.WARNING,
        title: 'WARNING',
        textBody: 'Pan document is required',
      })
      setLoading(false)
    } else if (license == "") {
      Toast.show({
        onPress: () => { Toast.hide() },
        type: ALERT_TYPE.WARNING,
        title: 'WARNING',
        textBody: 'Business license is required',
      })
      setLoading(false)
    } else if (licenseImage == null) {
      Toast.show({
        onPress: () => { Toast.hide() },
        type: ALERT_TYPE.WARNING,
        title: 'WARNING',
        textBody: 'License document is required',
      })
      setLoading(false)
    } else if (cert == "") {
      Toast.show({
        onPress: () => { Toast.hide() },
        type: ALERT_TYPE.WARNING,
        title: 'WARNING',
        textBody: 'Incorporation certificate is required',
      })
      setLoading(false)
    } else if (certImage == null) {
      Toast.show({
        onPress: () => { Toast.hide() },
        type: ALERT_TYPE.WARNING,
        title: 'WARNING',
        textBody: 'Incorporation certificate document is required',
      })
      setLoading(false)
    } else if (mcc == "") {
      Toast.show({
        onPress: () => { Toast.hide() },
        type: ALERT_TYPE.WARNING,
        title: 'WARNING',
        textBody: 'Mcc of business is required',
      })
      setLoading(false)
    } else if (mccImage == null) {
      Toast.show({
        onPress: () => { Toast.hide() },
        type: ALERT_TYPE.WARNING,
        title: 'WARNING',
        textBody: 'Mcc document is required',
      })
      setLoading(false)
    } else {
      const businessData = {
        ...merchantData,
        businessName: businessName,
        typeOfBusiness: select,
        yearOfEstablishment: year,
        gstin: gstin,
        gstImage: gstImage,
        pan: pan,
        panImage: panImage,
        license: license,
        licenseImage: licenseImage,
        incorporationCertificate: cert,
        incorporationCertificateImage: certImage,
        mcc: mcc,
        mccImage: mccImage,

      }
      console.log("businessData == ", businessData)
      navigation.navigate('BusinessAdr', { businessData })
      setLoading(false)
    }
  }

  const onSelect = (item) => {
    setSelected(item)
    setIsValidType(true)
  }

  const mask = '[00]{/}[00]{/}[0000]';

  const nameChange = (text) => {
    if (text.length != 0) {
      setBusinessName(text),
        setIsValidName(true)
    }
    else {
      setBusinessName(text),
        setIsValidName(false)
    }
  }
  // const typeChange = (text) => {
  //   if (text.length != 0) {
  //     setType(text),
  //       setIsValidType(true)
  //   }
  //   else {
  //     setType(text),
  //     setIsValidType(false)
  //   }
  // }
  const yearChange = (text) => {
    if (text.length != 0) {
      setYear(text),
        setIsValidYear(true)
    }
    else {
      setYear(text),
        setIsValidYear(false)
    }
  }
  const panChange = (text) => {
    if (text.length != 0) {
      setPan(text),
        setIsValidPan(true)
    }
    else {
      setPan(text),
        setIsValidPan(false)
    }
  }
  const gstinChange = (text) => {
    if (text.length != 0) {
      setGstin(text),
        setIsValidGSTIN(true)
    }
    else {
      setGstin(text),
        setIsValidGSTIN(false)
    }
  }
  const certChange = (text) => {
    if (text.length != 0) {
      setCert(text),
        setIsValidCert(true)
    }
    else {
      setCert(text),
        setIsValidCert(false)
    }
  }
  const licenseChange = (text) => {
    if (text.length != 0) {
      setLicense(text),
        setIsValidLicense(true)
    }
    else {
      setLicense(text),
        setIsValidLicense(false)
    }
  }
  const mccChange = (text) => {
    if (text.length != 0) {
      setMcc(text),
        setIsValidMCC(true)
    }
    else {
      setMcc(text),
        setIsValidMCC(false)
    }
  }

  // gst
  const gstfileUpload = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true
    }).then(image => {
      console.log("selected Image path", image.path)
      imageUploadGstId(image.path)
      setGstImage(image)
    })
  }
  const imageUploadGstId = (imagePathGst) => {
    const imageDataGst = new FormData()
    imageDataGst.append("file", {
      uri: imagePathGst,
      name: 'image.jpeg',
      fileName: 'image',
      type: 'image/jpeg'
    })
    console.log("formdata gst", imageDataGst)
  }
  // pan
  const panfileUpload = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true
    }).then(image => {
      //   console.log("selected Image", image)
      console.log("selected Image path", image.path)

      imageUploadPanId(image.path)
      setPanImage(image)
    })
  }
  const imageUploadPanId = (imagePathPan) => {
    const imageDataPan = new FormData()
    imageDataPan.append("file", {
      uri: imagePathPan,
      name: 'image.jpeg',
      fileName: 'image',
      type: 'image/jpeg'
    })
    console.log("formdata pan", imageDataPan)
  }
  // license
  const licensefileUpload = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true
    }).then(image => {
      //   console.log("selected Image", image)
      console.log("selected Image path", image.path)

      imageUploadLicId(image.path)
      setLicenseImage(image)

    })
  }
  const imageUploadLicId = (imagePathLic) => {
    const imageDataLic = new FormData()
    imageDataLic.append("file", {
      uri: imagePathLic,
      name: 'image.jpeg',
      fileName: 'image',
      type: 'image/jpeg'
    })
    console.log("formdata lic", imageDataLic)
  }
  // certificate
  const certfileUpload = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true
    }).then(image => {
      //   console.log("selected Image", image)
      console.log("selected Image path", image.path)

      imageUploadCert(image.path)
      setCertImage(image)

    })
  }
  const imageUploadCert = (imagePathCert) => {
    const imageDataCert = new FormData()
    imageDataCert.append("file", {
      uri: imagePathCert,
      name: 'image.jpeg',
      fileName: 'image',
      type: 'image/jpeg'
    })
    console.log("formdata cert", imageDataCert)
  }
  // mcc
  const mccfileUpload = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true
    }).then(image => {
      //   console.log("selected Image", image)
      console.log("selected Image path", image.path)

      imageUploadMcc(image.path)
      setMccImage(image)

    })
  }
  const imageUploadMcc = (imagePathMcc) => {
    const imageDataMcc = new FormData()
    imageDataMcc.append("file", {
      uri: imagePathMcc,
      name: 'image.jpeg',
      fileName: 'image',
      type: 'image/jpeg'
    })
    console.log("formdata mcc", imageDataMcc)
  }

  return (
    <Root>
      <View style={{ backgroundColor: '#fff' }}>
        <Loader loading={loading} />
        <Header name={'arrow-back'} text={'Business Registration'} nameIcon={'alert'} type={'SECONDARY'} onPress={() => navigation.goBack()} />
        <View style={styles.root}>

          <View style={styles.topNav}>
            <View style={{ width: "33%", alignItems: 'flex-end', paddingRight: 5 }}><CustomActiveLine text={'Basic'} /></View>
            <View style={{ width: "33%" }}><CustomActiveLine text={'Business'} /></View>
            <View style={{ width: "33%", marginLeft: 10 }}><CustomActiveLine text={'Address'} type={'SECONDARY'} /></View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false} style={{ flexGrow: 1, }}>
            <View style={{ paddingVertical: 35 }}>
              <CustomHeaderText text={"Business Information"} />
            </View>
            <View>
              <View>
                {isValidName ?
                  <View style={{ alignItems: 'flex-start', paddingHorizontal: 4, position: 'absolute', zIndex: 1, top: 4 }}>
                    <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal: 4 }}>Name of Your Business</Text>
                  </View>
                  :
                  null

                }
                <CustomInput placeholder={'Name of Your Business*'} value={businessName} onChangeText={(text) => nameChange(text)} />
              </View>
              {/* type of business */}
              <View>
                {isValidType ?
                  <View style={{ alignItems: 'flex-start', paddingHorizontal: 4, position: 'absolute', zIndex: 1, top: -11 }}>
                    <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal: 4 }}>Type of Business</Text>
                  </View>
                  :
                  null

                }
                <CustomDropdown
                  text={'Choose the Type of Business*'}
                  value={select}
                  data={businessType}
                  onSelect={onSelect}
                />
                {/* <CustomInput placeholder={'Choose the Type of Business*'} value={type} onChangeText={(text) => typeChange(text)} /> */}
              </View>
              {/* date picker */}
              <View>
                {isValidYear ?
                  <View style={{ alignItems: 'flex-start', paddingHorizontal: 4, position: 'absolute', zIndex: 1, top: 4 }}>
                    <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal: 4 }}>Year of Establishment</Text>
                  </View>
                  :
                  null
                }
                <CustomInput placeholder={'Year of Establishment (DD/MM/YYYY)*'} value={year} onChangeText={(text) => yearChange(text)} keyboardType={'numeric'} maxLength={10} />
              </View>
              <View>
                {isValidGSTIN ?
                  <View style={{ alignItems: 'flex-start', paddingHorizontal: 4, position: 'absolute', zIndex: 1, top: 4 }}>
                    <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal: 4 }}>Business GSTIN</Text>
                  </View>
                  :
                  null
                }
                <CustomInput placeholder={'Business GSTIN*'} value={gstin} onChangeText={(text) => gstinChange(text)} onPress={() => fileUpload()} />
              </View>

              {gstImage == null ?
                <View>
                  <Pressable style={styles.fileBtnCont} onPress={() => gstfileUpload()}>
                    <Text style={styles.fileBtn}>Choose file</Text>
                  </Pressable>
                  <Text style={{ fontSize: 8, paddingLeft: 5, color: "#000" }}>Only PDF, JPEG & PNG Files with size Limit 5MB</Text>
                </View>
                :
                <View style={styles.barStyl}><Progress.Bar progress={1} width={120} color={'#7ADF4B'} /><Text style={{ color: '#000' }}>Uploading Successfull</Text><View style={styles.box}><Ionicons name={'checkmark'} size={22} color={"#000"} fontSize={'600'} /></View></View>}

              <View>
                {isValidPan ?
                  <View style={{ alignItems: 'flex-start', paddingHorizontal: 4, position: 'absolute', zIndex: 1, top: 4 }}>
                    <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal: 4 }}>Business PAN</Text>
                  </View>
                  :
                  null

                }
                <CustomInput placeholder={'Business PAN*'} value={pan} onChangeText={(text) => panChange(text)} />
              </View>

              {panImage == null ?
                <View>
                  <Pressable style={styles.fileBtnCont} onPress={() => panfileUpload()}>
                    <Text style={styles.fileBtn}>Choose file</Text>
                  </Pressable>
                  <Text style={{ fontSize: 8, paddingLeft: 5, color: "#000" }}>Only PDF, JPEG & PNG Files with size Limit 5MB</Text>
                </View>
                :
                <View style={styles.barStyl}><Progress.Bar progress={1} width={120} color={'#7ADF4B'} /><Text style={{ color: '#000' }}>Uploading Successfull</Text><View style={styles.box}><Ionicons name={'checkmark'} size={22} color={"#000"} fontSize={'600'} /></View></View>}
              <View>
                {isValidLicense ?
                  <View style={{ alignItems: 'flex-start', paddingHorizontal: 4, position: 'absolute', zIndex: 1, top: 4 }}>
                    <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal: 4 }}>Business License</Text>
                  </View>
                  :
                  null

                }
                <CustomInput placeholder={'Business License*'} value={license} onChangeText={(text) => licenseChange(text)} />
              </View>
              {licenseImage == null ?
                <View>
                  <Pressable style={styles.fileBtnCont} onPress={() => licensefileUpload()}>
                    <Text style={styles.fileBtn}>Choose file</Text>
                  </Pressable>
                  <Text style={{ fontSize: 8, paddingLeft: 5, color: "#000" }}>Only PDF, JPEG & PNG Files with size Limit 5MB</Text>
                </View>
                :
                <View style={styles.barStyl}><Progress.Bar progress={1} width={120} color={'#7ADF4B'} /><Text style={{ color: '#000' }}>Uploading Successfull</Text><View style={styles.box}><Ionicons name={'checkmark'} size={22} color={"#000"} fontSize={'600'} /></View></View>}
              <View>
                {isValidCert ?
                  <View style={{ alignItems: 'flex-start', paddingHorizontal: 4, position: 'absolute', zIndex: 1, top: 4 }}>
                    <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal: 4 }}>Business License</Text>
                  </View>
                  :
                  null

                }
                <CustomInput placeholder={'Incorporation Certificate*'} value={cert} onChangeText={(text) => certChange(text)} />
              </View>
              {certImage == null ?
                <View>
                  <Pressable style={styles.fileBtnCont} onPress={() => certfileUpload()}>
                    <Text style={styles.fileBtn}>Choose file</Text>
                  </Pressable>
                  <Text style={{ fontSize: 8, paddingLeft: 5, color: "#000" }}>Only PDF, JPEG & PNG Files with size Limit 5MB</Text>
                </View>
                :
                <View style={styles.barStyl}><Progress.Bar progress={1} width={120} color={'#7ADF4B'} /><Text style={{ color: '#000' }}>Uploading Successfull</Text><View style={styles.box}><Ionicons name={'checkmark'} size={22} color={"#000"} fontSize={'600'} /></View></View>}
              <View>
                {isValidMCC ?
                  <View style={{ alignItems: 'flex-start', paddingHorizontal: 4, position: 'absolute', zIndex: 1, top: 4 }}>
                    <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal: 4 }}>Business License</Text>
                  </View>
                  :
                  null

                }
                <CustomInput placeholder={'MCC of Business*'} value={mcc} onChangeText={(text) => mccChange(text)} />
              </View>
              {mccImage == null ?
                <View>
                  <Pressable style={styles.fileBtnCont} onPress={() => mccfileUpload()}>
                    <Text style={styles.fileBtn}>Choose file</Text>
                  </Pressable>
                  <Text style={{ fontSize: 8, paddingLeft: 5, color: "#000" }}>Only PDF, JPEG & PNG Files with size Limit 5MB</Text>
                </View>
                :
                <View style={styles.barStyl}><Progress.Bar progress={1} width={120} color={'#7ADF4B'} /><Text style={{ color: '#000' }}>Uploading Successfull</Text><View style={styles.box}><Ionicons name={'checkmark'} size={22} color={"#000"} fontSize={'600'} /></View></View>}
              <View style={{ flexDirection: 'row', justifyContent: "space-around", paddingVertical: 75, marginBottom: 150 }}>
                <View style={{ flex: 1 }}>
                  <CustomBtn text={'Back'} type={'SECONDARY'} onPress={() => navigation.goBack()} />
                </View>
                <View style={{ flex: 1 }}>
                  <CustomBtn text={'Next'} type={'PRIMARY'} onPress={onNext} />
                </View>


              </View>
            </View>
          </ScrollView>

        </View>
      </View>
    </Root>
  )
}

export default BusinessInfo

const styles = StyleSheet.create({

  root: {
    padding: 20,
    // backgroundColor: "#fff",
    // paddingBottom: 250
  },
  topNav: {
    flexDirection: "row",
    paddingBottom: 10,
    justifyContent: 'center',
  },
  btnCont: {
    flexDirection: 'row',
    justifyContent: "space-around",
    paddingVertical: 75
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