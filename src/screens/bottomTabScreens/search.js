import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Chip from "../../components/chip";
import DetailCard from "../../components/detailCard";
import Schedule from "../../components/schedule";

const Search = () => {
    return (
        <View style={styles.container}>
            <DetailCard />
            <Schedule />
            <Chip content={
                <>
                    <Text style={{ fontSize: 10, fontWeight: '400' }}>SUN</Text>
                    <Text style={{ marginTop: 10, fontSize: 12, fontWeight: '600' }}>1</Text>
                </>} />
            <Chip content={<><Text style={{ fontSize: 12, fontWeight: '400' }}>9:00 AM</Text></>} />

        </View>
    );

};

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'yellow',
        },
    }
);

export default Search;