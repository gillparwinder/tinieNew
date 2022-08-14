import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from "react-native";
import moment from "moment";

const Schedule = () => {
    const data = [
        {
            day: 'SUNDAY',
            status: 'CLOSED'
        },
        {
            day: 'MONDAY',
            status: '09:00 AM - 08:00 PM'
        },
        {
            day: 'TUESDAY',
            status: '09:00 AM - 08:00 PM'
        },
        {
            day: 'WEDNESDAY',
            status: '09:00 AM - 08:00 PM'
        },
        {
            day: 'THURSDAY',
            status: '09:00 AM - 08:00 PM'
        },
        {
            day: 'FRIDAY',
            status: '09:00 AM - 08:00 PM'
        },
        {
            day: 'SATURDAY',
            status: 'CLOSED'
        },
    ];

    const today = moment().format('dddd').toUpperCase();
    
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={{ flex: 2, backgroundColor: '#4BDFDF', alignItems: 'center', justifyContent: 'center', borderRadius: 4 }}>
                    <Text style={styles.chipText}>OPERATING HOURS</Text>
                </View>
                <View style={{ flex: 1, marginLeft: 10, backgroundColor: '#4BDFDF', alignItems: 'center', justifyContent: 'center', borderRadius: 4 }}>
                    <Text style={styles.chipText}>PHOTOS</Text>
                </View>
            </View>
            <View style={styles.subContainer}>
                <View style={{ flex: 1, }}>
                    {
                        data.map(data => {
                            return (
                                <View style={{ flexDirection: 'row' }} key={data.day} >
                                    <Text style={[styles.dateText, { color: data.day === today && '#1814DF' }]}>{data.day}</Text>
                                    <Text style={[styles.dateText, { color: data.status === 'CLOSED' ? 'red' : data.day === today && '#1814DF' }]}>{data.status}</Text>
                                </View>
                            );
                        })
                    }
                </View>
                <Image
                    style={styles.tinyLogo}
                    source={{ uri: 'https://thumbs.dreamstime.com/b/hair-salon-situation-21768339.jpg' }}
                />
            </View>

        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        backgroundColor: '#ffffff',
        margin: 15,
        padding: 10,
        width: '95%',
    },
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    chipText: {
        fontWeight: '600',
        fontSize: 12,
        marginVertical: 8,

    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dateText: {
        flex: 1,
        fontSize: 10,
        fontWeight: '400',
        lineHeight: 12,
        marginVertical: 5,
    },
    tinyLogo: {
        marginVertical: 5,
        width: 115,
        height: 120,
        borderWidth: 1.75,
        borderColor: '#C0C0C0',
    },
});

export default Schedule;