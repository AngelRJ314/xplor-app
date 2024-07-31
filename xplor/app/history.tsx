import { StyleSheet, Text, View, ScrollView, Pressable, } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import nightgallery from './nightgallery'
import { Image } from 'expo-image'
import HomeCatButtons from '@/components/HomeCatButtons'
import Profile from './profile'
const HistoryHome = () => {

    const onPressFunctionFood = () => {
        router.replace("/food")
      };
    
      const onPressFunctionHome = () => {
        router.replace("/home")
      };
    
      const onPressFunctionArt = () => {
        router.replace("/art")
      };

      const onPressFunctionPlaza = () => {
        router.push("/plaza")
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
                <Pressable onPress={onPressFunctionPlaza} style={style.plazacontainer}>
                    <Image source={"https://live.staticflickr.com/3545/3636659323_b5e1a226d4_b.jpg"} style={style.plaza}/>
                </Pressable>
                <Image source={require("@/assets/images/history1.png")} style={style.history1}/>
                <Image source={require("@/assets/images/history2.png")} style={style.history2}/>
                <Image source={require("@/assets/images/history3.png")} style={style.history3}/>
            </View>
            </View>
    )
}

export default HistoryHome

const style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#000000",
    },  

    text: {
        color: "#FFFFFF"
    },

    homeimage: {
        marginTop: 52,
        marginLeft: 6,
        width: 80,
        height: 80,
        position: "absolute",
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

    logocontainer: {
        backgroundColor: "white",
        width: 430,
        height: 210,
        borderRadius: 45,
        // position: "absolute",
      },

      history1: {
        width: 135,
        height: 288,
        marginTop: 6,
        marginLeft: 295,
        position: "absolute",
      },

      history2: {
        width: 244,
        height: 308,
        marginTop: 300,
        // position: "absolute",
      },

      history3: {
        width: 181,
        height: 308,
        marginTop: 300,
        marginLeft: 249,
        position: "absolute",
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

      plaza: {
        marginTop: 0,
        width: 288,
        height: 288,
        borderRadius: 8,
        position: "absolute",
      },
      
      plazacontainer: {
        marginTop: 6,
        width: 288,
        height: 288,
        borderRadius: 8,
        position: "absolute",
      },
})