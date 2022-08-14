import { StyleSheet, Text, View,Dimensions, FlatList } from 'react-native'
import React, {useState} from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import Header from '../../../components/header'
import CustomImgBtn from '../../../components/CustomImgBtn/CustomImgBtn'
import CustomHeaderText from '../../../components/CustomHeaderText/CustomHeaderText'
import CustomDropdown from '../../../components/CustomDropdown/CustomDropdown'

const status = [
  {id:1, sName: 'All Orders ' },
  {id:2, sName:  'In progress Order' },
  {id:3, sName: 'Upcoming Orders ' },
  {id:4, sName: 'Order Completed ' },
  {id:5, sName: 'Appointment Cancelled ' },
  {id:6, sName: '03:00 PM to 04:00 PM' },
  {id:7, sName: '04:00 PM to 05:00 PM' },
  {id:8, sName: '05:00 PM to 06:00 PM' },
] 
// const cards =[
//   {id:1, slot:'Mid day 01:00 PM to 03:00 PM', service:'Hair Services'  , customer: 'Meena', crewPref:'Sr.Stylist'}
// ]  

const BookingInfoMainMenu = () => {
  const [select, setSelected] = useState('')

  const onSelect = (item) =>{
      setSelected(item)
  }

  // const deviceWidth = Dimensions.get('window').width
  return (
    <View>
        <Header/>
      <View style={styles.mainHeadCont}>
        <View style={{paddingVertical:5}}>
      <CustomHeaderText text={'Booking Information'} type={'TERTIARY'} />
      </View>
         <View>
              <View style={styles.mainHeadContRow}>
              <CustomImgBtn source={require('../../../assets/images/imgrowfirst.png')}  text={'ALL'} onPress={() => console.log('btn pressed')}/>
              <CustomImgBtn source={require('../../../assets/images/imgrowsecond.png')}  text={'ON-GOING'} onPress={() => console.log('btn pressed')}/>
              <CustomImgBtn source={require('../../../assets/images/imgrowthird.png')}  text={'PENDING'} onPress={() => console.log('btn pressed')}/>
              </View>
              <View style={styles.mainHeadContRow}>
              <CustomImgBtn source={require('../../../assets/images/imgrowfirst.png')}  text={'CONFIRMED'} onPress={() => console.log('btn pressed')}/>
              <CustomImgBtn source={require('../../../assets/images/imgrowsecond.png')}  text={'COMPLETED'} onPress={() => console.log('btn pressed')}/>
              <CustomImgBtn source={require('../../../assets/images/imgrowthird.png')}  text={'CANCELLED'} onPress={() => console.log('btn pressed')}/>
              </View>

        </View>
        </View>
      
        <View style={{paddingVertical:10, paddingHorizontal:20}}>
          <View></View>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{width:'48%'}}>
          <CustomDropdown 
        value={select}
        data={status}
        onSelect={onSelect}/>
        </View>
        <View style={{width:'48%'}}>
            <CustomDropdown 
        value={select}
        data={status}
        onSelect={onSelect}/>
        </View>
            
          </View>
          <View style={{zIndex:0}}>
        <CustomDropdown 
        value={select}
        data={status}
        onSelect={onSelect}/>
        </View>
        </View>

        {/* flatlist work */}
        {/* <View style={styles.container}>  
                <FlatList  
                    data={cards}  
                    renderItem={({item}) =>  
                        <View style={styles.item}  >
                              <Text>{item.slot}</Text></View>}  
                    ItemSeparatorComponent={this.renderSeparator}  
                />  
            </View>  
        */}
    </View>
  )
}

export default BookingInfoMainMenu

const styles = StyleSheet.create({
    mainHeadCont:{
        height:92, 
        backgroundColor:"#065987",
        shadowOpacity: 0.55,
        shadowRadius: 7,
        elevation: 7,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        alignItems:"center"
    },
    mainHeadContRow:{
      flexDirection:'row',
      justifyContent:'space-around',
      paddingVertical:3
    },


   
      
})