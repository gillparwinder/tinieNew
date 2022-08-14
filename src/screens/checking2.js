// import { Pressable, StyleSheet, Text, View, PermissionsAndroid } from 'react-native'
// import React, { useState, useEffect } from 'react'
// import Header from '../../../components/header'
// import CustomInput from '../../../components/CustomInput/CustomInput'
// import CustomBtn from '../../../components/CustomBtn/CustomBtn'
// import CustomActiveLine from '../../../components/CustomActiveLine/CustomActiveLine'
// import CustomHeaderText from '../../../components/CustomHeaderText/CustomHeaderText'
// import { ScrollView } from 'react-native-gesture-handler'
// import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
// import Geolocation from 'react-native-geolocation-service';
// const BusinessAdr = ({ navigation }) => {

//   const [address, setAddress] = useState("")
//   const [pincode, setPincode] = useState("")
//   const [city, setCity] = useState("")
//   const [state, setState] = useState("")
//   const [isValidAddress, setIsValidAddress] = useState(false)
//   const [isValidPincode, setIsValidPincode] = useState(false)
//   const [isValidCity, setIsValidCity] = useState(false)
//   const [isValidState, setIsValidState] = useState(false)
//   const [
//     currentLongitude,
//     setCurrentLongitude
//   ] = useState();
//   const [
//     currentLatitude,
//     setCurrentLatitude
//   ] = useState();
//   const [
//     locationStatus,
//     setLocationStatus
//   ] = useState();
//   const [latitude, setLatitude] = useState(0)
//   const [longitude, setLongitude] = useState(0)



//   useEffect(() => {

//     Geolocation.getCurrentPosition(
//       //Will give you the current location
//       (position) => {
//         setLocationStatus('You are Here');

//         //getting the Longitude from the location json
//         const currentLongitude =
//           JSON.stringify(position.coords.longitude);

//         //getting the Latitude from the location json
//         const currentLatitude =
//           JSON.stringify(position.coords.latitude);

//         setCurrentLongitude(currentLongitude);
//         console.log(currentLongitude)

//         setCurrentLatitude(currentLatitude);
//         console.log(currentLatitude)

//       },
//       (error) => {
//         setLocationStatus(error.message);
//       },
//       {
//         enableHighAccuracy: false,
//         timeout: 30000,
//         maximumAge: 1000
//       },
//     );

//   }, []);
//   console.log(currentLatitude, currentLongitude)




//   const addressChange = (text) => {
//     if (text.length != 0) {
//       setAddress(text),
//         setIsValidAddress(true)
//     }
//     else {
//       setAddress(text),
//         setIsValidAddress(false)
//     }
//   }
//   const pincodeChange = (text) => {
//     if (text.length != 0) {
//       setPincode(text),
//         setIsValidPincode(true)
//     }
//     else {
//       setPincode(text),
//         setIsValidPincode(false)
//     }
//   }
//   const cityChange = (text) => {
//     if (text.length != 0) {
//       setCity(text),
//         setIsValidCity(true)
//     }
//     else {
//       setCity(text),
//         setIsValidCity(false)
//     }
//   }
//   const stateChange = (text) => {
//     if (text.length != 0) {
//       setState(text),
//         setIsValidState(true)
//     }
//     else {
//       setState(text),
//         setIsValidState(false)
//     }
//   }
//   return (
//     <View style={{ backgroundColor: '#fff' }}>
//       <Header name={'arrow-back'} text={'Business Registration'} nameIcon={'alert'} type={'SECONDARY'} onPress={() => navigation.goBack()} />
//       <View style={styles.root}>
//         <View style={styles.topNav}>
//           <View style={{ width: "36%", alignItems: 'flex-end', paddingRight: 5 }}><CustomActiveLine text={'Basic'} /></View>
//           <View style={{ width: "36%" }}><CustomActiveLine text={'Business'} /></View>
//           <View style={{ width: "39%" }}><CustomActiveLine text={'Address'} /></View>
//         </View>
//         <ScrollView showsVerticalScrollIndicator={false} style={{ flexGrow: 1, }}>
//           <View style={{ paddingVertical: 35 }}>
//             <CustomHeaderText text={"Business Information"} />
//           </View>
//           <View>
//             <View>
//               {isValidAddress ?
//                 <View style={{ alignItems: 'flex-start', paddingHorizontal: 4, position: 'absolute', zIndex: 1, top: 4 }}>
//                   <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal: 4 }}>Address</Text>
//                 </View>
//                 :
//                 null
//               }
//               <CustomInput placeholder={'Address (House Number, Street, Area)*'} value={address} onChangeText={(text) => addressChange(text)} />
//             </View>
//             <View>
//               {isValidPincode ?
//                 <View style={{ alignItems: 'flex-start', paddingHorizontal: 4, position: 'absolute', zIndex: 1, top: 4 }}>
//                   <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal: 4 }}>Pincode</Text>
//                 </View>
//                 :
//                 null
//               }
//               <CustomInput placeholder={'Pincode*'} value={pincode} onChangeText={(text) => pincodeChange(text)} />
//             </View>
//             <View>
//               {isValidCity ?
//                 <View style={{ alignItems: 'flex-start', paddingHorizontal: 4, position: 'absolute', zIndex: 1, top: 4 }}>
//                   <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal: 4 }}>City</Text>
//                 </View>
//                 :
//                 null
//               }
//               <CustomInput placeholder={'City*'} value={city} onChangeText={(text) => cityChange(text)} />
//             </View>
//             <View>
//               {isValidState ?
//                 <View style={{ alignItems: 'flex-start', paddingHorizontal: 4, position: 'absolute', zIndex: 1, top: 4 }}>
//                   <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal: 4 }}>State</Text>
//                 </View>
//                 :
//                 null
//               }
//               <CustomInput placeholder={'State*'} value={state} onChangeText={(text) => stateChange(text)} />
//             </View>
//           </View>
//           <View>
//             <Text style={{ color: '#000' }}>Pin your Location</Text>
//             <View style={styles.container}>
//             {/* <View style={{flex: 1}}> */}
//         <MapView
//           provider={PROVIDER_GOOGLE}
//           // customMapStyle={mapStyle}
//           // style={{flex: 1}}
//        style={styles.map}

//           region={{
//             SetLatitude: setCurrentLatitude,
//             SetLongitude: setCurrentLongitude,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           }}>
//           {/* <Marker
//           // draggable
//             coordinate={{
//               latitude: setCurrentLatitude,
//               longitude: setCurrentLongitude,
//             }}></Marker> */}
//         </MapView>
//       {/* </View> */}
//               {/* <MapView
//        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
//        style={styles.map}
//        region={{
//          latitude: setCurrentLatitude,//37.78825,
//          longitude: setCurrentLongitude,//-122.4324,
//          latitudeDelta: 0.015,
//          longitudeDelta: 0.0121,
//        }}
//      >
//        <Marker
//       // key={index}
//       coordinate={{
//         latitude: 37.78825,
//         longitude: -122.4324,}}
//       title={"My Location"}
//       // description={marker.description}
//     />
//      </MapView>  */}

//               {/* <MapView
//       style={styles.map}
//       initialRegion={region}
//       showsUserLocation={true}
//       followUserLocation={true}
//       // onRegionChangeComplete runs when the user stops dragging MapView
//       onRegionChangeComplete={(region) => setRegion(region)} 
//      />  */}
//               {/* <MapView.Marker coordinate={region} /> */}



//             </View>
//           </View>
//           {/* <Pressable onPress={getOneTimeLocation}><Text>Locate</Text></Pressable>
//           <Text>{currentLongitude}</Text>
//   <Text>{currentLatitude}</Text> */}
//           <View style={{ flexDirection: 'row', justifyContent: "space-around", paddingVertical: 75, marginBottom: 150 }}>
//             <View style={{ flex: 1 }}>
//               <CustomBtn text={'Back'} type={'SECONDARY'} onPress={() => navigation.goBack()} />
//             </View>
//             <View style={{ flex: 1 }}>
//               <CustomBtn text={'Proceed'} type={'PRIMARY'} onPress={() => navigation.navigate('FurtherAss')} />
//             </View>
//           </View>
//         </ScrollView>

//       </View>
//     </View>
//   )
// }

// export default Checking

// const styles = StyleSheet.create({
//   root: {
//     padding: 20,
//   },
//   topNav: {
//     flexDirection: "row",
//     // paddingBottom: 10,
//     justifyContent: 'center',
//   },
//   container: {
//     // ...StyleSheet.absoluteFillObject,
//     height: 400,
//     width: 400,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
// })