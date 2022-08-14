import { Pressable, StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'

const CustomImgBtn = ({ onPress, source, text }) => {
  return (
    <View style={styles.viewCont}>
      <Pressable onPress={onPress}>
        <ImageBackground imageStyle={{ opacity: 0.25 }} style={styles.img} resizeMode='cover' source={source}>
        <View style={styles.text}>
          <Text style={styles.textStyle}>{text}</Text>
        </View>
      </ImageBackground>
      </Pressable>
    </View>
  )
}

export default CustomImgBtn

const styles = StyleSheet.create({
  text: {
    height: 20,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    color: '#fff',
    fontSize: 9,
    fontWeight: '600',
    opacity: 1,
    alignItems: 'center'
  },
  img: {
    backgroundColor: "#000",
    borderRadius: 50,
    shadowOpacity: 0.5,
        shadowRadius: 7,
        elevation: 7,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
  },
  viewCont: {
    width: "31%",
    borderRadius: 50,
    
  }
})