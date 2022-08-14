import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, ScrollView, Text, StyleSheet, Image, Button, Alert, StatusBar, SafeAreaView, Platform } from 'react-native';

// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from "../welcome-screen";
import DetailsScreen from "../detailScreen";
import Home from "../bottomTabScreens/home";
import Orders from "../bottomTabScreens/order";
import Search from "../bottomTabScreens/search";
import Wishlist from "../bottomTabScreens/wishlist";
import Account from "../bottomTabScreens/account";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/AntDesign';
import AppStatusBar from '../statusBarScreen';


// const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();


const Dashboard = () => {
    return (
        <>
        <SafeAreaView style={styles.topSafeArea} />
        <SafeAreaView style={styles.bottomSafeArea}> 
            {
            (Platform.OS === 'ios') ? <StatusBar barStyle="dark-content" backgroundColor={"transparent"} translucent={true} /> : <AppStatusBar backgroundColor={"transparent"} translucent={true} barStyle="dark-content" />
            }

        <Tab.Navigator screenOptions={{

            tabBarActiveTintColor: '#34EBEB',
            tabBarItemStyle: { marginVertical: 15 },
            tabBarHideOnKeyboard: true,
            initialRouteName:"Home",
            tabBarStyle: {
                backgroundColor:'#ffffff',
                height: 80,
                borderTopLeftRadius: 10,
                position: 'absolute',
                bottom: 0,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
            },
        }}

            backBehavior={'history'}
        >
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ color }) => <Icon name='home' color={color} size={25} />,
                headerShown: false,
                tabBarLabel: 'Home',
            }}

            />
            <Tab.Screen name="Orders" component={Orders} options={{
                tabBarIcon: ({ color }) => <Icon name='inbox' color={color} size={25} />,
                tabBarLabel: 'Orders'
            }} />
            <Tab.Screen name="Search" component={Search} options={{
                tabBarIcon: ({ color }) => <Icon name='search1' color={color} size={25} />,
                tabBarLabel: 'Search',
                headerShown: false
            }} />
            <Tab.Screen name="Wishlist" component={Wishlist} options={{
                tabBarIcon: ({ color }) => <Icon name='gift' color={color} size={25} />,
                tabBarLabel: 'Wishlist',
                headerShown: false
            }} />
            <Tab.Screen name="Account" component={Account} options={{
                tabBarIcon: ({ color }) => <Icon name='user' color={color} size={25} />,
                tabBarLabel: 'Account',
                headerShown: false
            }} />
        </Tab.Navigator>
            </SafeAreaView>
        </>

    );
};

const styles = StyleSheet.create({
    topSafeArea: {
        flex: 0,
        backgroundColor:'#ffffff'
    },
    bottomSafeArea: {
        flex: 1,
        backgroundColor:'#ffffff'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#ffffff'
    },
});

export default Dashboard;