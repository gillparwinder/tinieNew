import React from 'react';
import { View, ViewProps, Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image';
import createStyles from './style';
export const SLIDER_WIDTH = Dimensions.get('window').width;
export const SLIDER_HEIGHT = Dimensions.get('window').height;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const CarouselCardItem = ({ item, index }) => {
    const styles = createStyles();
    return (
        <View style={styles.container} key={index}>
            <View style={styles.imageContainer}>
                <FastImage
                    style={styles.image}
                    source={{
                        uri: item.imgUrl,
                        priority: FastImage.priority.high,
                    }}
                    resizeMode={'cover'}
                />
            </View>
        </View>
    );
};

export default CarouselCardItem;