import { StyleSheet, Text, View, ScrollView, Pressable, } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import nightgallery from './nightgallery'
import { Image } from 'expo-image'
import HomeCatButtons from '@/components/HomeCatButtons'
import Profile from './profile'
const Foodhome = () => {

  const onPressFunctionHome = () => {
    router.replace("/home")
  };

  const onPressFunctionHistory = () => {
    router.replace("/history")
  };

  const onPressFunctionArt = () => {
    router.replace("/art")
  };

  const onPressFunctionBakery = () => {
    router.push("/bakery")
  };

  const onPressFunctionProfile = () => {
    router.push("/profile")
  };

  const onPressFunctionPlus = () => {
    router.push("/contribution")
  };


    return (
      <View style={style.container}>
        <View>
        <Pressable onPress={onPressFunctionBakery} style={style.bakerycontainer}>
            <Image source={"https://lh3.googleusercontent.com/p/AF1QipM_wqdl2lUk_ggFqC_gRC34MFj2ufYIPKeUuANH=s1360-w1360-h1020"} style={style.bakery}/>
            </Pressable>
            <Pressable style={style.foodcontainer}>
            <Image source={require("@/assets/images/food1.png")} style={style.food}/>
            </Pressable>
            <Image source={require("@/assets/images/food2.png")} style={style.food2}/>
            <Image source={require("@/assets/images/food3.jpg")} style={style.food3}/>
        </View>
      </View>
    )
}

export default Foodhome

const style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#000000",
    },  

    text: {
        color: "#FFFFFF"
    },

    plus:{
      width: 43,
      height: 43,
      marginTop: 70.5,
      marginLeft: 332,
      position: "absolute",
    },
  
    profile: {
      width: 43,
      height: 43,
      // marginTop: 70.5,
      // marginLeft: 380,
      position: "absolute",
    },
  
    profilec: {
      width: 43,
      height: 43,
      marginTop: 70.5,
      marginLeft: 380,
      position: "absolute",
    },

    bakery: {
      width: 179,
      height: 308,
      borderRadius: 8,
    },
    bakerycontainer: {
      width: 179,
      height: 308,
      marginTop: 6,
      borderRadius: 8,
    },

    food2: {
      width: 181,
      height: 308,
      marginTop: 320,
      marginLeft: 249,
      borderRadius: 8,
      position: "absolute"
    },

    food3: {
      width: 244,
      height: 308,
      marginTop: 6,
      // marginLeft: 249,
      borderRadius: 8,
    },

    food: {
      width: 244,
      height: 308,
      position: "absolute"
    },

    foodcontainer: {
      width: 244,
      height: 308,
      marginLeft: 184,
      marginTop: 6,
      position: "absolute"
    },

    homeimage: {
        marginTop: 52,
        marginLeft: 6,
        width: 80,
        height: 80,
        position: "absolute",
      },

    logocontainer: {
        backgroundColor: "white",
        width: 430,
        height: 210,
        borderRadius: 45,
        // position: "absolute",
      },

    bcontainer: {
        width: 70,
        height: 37,
        marginTop: 143,
        marginLeft: 10,
        backgroundColor: "#000000",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute"
    },
    
    fcontainer: {
      width: 89,
      height: 37,
      marginTop: 143,
      marginLeft: 96,
      backgroundColor: "#000000",
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      position: "absolute"
    },
    
    hcontainer: {
      width: 109,
      height: 37,
      marginTop: 143,
      marginLeft: 201,
      backgroundColor: "#000000",
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      position: "absolute"
    },
    
    acontainer: {
      width: 75,
      height: 37,
      marginTop: 143,
      marginLeft: 326,
      backgroundColor: "#000000",
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      position: "absolute"
    },
    
    pcontainer: {
      width: 96,
      height: 37,
      marginTop: 143,
      marginLeft: 417,
      backgroundColor: "#000000",
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      position: "absolute"
    },

    xplor: {
        marginTop: 79.5,
        marginLeft: 89,
        fontSize: 21.048,
        fontStyle: "normal",
        fontWeight: "bold",
        position: "absolute",
      },
})

