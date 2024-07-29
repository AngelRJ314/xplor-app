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

  const Login = () => {

    const onPressFunctionLogin = () => {
        router.replace("/home");
      };

    const onPressFunctionArrowCreate = () => {
        console.log("Arrow Pressed");
        router.back();
      };

    return (
        <View>
            <Pressable onPress={onPressFunctionArrowCreate}>
                <Image source={require("@/assets/images/arrow.png")} style={style.arrow}/>
            </Pressable>
            <Text style={style.header}> Let's sign you in </Text>
            <Text style={style.header2}> Welcome Back! </Text>
            <Image source={require('@/assets/images/beglogo.png')} style={style.xplorContainer}/>
            <Text style={style.user}> Username </Text>
            <TextInput style={style.inpute}  />
            <Text style={style.password}> Password </Text>
            <TextInput style={style.inputp}  secureTextEntry />
            <Pressable onPress={onPressFunctionLogin} style={style.loginbox}>
                <Text style={style.login}>
                    Login
                </Text>
            </Pressable>
        </View>
    )
  }

  export default Login

  const style=StyleSheet.create({
    header: {
        marginTop: 194,
        marginLeft: 41,
        width: 327,
        height: 47,
        fontSize: 39,
        fontStyle: "normal",
        fontWeight: "bold",
        position: "absolute"
    },

    header2: {
        color: "#A6A5A5",
        marginTop: 251,
        marginLeft: 41,
        width: 310,
        height: 22,
        fontSize: 18,
        fontStyle: "normal",
        fontWeight: 400,
        position: "absolute"
    },

    inpute: {
        width: 394,
        height: 70,
        marginTop: 501,
        marginLeft: 18,
        borderColor: '#A6A5A5',
        borderWidth: 3,
        position: "absolute",
        borderRadius: 12,
      },

      inputp: {
        width: 394,
        height: 70,
        marginTop: 606,
        marginLeft: 18,
        borderColor: '#A6A5A5',
        borderWidth: 3,
        position: "absolute",
        borderRadius: 12,
      },

    arrow: {
        marginLeft: 28, 
        marginTop: 114, 
        position: "absolute",  
        width: 57, 
        height: 26,
      },

      user: {
        marginLeft: 18,
        marginTop: 480,
        fontSize: 17,
        fontStyle: "normal",
        fontWeight: "bold",
        position: "absolute",
      },

      password: {
        marginLeft: 18,
        marginTop: 585,
        fontSize: 17,
        fontStyle: "normal",
        fontWeight: "bold",
        position: "absolute",
      },

      xplorContainer: {
        width: 200,
        height: 200,
        marginLeft: 115,
        marginTop: 273,
      },


  loginbox: {
    width: 394,
    height: 70,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: "#A6A5A5",
    marginHorizontal: 18,
    marginTop: 817,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },

  login: {
    color: "black",
    fontSize: 29,
    fontStyle: "normal",
    fontWeight: "bold",
    alignItems: "center",
    position: "absolute",
  },
  })