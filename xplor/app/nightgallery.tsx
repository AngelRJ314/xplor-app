import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native'
import React from 'react';
import { router } from 'expo-router';
import VisitingPage from '@/components/VisitingPage';

const nightgallery = () => {
    return (
    <View style={style.container}>
        <VisitingPage 
        image={"https://dza2a2ql7zktf.cloudfront.net/binaries-cdn/dqzqcuqf9/image/fetch/q_auto,dpr_auto,c_fill,f_auto,w_auto/https://d2u3kfwd92fzu7.cloudfront.net/asset/cms/Art_Basel_OVN_Los_Angeles_April_Bey_Gavlak1.jpg"}
        />
        <Image style={style.grad} source={require("@/assets/images/nightgradient.png")}/> 
        <Image style={style.stars} source={require("@/assets/images/nightstars.png")}/>
        <Text style={style.text}> Night gallery </Text>
        <Text style={style.description}> Night Gallery in downtown LA is a contemporary art hotspot in the arts district, known for its sleek space and diverse exhibitions. It features innovative works in painting and sculpture, attracting art enthusiasts and collectors with its dynamic atmosphere and regular events.
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
        marginLeft: 20,
        marginTop: 732,
        position: "absolute",
    },

    text: {
        // marginTop: 632,
        // marginLeft: 20,
        width: 382,
        height: 85,
        marginLeft: 19,
        marginTop: 648,
        color: "#FFFFFF",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 24,
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
      justifyContent: "center",
      marginTop: 831,
      marginLeft: 18,
      borderRadius: 12,
      backgroundColor: "#14959B",
      position: "absolute",
    },
    bookmark: {
        width: 43,
        height: 43,
        marginTop: 625,
        marginLeft: 371,
        position: "absolute",
    },
    stars: {
        width: 156,
        height: 26,
        marginLeft: 20,
        marginTop: 695,
        position: "absolute",
    },

    grad: {
        width: 452,
        height: 309,
        marginTop: 639,
        position: "absolute",
    },
})