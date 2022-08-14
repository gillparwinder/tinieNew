import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const DetailCard = () => {
    return (<View style={styles.container}>
        <View style={styles.mainContainer} >
            <View style={{ flex: 1 }}>
                <Text style={styles.detailsText}>WOMEN - haircut + service 2 + service 3 +
                    hair wash + hair setting + and the list can go
                    + another service</Text>
                <Text style={styles.subDetailsText}>
                    service description goes here (if applicable) to improve the aesthetics of the service header.
                    products used, services included etc.,
                </Text>
            </View>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.tinyLogo}
                    source={{ uri: 'https://thumbs.dreamstime.com/b/hair-salon-situation-21768339.jpg' }}
                />
                <TouchableOpacity style={styles.imageWrap} onPress={() => { }} >
                    <Text style={{ paddingVertical: 5, textAlign: "center" }}>ADD</Text>
                </TouchableOpacity>
            </View >
        </View>
        <View style={{
            borderStyle: 'dashed',
            borderWidth: 0.5,
            borderRadius: 1,
            marginBottom: 5,
        }}>
        </View>
        <View style={styles.subContainer}>
            <Text style={{ fontWeight: '400', fontSize: 10 }}>• 45 mins</Text>
            <Text style={{ fontWeight: '500', marginLeft: 15, fontSize: 10 }}>• 1800/-</Text>
            <View
                style={{
                    position: 'absolute',
                    transform: [{ rotate: '160deg' }],
                    top: 7,
                    left: 70,
                    width: 33,
                    height: 1,
                    borderBottomWidth: 1,
                }} />
            <Text style={{ marginLeft: 15, fontWeight: '700', fontSize: 12 }}>• 1300/-</Text>
        </View>
    </View >);
};

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        backgroundColor: '#ffffff',
        margin: 15,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        width: '95%',
    },
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    detailsText: {
        fontSize: 12,
        fontWeight: '700',
        lineHeight: 14,
    },
    subDetailsText: {
        marginVertical: 8,
        fontSize: 10,
        fontWeight: '300',
        lineHeight: 12,
    },
    //image style
    imageContainer: {
        width: 80,
        height: 110,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1.25,
        borderColor: 'black',
        marginLeft: 10,
    },
    tinyLogo: {
        width: 80,
        height: 110,
        borderWidth: 1.75,
        borderColor: '#C0C0C0',
    },
    imageWrap: {
        position: 'absolute', bottom: -0, backgroundColor: '#FC5E5E', alignItems: 'center',
        justifyContent: 'center',
        width: 80,
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',

    },
}

);

export default DetailCard;