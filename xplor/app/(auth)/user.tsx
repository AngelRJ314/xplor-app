import {
    Image,
    Text,
    View,
    StyleSheet,
    Button,
    Pressable,
    TextInput,
  } from "react-native";
  import React from "react";
  import { SafeAreaView } from "react-native-safe-area-context";
  import CategoryButton from "@/components/CategoryButton";
  import { useState } from "react";
  import { FA6Style } from "@expo/vector-icons/build/FontAwesome6";
  import { router } from "expo-router";


  const User = () => {

    const onPressFunctionBack = () => {
        console.log("Arrow Pressed");
        router.back();
      };

    const onPressFunctionContinue = () => {
        router.replace("/categories")
    };

    return (
        <View style={style.container}>
            <Pressable onPress={onPressFunctionBack}>
            <Image
                source={require("@/assets/images/homearrow.png")}
                style={style.arrow}/>
            </Pressable>
            <Text style={style.pro}> Let's Make Your Profile! </Text>
            <Image style={style.propic} source={require("@/assets/images/propic.png")}/>
            <Text style={style.username}> Username </Text>
            <TextInput style={style.input}/>
            <Pressable style={style.ccontinue} onPress={onPressFunctionContinue}>
                <Text style={style.continue}> Continue </Text>
            </Pressable>
        </View>
    )
  }

  export default User

  const style = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        flex: 1,
    },

    username: {
        fontSize: 17,
        fontStyle: "normal",
        fontWeight: "bold",
        top: 446, 
        left: 18,
        position: "absolute",
    },

    input: {
        borderRadius: 12,
        borderWidth: 3,
        borderColor: "#A6A5A5",
        top: 466,
        left: 18,
        width: 394,
        height: 70,
        position: "absolute",
    },

    arrow: {
        marginLeft: 20,
        marginTop: 66,
        position: "absolute",
        width: 43,
        height: 43,
      },

      pro: {
        fontSize: 39,
        fontStyle: "normal",
        fontWeight: "bold",
        top: 124,
        left: 63.5,
        textAlign: "center",
        position: "absolute"
      },

      propic: {
        width: 183,
        height: 183,
        top: 238,
        left: 128,
        position: "absolute",
      },

      continue: {
        fontSize: 29,
        fontStyle: "normal",
        fontWeight: "bold",
        position: "absolute",
      },

      ccontinue: {
        borderRadius: 12,
        borderWidth: 3,
        borderColor: "#A6A5A5",
        top: 738,
        left: 18,
        width: 394,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
      }
  })