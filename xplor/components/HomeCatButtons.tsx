import {
    Text,
    View,
    StyleSheet,
    Pressable,
    Image,
    TouchableOpacity,
    StyleProp,
    ViewStyle,
    ImageBackground,
  } from "react-native";import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryButton from "@/components/CategoryButton";
import { useState } from "react";
import { FA6Style } from "@expo/vector-icons/build/FontAwesome6";
import { router } from "expo-router";

interface HomeCatButtonProps {
    title: string
    style?: StyleProp<ViewStyle>;
}

const HomeCatButtons = (props: HomeCatButtonProps) => {
    return (
        <View style={style.container}>
            <Pressable style={props.style}>
            <Text style={style.text}> {props.title} </Text>
            </Pressable>
        </View>
    )
}

export default HomeCatButtons

const style = StyleSheet.create({
    container: {
        width: 70,
        height: 37,
        marginTop: 143,
        marginLeft: 20,
        backgroundColor: "#000000",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute"
    },

    text: {
        color: "#FFFFFF"
    }
});