import { StyleSheet, Platform, Text, View, ImageBackground, Pressable, ScrollView, TextInput } from 'react-native';
import { Link, router, Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton  from '@/components/CategoryButton';
import { useState } from 'react';
import { Image } from 'expo-image'

const Profile = () => {
    const onPressFunctionProfileArrow = () => {
        router.back()
    };

    const onPressFunctionEdit = () => {

    };

    const onPressFunctionSignOut = () => {
        router.replace("/index")
    };

    const onPressFunctionReserve = () => {
        router.push("/reserve")
    };

    const onPressFunctionMusic = () => {
        router.push("/music")
    };

    return (
        <ScrollView style={style.container}>
            <View style={style.topbackground}/>
            {/* <View> */}
            <Pressable style={style.homearrow} onPress={onPressFunctionProfileArrow}>
                <Image source={require("@/assets/images/homearrow.png")} style={style.homearrow}/>
            </Pressable>
            <View style={style.adriantopback}/>
                <Image source={require("@/assets/images/ad.png")} style={style.adrian}/> 
                <Text style={style.name}> Mr. sillybean </Text>
                <Text style={style.location}> Downtown LA </Text> 
                <Text style={style.user}> Xplorer </Text>
                <View style={style.space} />
                <Pressable style={style.editcontainer} onPress={onPressFunctionEdit}>
                    <Text style={style.edit}> Edit Profile </Text>
                </Pressable>
            {/* </View> */}
            <View>
                <Text style={style.bookmarktext}>Next To Explore </Text>
                <Pressable onPress={onPressFunctionReserve}>
                <Image style={style.image} source={"https://images.squarespace-cdn.com/content/v1/58d2c08f725e25221a206ef3/1583285753191-T3MFQ3RKSR1L2I73YQVQ/the-reserve_21743836568_o.jpg"}/>
                </Pressable>
                <Pressable onPress={onPressFunctionMusic}>
                    <Image style={style.musicimage} source={"https://www.musiccenter.org/media/intjb04g/mtf.jpeg?anchor=center&mode=crop&width=1920&height=1080&rnd=132815648649270000"}/>
                </Pressable>
                <Pressable>
                    <Image/>
                </Pressable>
            </View>
            <View>
                <Text style={style.name1}> Name </Text>
                <TextInput style={style.inputn}/>
                <Text style={style.email}> Email </Text>
                <TextInput style={style.inpute}/>
                <Text style={style.password}> Password </Text>
                <TextInput style={style.inputp} secureTextEntry/>
            </View>
                <Pressable style={style.signoutc} onPress={onPressFunctionSignOut}>
                    <Text style={style.signout}> Sign Out </Text>
                </Pressable>
        </ScrollView>
    )
}

export default Profile

const style = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
    },
    topbackground: {
        width: 430,
        height: 312,
        backgroundColor: "#000000",
        position: "absolute"
    },

    image: {
        width: 155.551,
        height: 140.44,
        marginTop: 516,
        marginLeft: 16,
        borderRadius: 12.44,
        position: "absolute"
    },

    musicimage: {
        width: 155.551,
        height: 140.44,
        marginTop: 516,
        marginLeft: 184,
        position: "absolute",
        borderRadius: 12.44,
    },

    space: {
        width: 1,
        height: 24,
        backgroundColor: "#000000",
        marginTop: 367,
        marginLeft: 219,
        position: "absolute",
    },

    adrian: {
        width: 207,
        height: 202.9,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 113,
        marginLeft: 111.5,
        position: "absolute",
    },

    adriantopback: {
        width: 395,
        height: 216,
        marginTop: 240.74,
        marginLeft: 17.5,
        borderRadius: 23,
        backgroundColor: "rgba(255, 255, 255, 0.79)",
        shadowColor: "#000000",
        position: "absolute"
    },

    homearrow: {
        width: 43,
        height: 43,
        marginTop: 30,
        marginLeft: 15,
        borderWidth: 0,
        borderRadius: 45,
        position: "absolute",
    },

    name: {
        fontSize: 25,
        fontStyle: "normal",
        fontWeight: "bold",
        marginTop: 331,
        marginLeft: 146.5,
        position: "absolute",
    },

    location: {
        fontSize: 15,
        fontStyle: "normal",
        fontWeight: "bold",
        marginLeft: 94,
        marginTop: 368,
        position: "absolute",
    },

    user: {
        fontSize: 15,
        fontStyle: "normal",
        fontWeight: "bold",
        marginTop: 368,
        marginLeft: 242,
        position: "absolute",
    },

    edit: {
        color: "#FFFFFF",
        fontSize: 15,
        fontStyle: "normal",
        fontWeight: "bold",
        textAlign: "center",
    },

    editcontainer: {
        width: 146,
        height: 35,
        borderRadius: 12,
        marginTop: 401,
        marginLeft: 146,
        justifyContent: "center",
        backgroundColor: "#000000",
        position: "absolute",
    },

    bookmarktext: {
        fontSize: 25,
        fontStyle: "normal",
        fontWeight: "bold",
        marginTop: 474,
        marginLeft: 6,
        position: "absolute"
    },

    name1: {
        fontSize: 15,
        fontStyle: "normal",
        fontWeight: 500,
        marginTop: 668,
        marginLeft: 16,
        position: "absolute"
    },

    inputn: {
        width: 394,
        height: 68,
        borderRadius: 12,
        borderColor: "#A6A5A5",
        borderWidth: 3,
        marginLeft: 16,
        marginTop: 687,
        position: "absolute"
    },

    email: {
        fontSize: 15,
        fontStyle: "normal",
        fontWeight: 500,
        marginTop: 758,
        marginLeft: 16,
        position: "absolute"
    },

    inpute: {
        width: 394,
        height: 68,
        borderRadius: 12,
        borderColor: "#A6A5A5",
        borderWidth: 3,
        marginLeft: 16,
        marginTop: 779,
        position: "absolute"
    },

    password: {
        fontSize: 15,
        fontStyle: "normal",
        fontWeight: 500,
        marginTop: 849,
        marginLeft: 16,
        position: "absolute"
    },

    inputp: {
        width: 394,
        height: 68,
        borderRadius: 12,
        borderColor: "#A6A5A5",
        borderWidth: 3,
        marginLeft: 16,
        marginTop: 869,
        position: "absolute"
    },

    signout: {
        fontSize: 27,
        fontStyle: "normal",
        fontWeight: "bold",
        textAlign: "center",
        marginLeft: 72,
        color: "#FFFFFF",
        position: "absolute"
    },

    signoutc: {
        width: 266,
        height: 65,
        justifyContent: "center",
        marginTop: 990,
        marginLeft: 82,
        backgroundColor: "#DE0303",
        borderRadius: 22,
        position: "absolute"
    },

    // text: {
    //     color: "black",
    //     fontSize: 100,
    //     alignItems: "center",
    //     justifyContent: "center"
    // }
})