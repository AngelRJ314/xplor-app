import { Text, View, StyleSheet, Button, Pressable, Alert, StyleProp, ViewStyle, TextStyle} from "react-native";
import React from "react";
import { Image } from 'expo-image'
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryButton from "@/components/CategoryButton";
import { useState } from "react";
import { FA6Style } from "@expo/vector-icons/build/FontAwesome6";
import { router } from "expo-router";

const ProPlus = () => {
    
    const onPressFunctionContribution = () => {
        router.push("/contribution")
    };

    const onPressFunctionProfile = () => {
        router.push("/profile")
        // console.log("as")
    };
        return(
        <View>
            <Pressable onPress={onPressFunctionContribution}>
                <Image source={require("@/assets/images/plus.png")} style={style.plus}/>
            </Pressable>
            <Pressable onPress={onPressFunctionProfile}>
                <Image source={require("@/assets/images/profile.png")} style={style.profile}/>
            </Pressable>
        </View>
    )
}

export default ProPlus

const style = StyleSheet.create({
    plus: {
        width: 43,
        height: 43,
        marginTop: 78,
        marginLeft: 332,
        position: "absolute",
    },

    profile: {
        width: 43,
        height: 43,
        marginTop: 78,
        marginLeft: 379,
        position: "absolute",
    }
})