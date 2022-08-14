import React from "react";
import { View, TouchableOpacity, TextInput, Text, FlatList, ScrollView } from 'react-native';
import Styles from "./category-screen-style";
import CarouselCard from "../../components/carouselCard";

const CategoryScreen = props => {
    const { navigation } = props;
    const styles = Styles();
    const item = [1, 2, 3];
    return (
        <ScrollView style={styles.container}>
            <View>
                <CarouselCard onButtonPress={() => { navigation.goBack() }} />
            </View>
            <View style={{ marginTop: 60 }}>
                <CarouselCard />
            </View>
            <View style={{ marginTop: 60 }}>
                <CarouselCard />
            </View>

        </ScrollView>
    );
};

export default CategoryScreen;