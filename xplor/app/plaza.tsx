import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native'
import React from 'react';
import { router } from 'expo-router';
import VisitingPage from '@/components/VisitingPage';

const plaza = () => {
    return(
    <View style={style.container}>
        <VisitingPage
        image={"https://live.staticflickr.com/3545/3636659323_b5e1a226d4_b.jpg"} 
        />
        <Image style={style.grad} source={require("@/assets/images/plazagradient.png")}/> 
        <Text style={style.text}> Plaza Firehouse </Text>
        <Text style={style.description}> The Plaza Firehouse, a historic landmark in downtown LA, is notable for its 1884 architecture and role in the city's fire service history. Originally housing horse-drawn fire engines, it now offers visitors a glimpse into the past with its well-preserved interior, antique firefighting equipment, and exhibits on the evolution of firefighting in the region.
        </Text>
        <Pressable style={style.addresscontainer}>
          <Text style={style.address}> 501 N Los Angeles St, Los Angeles, CA 90012 </Text>
        </Pressable>
    </View>
    )
}

export default plaza

const style=StyleSheet.create({
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
        width: 382,
        height: 105,
        marginLeft: 20,
        marginTop: 723,
        position: "absolute",
    },

    text: {
        marginTop: 639,
        marginLeft: 20,
        width: 382,
        height: 85,
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
      // alignItems: "center",
      // justifyContent: "center",
      marginTop: 839,
      marginLeft: 18,
      borderRadius: 12,
      backgroundColor: "#B35031",
      justifyContent: "center",
      position: "absolute",
    },
    bookmark: {
        width: 43,
        height: 43,
        marginTop: 625,
        marginLeft: 371,
        position: "absolute",
    },
    grad: {
        width: 452,
        height: 309,
        marginTop: 639,
        position: "absolute",
    },
})