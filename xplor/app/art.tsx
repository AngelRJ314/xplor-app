import { StyleSheet, Text, View, ScrollView, Pressable, } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import nightgallery from './nightgallery'
import { Image } from 'expo-image'
import HomeCatButtons from '@/components/HomeCatButtons'
import Profile from './profile'
const ArtHome = () => {

    const onPressFunctionFood = () => {
        router.push("/food")
      };
    
      const onPressFunctionHistory = () => {
        router.push("/history")
      };
    
      const onPressFunctionHome = () => {
        router.push("/home")
      };

     const onPressFunctionNight1 = () => {
        router.push("/nightgallery")
      };

      const onPressFunctionArt1 = () => {
        router.push("")
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
            <Pressable onPress={onPressFunctionNight1} style={style.nightgallerycontainer}>
            <Image source={"https://dza2a2ql7zktf.cloudfront.net/binaries-cdn/dqzqcuqf9/image/fetch/q_auto,dpr_auto,c_fill,f_auto,w_auto/https://d2u3kfwd92fzu7.cloudfront.net/asset/cms/Art_Basel_OVN_Los_Angeles_April_Bey_Gavlak1.jpg"} style={style.nightgallery}/>
            </Pressable>
            <Pressable style={style.artcontainer}>
            <Image source={require("@/assets/images/art1.png")} style={style.art}/>
            </Pressable>
            <Pressable style={style.art2container}>
            <Image source={require("@/assets/images/art2.png")} style={style.art2}/>
            </Pressable>
            <Pressable style={style.art3container}>
            <Image source={require("@/assets/images/art3.png")} style={style.art3}/>
            </Pressable>
            </View>
            </View>
    )
}

export default ArtHome

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

    nightgallery: {
        // marginTop: 5,
        width: 181,
        height: 285,
        borderWidth: 0,
        borderRadius: 8,
        // position: "absolute",
      },
    
      nightgallerycontainer: {
        marginTop: 6,
        width: 181,
        height: 285,
        borderWidth: 0,
        borderRadius: 8,
        // position: "absolute",
      },

      art: {
        // marginTop: 5,
        width: 244,
        height: 285,
        borderWidth: 0,
        borderRadius: 8,
        // position: "absolute",
      },
    
      artcontainer: {
        marginTop: 6,
        // marginLeft: 186,
        width: 244,
        height: 285,
        borderWidth: 0,
        borderRadius: 8,
        // position: "absolute",
      },

      art2: {
        width: 244,
        height: 285,
        borderWidth: 0,
        borderRadius: 8,
        position: "absolute",
      },
    
      art2container: {
        marginTop: 6,
        marginLeft: 186,
        width: 244,
        height: 285,
        borderWidth: 0,
        borderRadius: 8,
        position: "absolute",
      },

      art3: {
        width: 244,
        height: 285,
        borderWidth: 0,
        borderRadius: 8,
        position: "absolute",
      },
    
      art3container: {
        marginTop: 297,
        marginLeft: 249,
        width: 181,
        height: 288,
        borderWidth: 0,
        borderRadius: 8,
        position: "absolute",
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