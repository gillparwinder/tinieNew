import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, StyleSheet, Text, Alert } from 'react-native';
import MapView from "react-native-maps";
import Geolocation from "react-native-geolocation-service";

const Map = () => {
    const [coOrds, setCords] = useState({
        latitude: 0,
        longitude: 0,
        coordinates: [],
    });
    useEffect(() => {
        Geolocation.getCurrentPosition(
            position => {
                setCords({
                    latitude: position.coords.latitude,  
                    longitude: position.coords.longitude,
                    coordinates: this.coordinates.concat({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    })
                });
            },
            // map 
            error => {
                Alert.alert(error.message.toString());
            },
            {
                showLocationDialog: true,
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 0
            }
        );
    }, []);
    return (
        <View style={styles.container}>
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: coOrds.latitude,
                    longitude: coOrds.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}></MapView>
                
        </View>
    );

};

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        },
    }
);

export default Map;