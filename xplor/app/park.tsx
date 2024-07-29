import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native'
import React from 'react';
import { router } from 'expo-router';
import VisitingPage from '@/components/VisitingPage';

const nightgallery = () => {
    return (
    <View style={style.container}>
        <VisitingPage
        image={"https://lh3.googleusercontent.com/p/AF1QipMNdJ00-fERPdBm2IZg-DbUVAMvWSmGGoK9S_ym=s1360-w1360-h1020"}
        />
        <Image style={style.grad} source={require("@/assets/images/parkgradient.png")}/>
        <View style={style.fullslide}/>
        <View style={style.halfslide}/>
        <View style={style.halfslide2}/>
        <Text style={style.text}> Lower Angel's Point </Text>
          <Text style={style.description}> Lower Angel's Point in Elysian Park offers breathtaking views of the LA skyline and surrounding landscape. It's a popular spot for locals and tourists seeking panoramic vistas and a tranquil escape, featuring hiking trails and picnic areas for outdoor recreation and relaxation.
          </Text>
        <Pressable style={style.addresscontainer}>
          <Text style={style.address}> 2050 Imperial Street, Los Angeles, CA, 90021</Text>
        </Pressable>
    </View>
    )
}

export default nightgallery

const style = StyleSheet.create ({
    container: {
        flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
    },

    description: {
        color: "#FFFFFF",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "normal",
        marginLeft: 19,
        marginTop: 716,
        position: "absolute",
    },

    text: {
        marginTop: 632,
        marginLeft: 20,
        width: 382,
        height: 85,
        color: "#FFFFFF",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 24,
        position: "absolute",
    },
    bookmark: {
        width: 43,
        height: 43,
        marginTop: 625,
        marginLeft: 371,
        position: "absolute",
    },

    address: {
        color: "#000000",
        fontSize: 15,
        fontStyle: "normal",
        fontWeight: "bold",
        marginTop: 0,
        marginLeft: 0,
        // width: 282,
        textAlign: "center"
    },
    
    addresscontainer: {
      width: 394,
      height: 58,
      // alignItems: "center",
      // justifyContent: "center",
      marginTop: 839,
      marginLeft: 18,
      borderRadius: 12,
      backgroundColor: "rgba(120, 122, 41, 0.82)",
      justifyContent: "center",
      position: "absolute",
    },

    grad: {
        width: 452,
        height: 309,
        marginTop: 639,
        position: "absolute",
      },

      fullslide: {
        backgroundColor: "#FFFFFF",
        width: 57,
        height: 6,
        borderRadius: 100,
        marginTop: 84,
        marginLeft: 117,
        position: "absolute"
      },
      
      halfslide: {
        backgroundColor: "rgba(255, 255, 255, 0.50)",
        width: 57,
        height: 6,
        borderRadius: 100,
        marginTop: 84,
        marginLeft: 186,
        position: "absolute"
      },
      
      halfslide2: {
        backgroundColor: "rgba(255, 255, 255, 0.50)",
        width: 57,
        height: 6,
        borderRadius: 100,
        marginTop: 84,
        marginLeft: 255,
        position: "absolute"
      },
})