
// import {View, Text, PermissionsAndroid, Alert, Platform} from 'react-native';
// import Geolocation from 'react-native-geolocation-service';
// import MapView, {PROVIDER_GOOGLE, Marker, Polyline} from 'react-native-maps';
// import { Pressable, StyleSheet,   } from 'react-native'
// import React, { useState, useEffect } from 'react'
// import Header from '../../../components/header'
// import CustomInput from '../../../components/CustomInput/CustomInput'
// import CustomBtn from '../../../components/CustomBtn/CustomBtn'
// import CustomActiveLine from '../../../components/CustomActiveLine/CustomActiveLine'
// import CustomHeaderText from '../../../components/CustomHeaderText/CustomHeaderText'
// import { ScrollView } from 'react-native-gesture-handler'

// export default class BusinessAdr extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       latitude: 0,
//       longitude: 0,
//       coordinates: [],
//       address:'',
//       pincode:'',
//       city:'',
//       state:'',
//       isValidAddress: false,
//       isValidPincode: false,
//       isValidCity: false,
//       isValidState:false      
//     };
//   }

//   async componentDidMount() {
//     Geolocation.getCurrentPosition(
//       position => {
//         this.setState({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//           coordinates: this.state.coordinates.concat({
//             latitude: position.coords.latitude,
//             longitude: position.coords.longitude,
//           }),
//         });
//       },
//       error => {
//         Alert.alert(error.message.toString());
//       },
//       {
//         showLocationDialog: true,
//         enableHighAccuracy: true,
//         timeout: 20000,
//         maximumAge: 0,
//       },
//     );

//     Geolocation.watchPosition(
//       position => {
//         this.setState({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//           coordinates: this.state.coordinates.concat({
//             latitude: position.coords.latitude,
//             longitude: position.coords.longitude,
//           }),
//         });
//       },
//       error => {
//         console.log(error);
//       },
//       {
//         showLocationDialog: true,
//         enableHighAccuracy: true,
//         timeout: 20000,
//         maximumAge: 0,
//         distanceFilter: 0,
//       },
//     );
//   }

//   addressChange = (text) => {
//     if (text.length != 0) {
//       this.state.address(text),
//         this.state.isValidAddress(true)
//     }
//     else {
//       this.state.address(text),
//       this.state.isValidAddress(false)
//     }
//   }
//   render() {
//     return (
//       <View style={{ backgroundColor: '#fff' }}>
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
//         <MapView
//           provider={PROVIDER_GOOGLE}
//           // customMapStyle={mapStyle}
//           style={{flex: 1}}
//           region={{
//             latitude: this.state.latitude,
//             longitude: this.state.longitude,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           }}>
//           <Marker
//           // draggable
//             coordinate={{
//               latitude: this.state.latitude,
//               longitude: this.state.longitude,
//             }}></Marker>
//         </MapView>
//       {/* </View> */}
//       </View>
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
//     );
//   }
// }
// const styles = StyleSheet.create({
//   root: {
//     padding: 20,
//   },
//   topNav: {
//     flexDirection: "row",
//     paddingBottom: 10,
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