import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import CarouselCard from "../../components/carouselCard";

const Orders = () => {
    return (
        <CarouselCard />
    );

};

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'green',
        },
    }
);

export default Orders;