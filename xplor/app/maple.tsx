import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native'
import React from 'react';
import { router } from 'expo-router';
import VisitingPage from '@/components/VisitingPage';
import * as Linking from 'expo-linking';

const onPressFunctionLink = () => {
  Linking.openURL('https://www.google.com/maps/place/The+Music+Center/@34.056974,-118.2585134,15z/data=!3m1!4b1!4m6!3m5!1s0x80c2c65223b446e7:0x68bfeaf6a4a2af95!8m2!3d34.0569567!4d-118.2482137!16zL20vMDJmcW4y?entry=ttu');
}

const maple = () => {
    return (
    <View style={style.container}>
        <Image/>
        <VisitingPage
        image={"https://images1.loopnet.com/i2/x8wwn4HHearLbJ2DDj0kbzSIdVYiDVHGHUI_kjRXumk/110/401-E-12th-St-Los-Angeles-CA-401-E-12th-St-1-Large.jpg"}
        />
        <Image style={style.grad} source={require("@/assets/images/maplegradient.png")}/> 
        <Text style={style.text}> Maple Plaza</Text>
        <Text style={style.description}> Maple Plaza is a welcoming outdoor space located in downtown Los Angeles, offering a serene environment amidst the urban landscape. It features shaded seating areas, lush greenery, and possibly a fountain or artwork, providing a tranquil retreat for visitors. Maple Plaza serves as a gathering spot for relaxation, meetings, or simply enjoying a peaceful moment outdoors.
        </Text>
        <Pressable onPress={onPressFunctionLink} style={style.addresscontainer}>
          <Text style={style.address}> 401 E 12th St, Los Angeles, CA 90015 </Text>
        </Pressable>
    </View>
    )
}

export default maple

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
        marginTop: 682,
        position: "absolute",
    },

    text: {
        // marginTop: 632,
        // marginLeft: 20,
        width: 382,
        height: 85,
        marginLeft: 19,
        marginTop: 596,
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
        textAlign: "center",
        // position: "absolute",
    },
    
    addresscontainer: {
      width: 394,
      height: 58,
      // alignItems: "center",
      // justifyContent: "center",
      marginTop: 831,
      marginLeft: 18,
      borderRadius: 12,
      backgroundColor: "rgba(106, 25, 210, 0.74)",
      justifyContent: "center",
      position: "absolute",
    },

    grad: {
        width: 452,
        height: 309,
        marginTop: 639,
        position: "absolute",
    },
})