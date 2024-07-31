import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native'
import React from 'react';
import { router } from 'expo-router';
import VisitingPage from '@/components/VisitingPage';
import * as Linking from 'expo-linking';

const onPressFunctionLink = () => {
  Linking.openURL('https://www.google.com/maps/place/Los+Angeles+Flower+District/@34.038457,-118.2609413,15z/data=!3m1!4b1!4m6!3m5!1s0x80c2c6337bfc2ea1:0x320faca468602c2a!8m2!3d34.0384396!4d-118.2506416!16s%2Fm%2F04yc6jy?entry=ttu');
}

const flower = () => {
    return (
    <View style={style.container}>
        <VisitingPage 
        image={"https://lh3.googleusercontent.com/p/AF1QipPte9Zh6dLy7_ZhVxPlPveeOJ80VhPnq9FsCH_A=s1360-w1360-h1020"}
        />
        <Image style={style.grad} source={require("@/assets/images/flowersgradient.png")}/> 
        <Text style={style.text}> Los Angeles Flower District </Text>
        <Text style={style.description}> The Los Angeles Flower District in downtown LA is a lively hub known for its vibrant atmosphere and diverse array of flowers, plants, and floral supplies. Spanning several blocks, it features both wholesale and retail vendors offering fresh-cut flowers, exotic plants, and decorative accessories. Popular among florists, event planners, and flower enthusiasts, it's renowned for its extensive selection and competitive prices, making it a must-visit for floral arrangements and gardening.
        </Text>
        <Pressable onPress={onPressFunctionLink} style={style.addresscontainer}>
          <Text style={style.address}> 846 San Julian St, Los Angeles, CA 90014 </Text>
        </Pressable>
    </View>
    )
}

export default flower

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
        marginLeft: 20,
        marginTop: 663,
        position: "absolute",
    },

    text: {
        // marginTop: 632,
        // marginLeft: 20,
        width: 382,
        height: 85,
        marginLeft: 19,
        marginTop: 579,
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
        color: "#FFFFFF",
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
      marginTop: 831,
      marginLeft: 18,
      borderRadius: 12,
      backgroundColor: "rgba(210, 25, 25, 0.74)",
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