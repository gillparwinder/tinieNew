
import React from 'react'
import { View, Text, PermissionsAndroid, Alert, Platform, StyleSheet } from 'react-native'
import Geolocation from 'react-native-geolocation-service'
// import Geolocation from '@react-native-community/geolocation'
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from 'react-native-maps'
import Header from '../../../components/header'
import CustomInput from '../../../components/CustomInput/CustomInput'
import CustomBtn from '../../../components/CustomBtn/CustomBtn'
import CustomActiveLine from '../../../components/CustomActiveLine/CustomActiveLine'
import CustomHeaderText from '../../../components/CustomHeaderText/CustomHeaderText'
import { ScrollView } from 'react-native-gesture-handler'
import { ALERT_TYPE, Dialog, Root, Toast } from 'react-native-alert-notification';
import { Loader } from '../../../components/loader'


export default class BusinessAdr extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      coordinates: [],
      address: 'zdfgdg',
      pincode: '34423',
      city: 'sfgfdd',
      state: 'zsdfsdgfs',
      isValidAddress: false,
      isValidPincode: false,
      isValidCity: false,
      isValidState: false,
      loading: false,
    };
  }

  async componentDidMount() {
    this.requestLocationPermission()

  }
  requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      this.getWatchPosition()
      this.getPosition()
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Access Required',
            message: 'This App needs to Access your location',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          //To Check, If Permission is granted
          this.getWatchPosition()
          this.getPosition()
        } else {
          alert("Location Permission denied. Please enable location permission in mobile settings");
        }
      } catch (err) {
        console.warn(err);
        alert(err)
      }
    }
  };
  getPosition = () => {
    Geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          coordinates: this.state.coordinates.concat({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }),
        });
      },
      error => {
        Alert.alert(error.message.toString());
      },
      {
        showLocationDialog: true,
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0,
      },
    );
  }
  getWatchPosition = () => {

    Geolocation.watchPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          coordinates: this.state.coordinates.concat({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }),
        });
      },
      error => {
        console.log(error);
      },
      {
        showLocationDialog: true,
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0,
        distanceFilter: 0,
      },
    );
  }
  onNext = () => {
    this.setState({ loading: true })
    if (this.state.address == "") {
      Toast.show({
        onPress: () => { Toast.hide() },
        type: ALERT_TYPE.WARNING,
        title: 'WARNING',
        textBody: 'Address is required',
      })
      this.setState({ loading: false })
    } else if (this.state.pincode == "") {
      Toast.show({
        onPress: () => { Toast.hide() },
        type: ALERT_TYPE.WARNING,
        title: 'WARNING',
        textBody: 'Pincode is required',
      })
      this.setState({ loading: false })
    } else if (this.state.city == "") {
      Toast.show({
        onPress: () => { Toast.hide() },
        type: ALERT_TYPE.WARNING,
        title: 'WARNING',
        textBody: 'City is required',
      })
      this.setState({ loading: false })
    } else if (this.state.state == "") {
      Toast.show({
        onPress: () => { Toast.hide() },
        type: ALERT_TYPE.WARNING,
        title: 'WARNING',
        textBody: 'State is required',
      })
      this.setState({ loading: false })
    } else {
      const businessData = {
        ...this.props?.route?.params?.businessData,
        address: this.state.address,
        pincode: this.state.pincode,
        city: this.state.city,
        state: this.state.state,
        latitude: this.state.latitude,
        longitude: this.state.longitude,
      }
      // console.log("businessData", businessData);
      this.setState({ loading: false })
      this.props.navigation.navigate('FurtherAss', { businessData })
    }
  }
  addressChange = (text) => {
    if (text.length != 0) {
      this.setState({ address: text, isValidAddress: true })
    }
    else {
      this.setState({ address: text, isValidAddress: false })
    }
  }
  pincodeChange = (text) => {
    if (text.length != 0) {
      this.setState({ pincode: text, isValidPincode: true })
    }
    else {
      this.setState({ pincode: text, isValidPincode: false })
    }
  }
  cityChange = (text) => {
    if (text.length != 0) {
      this.setState({ city: text, isValidCity: true })
    }
    else {
      this.setState({ city: text, isValidCity: false })
    }
  }
  stateChange = (text) => {
    if (text.length != 0) {
      this.setState({ state: text, isValidState: true })
    }
    else {
      this.setState({ state: text, isValidState: false })
    }
  }

  render() {
    const { goBack } = this.props.navigation;
    return (
      <Root>
        <View style={{ backgroundColor: '#fff' }}>
          <Loader loading={this.state.loading} />
          <Header name={'arrow-back'} text={'Business Registration'} nameIcon={'alert'} type={'SECONDARY'} onPress={() => goBack()} />
          <View style={styles.root}>
            <View style={styles.topNav}>
              <View style={{ width: "36%", alignItems: 'flex-end', paddingRight: 5 }}><CustomActiveLine text={'Basic'} /></View>
              <View style={{ width: "36%" }}><CustomActiveLine text={'Business'} /></View>
              <View style={{ width: "39%" }}><CustomActiveLine text={'Address'} /></View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{ flexGrow: 1, }}>
              <View style={{ paddingVertical: 35 }}>
                <CustomHeaderText text={"Business Information"} />
              </View>
              <View>
                <View>
                  {this.state.isValidAddress ?
                    <View style={{ alignItems: 'flex-start', paddingHorizontal: 4, position: 'absolute', zIndex: 1, top: 4 }}>
                      <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal: 4 }}>Address</Text>
                    </View>
                    :
                    null
                  }
                  <CustomInput placeholder={'Address (House Number, Street, Area)*'} value={this.state.address} onChangeText={(text) => this.addressChange(text)} />
                </View>
                <View>
                  {this.state.isValidPincode ?
                    <View style={{ alignItems: 'flex-start', paddingHorizontal: 4, position: 'absolute', zIndex: 1, top: 4 }}>
                      <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal: 4 }}>Pincode</Text>
                    </View>
                    :
                    null
                  }
                  <CustomInput placeholder={'Pincode*'} value={this.state.pincode} onChangeText={(text) => pincodeChange(text)} />
                </View>
                <View>
                  {this.state.isValidCity ?
                    <View style={{ alignItems: 'flex-start', paddingHorizontal: 4, position: 'absolute', zIndex: 1, top: 4 }}>
                      <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal: 4 }}>City</Text>
                    </View>
                    :
                    null
                  }
                  <CustomInput placeholder={'City*'} value={this.state.city} onChangeText={(text) => cityChange(text)} />
                </View>
                <View>
                  {this.state.isValidState ?
                    <View style={{ alignItems: 'flex-start', paddingHorizontal: 4, position: 'absolute', zIndex: 1, top: 4 }}>
                      <Text style={{ backgroundColor: '#fff', marginLeft: 16, paddingHorizontal: 4 }}>State</Text>
                    </View>
                    :
                    null
                  }
                  <CustomInput placeholder={'State*'} value={this.state.state} onChangeText={(text) => stateChange(text)} />
                </View>
              </View>
              <View>
                <Text style={{ color: '#000' }}>Pin your Location</Text>
                <View style={styles.container}>
                  <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    region={{
                      latitude: this.state.latitude,
                      longitude: this.state.longitude,
                      latitudeDelta: 0.0922,
                      longitudeDelta: 0.0421,
                    }}>
                    <Marker
                      // draggable
                      coordinate={{
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                      }}></Marker>
                  </MapView>
                  {/* </View> */}
                </View>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: "space-around", paddingVertical: 75, marginBottom: 150 }}>
                <View style={{ flex: 1 }}>
                  <CustomBtn text={'Back'} type={'SECONDARY'} onPress={() => goBack()} />
                </View>
                <View style={{ flex: 1 }}>
                  <CustomBtn text={'Proceed'} type={'PRIMARY'} onPress={this.onNext} />
                </View>
              </View>
            </ScrollView>

          </View>
        </View>
      </Root>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    padding: 20,
  },
  topNav: {
    flexDirection: "row",
    paddingBottom: 10,
    justifyContent: 'center',
  },
  container: {
    // ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})