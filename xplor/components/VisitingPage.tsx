import { Text, View, StyleSheet, Button, Pressable, Alert, StyleProp, ViewStyle, TextStyle} from "react-native";
import React from "react";
import { Image } from 'expo-image'
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryButton from "@/components/CategoryButton";
import { useState } from "react";
import { FA6Style } from "@expo/vector-icons/build/FontAwesome6";
import { router } from "expo-router";


interface VisitingPage {
    title?: string;
    image?: string; 
    text?: string;
    address?: string;
    star?: string;
    style?: StyleProp<ViewStyle>;
    descriptionStyle?: StyleProp<TextStyle>;
    textStyle?: StyleProp<TextStyle>
    bookmarkStyle?: StyleProp<ViewStyle>
}

const VisitingPage = (props: VisitingPage) => {

    const onPressFunctionHomeArrow = () => {
        router.back()
    };

    const onPressFunctionBookmark = () => {
        router.replace("/profile")
    };

    return (
        <View style={style.container}>
            <Image style={style.image} source={props.image}/>
            {/* <Pressable style={style.homearrow} onPress={onPressFunctionHomeArrow}>
                <Image source={require('@/assets/images/homearrow.png')} style={style.homearrow}/>
            </Pressable>
            <Pressable onPress={onPressFunctionBookmark}> 
            <Image source={require('@/assets/images/bookmark.png')} style={style.bookmark}/>
            </Pressable> */}
            <Text  style={props?.textStyle}> {props.title} </Text>
            <Text style={props?.descriptionStyle}> {props.text} </Text>
            <View>
                <Text style={style.addy}> {props.address} </Text>
            </View>
        </View>
    )
}

export default VisitingPage

const style = StyleSheet.create({
    container: {
        
    },

    bookmark: {
        width: 43,
        height: 43,
        marginTop: 625,
        marginLeft: 371,
        position: "absolute",
    },

    homearrow: {
        width: 43,
        height: 43,
        marginTop: 40,
        marginBottom: 516,
        marginLeft: 15,
        borderWidth: 0,
        position: "absolute",
    },

    textStyle: {
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

    image: {
        width: 430,
        height: 932,
        position: "absolute",
    },

    description: {
        color: "#FFFFFF",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "bold",
        position: "absolute",
    },

    stars: {
        marginTop: 686,
        marginLeft: 21,
        marginHorizontal: 2.5,
        position: "absolute",
    },

    // addresscontainer: {
    //     width: 394,
    //     height: 58,
    //     marginTop: 839,
    //     marginLeft: 18,
    //     borderWidth: 0,
    //     borderRadius: 12,
    //     backgroundColor: "#14959B",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     position: "absolute"
    // },

    addy: {
        color: "black",
        fontSize: 15,
        fontStyle: "normal",
        fontWeight: "bold",
        position: "absolute",
    },
})