// import React from "react";
// import { View, TouchableOpacity, TextInput, Text, FlatList, ScrollView } from 'react-native';
// import CategoryTile from "../../components/categoryTile";
// import HighLights from "../../components/highlights";
// import Styles from "./home-style";
// import Feather from 'react-native-vector-icons/Feather';
// import { Shadow } from 'react-native-shadow-2';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// navigator.geolocation = require('@react-native-community/geolocation');


// const Home = props => {

//     const { routes, navigation } = props;

//     const styles = Styles();

//     const highLightData = [
//         {
//             title: 'FASHION',
//             image: 'https://media.istockphoto.com/photos/trendy-lady-adjusting-hair-picture-id1169378200?k=20&m=1169378200&s=612x612&w=0&h=8Ao5aaeygCABOz0AApKsZhjiHxpS7QNsB92rk_DjGW4='
//         },
//         {
//             title: 'BEAUTY',
//             image: 'https://st.depositphotos.com/1491329/3571/i/950/depositphotos_35710919-stock-photo-beauty-girl-portrait-with-colorful.jpg',
//         },
//         {
//             title: 'DANCE',
//             image: 'https://media.istockphoto.com/photos/stylish-man-and-woman-dancing-hiphop-in-bright-clothes-on-gradient-picture-id1267332085?k=20&m=1267332085&s=170667a&w=0&h=3UVNv97THH65ylSldOA1Z8SMX2J5CJTGOSM93kyUfTw=',
//         },
//         {
//             title: 'YOGA',
//             image: 'https://c.ndtvimg.com//yoga_625x300_1529482160763.jpg',
//         },
//         {
//             title: 'PARTY',
//             image: 'https://img.pixers.pics/pho_wat(s3:700/FO/63/43/30/78/700_FO63433078_9e4147c921e1921db9c68e7e33d4ddab.jpg,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/posters-party-people-background.jpg.jpg',
//         },
//         {
//             title: 'FOOD',
//             image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80',
//         },
//         {
//             title: 'TEMPLES',
//             image: 'https://assets.seniority.in/media/ktpl_blog/Temples_-_main_image.jpg',
//         }
//     ];

//     const personalCareData = [
//         {
//             title: 'SPAS',
//             image: 'https://www.visittnt.com/blog/wp-content/uploads/2018/01/ananda-in-the-himalayas.jpg'
//         },
//         {
//             title: 'SALOONS',
//             image: 'https://thumbs.dreamstime.com/b/hair-salon-situation-21768339.jpg',
//         },
//         {
//             title: 'BEAUTY',
//             image: 'https://thehhub.com/wp-content/uploads/2018/11/cristian-newman-153712-unsplash-1152x608.jpg',
//         },
//         {
//             title: 'AYURVEDA CLINIC',
//             image: 'https://media.istockphoto.com/photos/indian-ayurvedic-dietary-supplement-called-chyawanprash-is-a-cooked-picture-id697860312?k=20&m=697860312&s=612x612&w=0&h=7O5GBwjBZggBFOLtFcN8ClOceHBycij-FD4lMSrgf4E=',
//         },
//         {
//             title: 'GYMS',
//             image: 'https://expertphotography.b-cdn.net/wp-content/uploads/2020/02/fitness-photography-man-exercising-in-a-gym.jpg',
//         },
//     ];
//     const homeCareData = [
//         {
//             title: 'PLUMBER',
//             image: 'https://img1.exportersindia.com/product_images/bc-full/2019/12/6857532/plumbing-contractor-services-1577681601-5227079.jpeg'
//         },
//         {
//             title: 'ELECTRICIAN',
//             image: 'https://attwoodelectrical.com.au/wp-content/uploads/2020/08/electrician.jpg',
//         },
//         {
//             title: 'CARPENTRY',
//             image: 'https://5.imimg.com/data5/OX/XW/OO/SELLER-69473062/carpenter-services-500x500.png',
//         },
//         {
//             title: 'CLEANING',
//             image: 'https://www.safetyandhealthmagazine.com/ext/resources/images/2020/09-sep/disinfecting.jpg?1646857325',
//         },
//         {
//             title: 'KITCHEN',
//             image: 'https://i.ytimg.com/vi/w9mYApEXt8Y/sddefault.jpg',
//         },
//     ];

//     const fitnessData = [
//         {
//             title: 'GYMS',
//             image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/gym.jpeg?j_v8lQnfrnMtdN9WyMo0YUmren26jn46&size=770:433'
//         },
//         {
//             title: 'YOGA',
//             image: 'https://thumbs.dreamstime.com/z/yoga-class-group-people-sitting-doing-yoga-pose-healthy-lifestyle-yoga-class-group-people-relaxing-doing-yoga-pose-167301003.jpg',
//         },
//         {
//             title: 'PILATES',
//             image: 'https://stylecaster.com/wp-content/uploads/2020/04/best-pilates-reformer-amazon.jpg',
//         },
//         {
//             title: 'TRAINERS',
//             image: 'https://www.ihrsa.org/uploads/Articles/Column-Width/staffing_precor-consultation_column.jpg',
//         },
//         {
//             title: 'MEDITATION',
//             image: 'https://images.healthshots.com/healthshots/en/uploads/2021/09/24154327/meditation.jpg',
//         },
//     ];

//     const renderHighlights = ({ item }) => {
//         return (
//             <HighLights heading={item.title} source={{ uri: item.image }} />
//         );

//     };

//     const renderCategoryTile = ({ item }) => {
//         return (
//             <CategoryTile heading={item.title} source={{ uri: item.image }} navigation={navigation} />
//         );
//     };

//     const homePlace = {
//         description: 'Home',
//         geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
//     };
//     const workPlace = {
//         description: 'Work',
//         geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
//     };


//     return (
//         <>
//             {/* <GooglePlacesAutocomplete
//                 placeholder='Set Your Location'
//                 onPress={(data, details = null) => {
//                     // 'details' is provided when fetchDetails = true
//                     console.log(data, details);
//                 }}
//                 query={{
//                     key: '',
//                     language: 'en',
//                 }}
//                 predefinedPlaces={[homePlace, workPlace]}
//                 styles={{
//                     // textInputContainer: {
//                     //     backgroundColor: 'grey',
//                     // },
//                     textInput: {
//                         height: 38,
//                         color: '#5d5d5d',
//                         fontSize: 16,
//                     },
//                     predefinedPlacesDescription: {
//                         color: '#1faadb',
//                     },
//                 }}
//             /> */}
//         <ScrollView style={styles.container}>
//                 {/* <TextInput
//                     placeholder="Set Your Location" placeholderTextColor="#5d5d5d"
//                     style={{ flex: 1, textAlign: 'center',fontSize:24 }}
//                 /> */}
//                 <GooglePlacesAutocomplete
//                     placeholder='Set Your Location'
//                     onPress={(data, details = null) => {
//                         // 'details' is provided when fetchDetails = true
//                         console.log(data, details);
//                     }}
//                     query={{
//                         key: '',
//                         language: 'en',
//                     }}
//                     // predefinedPlaces={[homePlace, workPlace]}
//                     currentLocation={true}
//                     currentLocationLabel='Current location'
//                     fetchDetails={true}
//                     styles={{
//                         textInputContainer: {
//                             // backgroundColor: 'grey',
//                             marginTop:10
//                         },
//                         textInput: {
//                             height: 38,
//                             color: '#5d5d5d',
//                             fontSize: 16,
//                             backgroundColor:'#000000',
//                         },
                        
//                         predefinedPlacesDescription: {
//                             color: '#1faadb',
//                         },
//                     }}
//                 />
//             <FlatList
//                 data={highLightData}
//                 renderItem={renderHighlights}
//                 keyExtractor={(item, index) => item.title}
//                 horizontal={true}
//                 showsHorizontalScrollIndicator={false}
//             />
//             <Shadow viewStyle={{ borderWidth: 1, height: 50, borderRadius: 10, borderColor: '#A9A9A9', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
//                 <TextInput
//                     placeholder="looking for something? search here"
//                     style={{ flex: 1, textAlign: 'center' }}
//                 />
//                 <Feather name="search" size={24} style={{ paddingTop: 5, paddingHorizontal: 5 }} color='#A9A9A9' />
//             </Shadow>

//             <Text style={{ textDecorationLine: 'underline', marginLeft: 5, marginVertical: 10, }}>Personal Care</Text>
//             <FlatList
//                 data={personalCareData}
//                 renderItem={renderCategoryTile}
//                 keyExtractor={(item, index) => item.title}
//                 horizontal={true}
//                 showsHorizontalScrollIndicator={false}
//             />
//             <Text style={{ textDecorationLine: 'underline', marginLeft: 5, marginVertical: 10, }}>Home Care</Text>
//             <FlatList
//                 data={homeCareData}
//                 renderItem={renderCategoryTile}
//                 keyExtractor={(item, index) => item.title}
//                 horizontal={true}
//                 showsHorizontalScrollIndicator={false}
//             />
//             <Text style={{ textDecorationLine: 'underline', marginLeft: 5, marginVertical: 10, }}>Fitness and Wellbeing</Text>
//             <FlatList
//                 data={fitnessData}
//                 renderItem={renderCategoryTile}
//                 keyExtractor={(item, index) => item.title}
//                 horizontal={true}
//                 showsHorizontalScrollIndicator={false}
//             />
//             <Text style={{ textDecorationLine: 'underline', marginLeft: 5, marginVertical: 10, }}>Pet Care</Text>
//         </ScrollView>
//         </>
//     );

// };


// export default Home;