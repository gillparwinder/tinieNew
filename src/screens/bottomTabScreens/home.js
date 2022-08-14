import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    TextInput,
    SectionList,
    Dimensions,
    FlatList,
    ActivityIndicator,
    PermissionsAndroid
} from 'react-native'
// import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'

import CategoryTile from "../../components/categoryTile";
import HighLights from "../../components/highlights";
import Styles from "./home-style";
import Feather from 'react-native-vector-icons/Feather';
import { Shadow } from 'react-native-shadow-2';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Geolocation from 'react-native-geolocation-service';
navigator.geolocation = require('@react-native-community/geolocation')
import AntDesignIcons from 'react-native-vector-icons/AntDesign'
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import Geocoder from 'react-native-geocoding'
import { PLACES_API } from "@env"


const Home = props => {
    const { routes, navigation } = props;
    const styles = Styles();
    const [isLoading, setisLoading] = useState(true)
    const [long, setLong] = useState(0)
    const [lat, setLat] = useState(0)
    const [address, setAddress] = useState('')



    useEffect(() => {

        // const requestPermissions = async () => {
        //     request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION, {
        //         title: 'Tinie',
        //         message: 'Grant Tinie Access to Location',
        //         buttonNeutral: "Ask Me Later",
        //         buttonNegative: "Cancel",0
        //         buttonPositive: "OK"
        //     }).then((result) => {
        //         if (result == RESULTS.GRANTED) {
        //             setPermission(true)
        //             console.log(result)
        //         } else {
        //             console.log(result)
        //         }
        //     })

        // }

        const requestPermissions = async () => {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        title: 'Tinie',
                        message: 'Grant Tinie Access to Location',
                        buttonNeutral: "Ask Me Later",
                        buttonNegative: "Cancel",
                        buttonPositive: "OK"
                    }
                )

                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    Geolocation.getCurrentPosition(
                        (position) => {
                            setLong(position.coords.longitude)
                            setLat(position.coords.latitude)
                            // console.log(geo);

                        },
                        (error) => {
                            // See error code charts below.
                            console.log(error.code, error.message);
                            setisLoading(false)
                        },
                        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }

                    );

                    Geocoder.init(PLACES_API, { language: "en" })

                    setTimeout(() => {
                        // Geocoder.init(PLACES_API, { language: "en" })

                        Geocoder.from(lat, long)
                            .then(json => {
                                const address =
                                    json.results[0].address_components[1].long_name + ", " +
                                    json.results[0].address_components[2].long_name + ", " +
                                    json.results[0].address_components[3].long_name + ", " +
                                    json.results[0].address_components[4].long_name + ", " +
                                    json.results[0].address_components[5].long_name + ", " +
                                    json.results[0].address_components[6].long_name + ". "
                                    ;
                                console.log(address)
                                setAddress(address)
                                setisLoading(false)
                            })
                            .catch(error => console.log({long, lat}));
                        setisLoading(false)
                    }, 500);

                } 

            } catch (err) {
                console.log(err)
            }
        }

        requestPermissions()


        // setTimeout(() => {
        //     Geolocation.getCurrentPosition(
        //         (position) => {
        //             setGeo({
        //                 longitude: position.coords.longitude,
        //                 latitude: position.coords.latitude
        //             })
        //             setisLoading(false)
        //             // console.log(geo);

        //         },
        //         (error) => {
        //             // See error code charts below.
        //             console.log(error.code, error.message);
        //             setisLoading(false)
        //         },
        //         { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        //     );


        //     Geocoder.init(PLACES_API, { language: "en" })

        //     Geocoder.from(geo)
        //         .then(json => {
        //             var addressComponent =
        //                 json.results[0].address_components[1].long_name + ", " +
        //                 json.results[0].address_components[2].long_name + ", " +
        //                 json.results[0].address_components[3].long_name + ", " +
        //                 json.results[0].address_components[4].long_name + ", " +
        //                 json.results[0].address_components[5].long_name + ", " +
        //                 json.results[0].address_components[6].long_name + ". "
        //                 ;
        //             console.log(addressComponent);
        //         })
        //         .catch(error => console.warn(error));
        // }, 3000);

    })


        const highLightData = {
            header:false,
            data: [
                {
                    title: 'FASHION',
                    image: 'https://media.istockphoto.com/photos/trendy-lady-adjusting-hair-picture-id1169378200?k=20&m=1169378200&s=612x612&w=0&h=8Ao5aaeygCABOz0AApKsZhjiHxpS7QNsB92rk_DjGW4=',
                },
                {
                    title: 'BEAUTY',
                    image: 'https://st.depositphotos.com/1491329/3571/i/950/depositphotos_35710919-stock-photo-beauty-girl-portrait-with-colorful.jpg',
                },
                {
                    title: 'DANCE',
                    image: 'https://media.istockphoto.com/photos/stylish-man-and-woman-dancing-hiphop-in-bright-clothes-on-gradient-picture-id1267332085?k=20&m=1267332085&s=170667a&w=0&h=3UVNv97THH65ylSldOA1Z8SMX2J5CJTGOSM93kyUfTw=',
                },
                {
                    title: 'YOGA',
                    image: 'https://c.ndtvimg.com//yoga_625x300_1529482160763.jpg',
                },
                {
                    title: 'PARTY',
                    image: 'https://img.pixers.pics/pho_wat(s3:700/FO/63/43/30/78/700_FO63433078_9e4147c921e1921db9c68e7e33d4ddab.jpg,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/posters-party-people-background.jpg.jpg',
                },
                {
                    title: 'FOOD',
                    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80',
                },
                {
                    title: 'TEMPLES',
                    image: 'https://assets.seniority.in/media/ktpl_blog/Temples_-_main_image.jpg',
                }
            ]
        };

        const personalCareData = {
            header:true,
            title:'personal care',
            data: [
                {
                    title: 'SPAS',
                    image: 'https://www.visittnt.com/blog/wp-content/uploads/2018/01/ananda-in-the-himalayas.jpg'
                },
                {
                    title: 'SALOONS',
                    image: 'https://thumbs.dreamstime.com/b/hair-salon-situation-21768339.jpg',
                },
                {
                    title: 'BEAUTY',
                    image: 'https://thehhub.com/wp-content/uploads/2018/11/cristian-newman-153712-unsplash-1152x608.jpg',
                },
                {
                    title: 'AYURVEDA CLINIC',
                    image: 'https://media.istockphoto.com/photos/indian-ayurvedic-dietary-supplement-called-chyawanprash-is-a-cooked-picture-id697860312?k=20&m=697860312&s=612x612&w=0&h=7O5GBwjBZggBFOLtFcN8ClOceHBycij-FD4lMSrgf4E=',
                },
                {
                    title: 'GYMS',
                    image: 'https://expertphotography.b-cdn.net/wp-content/uploads/2020/02/fitness-photography-man-exercising-in-a-gym.jpg',
                },
            ]
        };
        const homeCareData = {
            header:true,
            title:'home care',
            data: [
                {
                    title: 'PLUMBER',
                    image: 'https://img1.exportersindia.com/product_images/bc-full/2019/12/6857532/plumbing-contractor-services-1577681601-5227079.jpeg'
                },
                {
                    title: 'ELECTRICIAN',
                    image: 'https://attwoodelectrical.com.au/wp-content/uploads/2020/08/electrician.jpg',
                },
                {
                    title: 'CARPENTRY',
                    image: 'https://5.imimg.com/data5/OX/XW/OO/SELLER-69473062/carpenter-services-500x500.png',
                },
                {
                    title: 'CLEANING',
                    image: 'https://www.safetyandhealthmagazine.com/ext/resources/images/2020/09-sep/disinfecting.jpg?1646857325',
                },
                {
                    title: 'KITCHEN',
                    image: 'https://i.ytimg.com/vi/w9mYApEXt8Y/sddefault.jpg',
                },
            ]
        };

        const fitnessData = {
            header:true,
            title:'fitness & wellbeing',
            data: [
                {
                    title: 'GYMS',
                    image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/gym.jpeg?j_v8lQnfrnMtdN9WyMo0YUmren26jn46&size=770:433'
                },
                {
                    title: 'YOGA',
                    image: 'https://thumbs.dreamstime.com/z/yoga-class-group-people-sitting-doing-yoga-pose-healthy-lifestyle-yoga-class-group-people-relaxing-doing-yoga-pose-167301003.jpg',
                },
                {
                    title: 'PILATES',
                    image: 'https://stylecaster.com/wp-content/uploads/2020/04/best-pilates-reformer-amazon.jpg',
                },
                {
                    title: 'TRAINERS',
                    image: 'https://www.ihrsa.org/uploads/Articles/Column-Width/staffing_precor-consultation_column.jpg',
                },
                {
                    title: 'MEDITATION',
                    image: 'https://images.healthshots.com/healthshots/en/uploads/2021/09/24154327/meditation.jpg',
                },
            ]
        };

        const sectionData = []
        sectionData.push(highLightData)
        sectionData.push(personalCareData)
        sectionData.push(homeCareData)
        sectionData.push(fitnessData)

        const renderHighlights = ({ item }) => {
            return (
                <HighLights heading={item.title} source={{ uri: item.image }} />
            );

        };

        const renderCategoryTile = ({ item }) => {
            return (
                <CategoryTile heading={item.title} source={{ uri: item.image }} navigation={navigation} />
            );
        };

        // const tabBarheight = useBottomTabBarHeight();

        if (isLoading) {
            return (
                <View style={styles.preloader}>
                    <ActivityIndicator size="large" color="#34EBEB" />
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <SectionList
                    stickySectionHeadersEnabled={false}
                    sections={sectionData}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps='handled'
                    contentContainerStyle={{ paddingBottom:80,paddingTop:10 }}
                    renderSectionHeader={({ section }) => (
                        <>
                            
                            {section.header ? (
                                <>
                                    <View style={styles.scrollContainer}>
                                        <View style={styles.flex}>
                                            <Text style={styles.header}>{section.title}</Text>
                                        </View>
                                    </View>
                                <FlatList
                                    horizontal
                                    data={section.data}
                                    keyExtractor={(item, index) => item + index}
                                    renderItem={renderCategoryTile}
                                    showsHorizontalScrollIndicator={false}
                                    showsVerticalScrollIndicator={false}
                                />
                                </>
                            ) : (
                                <>

                                <GooglePlacesAutocomplete
                                    placeholder={address}
                                    minLength={2}
                                    listViewDisplayed='auto'
                                    renderDescription={row => row.description || row.formatted_address || row.name}
                                    onPress={(data, details = null) => {
                                        // 'details' is provided when fetchDetails = true
                                        console.log(data, details);
                                    }}
                                    query={{
                                        key: PLACES_API,
                                        language: 'en',
                                        types: 'address',
                                    }}
                                    currentLocation={true}
                                    currentLocationLabel='Current Location'
                                    nearbyPlacesAPI='GooglePlacesSearch'
                                    enablePoweredByContainer={false}
                                    // getDefaultValue={() => ''}
                                    fetchDetails={true}
                                    // nearbyPlacesAPI='GooglePlacesSearch'
                                    textInputProps={{
                                        placeholderTextColor:'#777777',
                                        returnKeyType:'search',
                                    }}
                                    styles={{
                                        container: {
                                            color:'#ffffff'
                                        },
                                        textInput: {
                                            color:'#000000',
                                            backgroundColor:'#e3e3e3',
                                            marginHorizontal:10
                                            // borderColor:'#e3e3e3',
                                            // borderWidth:1
                                        },
                                        predefinedPlacesDescription: {
                                            color: '#555555',
                                        },
                                        description:{
                                            color:'#555555'
                                        }
                                    }}
                                />
                                
                                        <FlatList
                                            horizontal
                                            data={section.data}
                                            keyExtractor={(item, index) => item + index}
                                            renderItem={renderHighlights}
                                            showsHorizontalScrollIndicator={false}
                                            showsVerticalScrollIndicator={false}
                                        />
                                
                                </>
                            )}
                            
                        </>
                    )}
                    renderItem={({ item, section }) => {
                        if (section.header) {
                            return null;
                        }
                        return null;
                    }}
                />
            </View>
        );
}

export default Home

const { width } = Dimensions.get('screen')
// const ITEM_WIDTH = width * 0.9;
// const ITEM_HEIGHT = ITEM_WIDTH * 0.9;
