import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, Button } from "react-native";

import Carousel, { Pagination } from 'react-native-snap-carousel';
import CarouselCardItem, {
    SLIDER_WIDTH,
    SLIDER_HEIGHT,
} from "./carouselCardItem";
import createStyles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import LinearGradient from "react-native-linear-gradient";
import { Shadow } from 'react-native-shadow-2';
import TinieButton from "../button";


const { width, height } = Dimensions.get('window');

const CarouselCards = () => {
    const styles = createStyles();
    const [index, setIndex] = React.useState(0);
    const isCarousel = React.useRef(null);

    const data = [
        {
            imgUrl: 'https://wallpapercave.com/wp/wp2670858.jpg',
        },
        {
            imgUrl: 'https://cdn.statusqueen.com/desktopwallpaper/thumbnail/teddy-bear-Hd_4k_desktop_wallpaper_photos-545.jpg',
        },
        {
            imgUrl: 'https://media.istockphoto.com/photos/taj-mahal-mausoleum-in-agra-picture-id1146517111?k=20&m=1146517111&s=612x612&w=0&h=vHWfu6TE0R5rG6DJkV42Jxr49aEsLN0ML-ihvtim8kk=',
        },
    ];


    return (
        <View>
            <Carousel
                layout="default"
                layoutCardOffset={0}
                ref={isCarousel}
                data={data}
                renderItem={CarouselCardItem}
                sliderWidth={SLIDER_WIDTH - 13}
                itemWidth={SLIDER_WIDTH - 13}
                itemHeight={SLIDER_HEIGHT / 2.5}
                autoplay={true}
                autoplayDelay={3000}
                autoplayInterval={2000}
                onSnapToItem={i => setIndex(i)}
                inactiveSlideScale={1}
                useScrollView={true}
            />
            <View style={styles.pagination}>
                <Pagination
                    containerStyle={styles.paginationStyle}
                    dotsLength={data.length}
                    activeDotIndex={index}
                    carouselRef={isCarousel}
                    dotStyle={styles.dotstyle}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                    tappableDots={true}
                />
            </View>
        </View>
    );
};


const CarouselCard = ({ key, onButtonPress }) => {
    return (
        <View key={key} style={styles.container}>
            <View style={styles.carousel}>
                <CarouselCards />
            </View>
            <View style={styles.details}>
                <View style={styles.title}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                            DENSITY UNISEX SALON AND SPA
                        </Text>
                        <Text style={{ fontSize: 10, fontWeight: '500', marginTop: 2 }}>
                            HSR Layout
                        </Text>
                    </View>
                    <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Ionicons name="location-outline" size={20} />
                        <Text style={{ fontSize: 10, fontWeight: '600' }}>
                            3.2 Kms
                        </Text>
                    </View>
                    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center', }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                            <Text style={{ fontSize: 24, paddingRight: 5, color: '#1394CC' }}>
                                4.1
                            </Text>
                            <Ionicons name="star" size={20} color={'orange'} />
                        </View>
                        <Text style={{ fontSize: 10, textDecorationLine: 'underline' }}>
                            0133 reviews
                        </Text>
                    </View>
                </View>
                {/* <LinearGradient start={{ x: 0.30, y: 1 }}
                    end={{ x: 1, y: 0.50 }} colors={['#F2EBAF', '#ffffff']} style={styles.subTitle}>
                    <View style={{ flex: 1.25 }}>
                        <Text style={{ fontSize: 12, fontWeight: '500' }}>
                            • MEN - HAIRCUT + HAIR WASH + HAIR SETTING AND STYLING
                        </Text>
                        <Text style={{ fontSize: 12, fontWeight: '700', marginTop: 7, }}>
                            • 4700/-
                        </Text>
                    </View>
                    <View style={{ flex: 0.5, }}>
                        <Text style={{ paddingTop: 5, paddingLeft: 15, fontSize: 10, fontWeight: '600' }}>
                            • 45 mins
                        </Text>
                    </View>
                    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center', }}>

                        <TinieButton
                            title="BOOK"
                            style={{
                                alignSelf: 'flex-end',
                                backgroundColor: '#FF506B',
                                width: 80,
                                height: 40,
                            }}
                            onButtonPress={onButtonPress}
                            textStyle={{ color: '#ffffff' }}
                        />

                    </View>
                </LinearGradient> */}
            </View>

        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        height: height / 2.6,
        borderRadius: 10,
        width: width - 15,
        margin: 8,
    },
    carousel: {
        flex: 3.5,
    },
    details: {
        flex: 1,
        borderColor: 'grey',
        borderLeftWidth: 1.5,
        borderRightWidth: 1.5,
        borderBottomWidth: 1.5,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 8,
    },
    subTitle: {
        width: width - 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 10,
        paddingRight: 5,
        borderColor: 'grey',
    },
});

export default CarouselCard;