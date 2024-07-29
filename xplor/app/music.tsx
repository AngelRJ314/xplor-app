import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native'
import React from 'react';
import { router } from 'expo-router';
import VisitingPage from '@/components/VisitingPage';

const music = () => {
    return (
    <View style={style.container}>
        <VisitingPage title="The Music Center" 
        text="The Music Center in downtown LA is a prestigious performing arts complex with iconic venues like Walt Disney Concert Hall and Ahmanson Theatre. Known for its cultural significance and architectural splendor, it hosts a wide range of performances, from symphonies and operas to ballets and Broadway shows, making it a vibrant hub for community engagement and artistic excellence." 
        image={"https://dza2a2ql7zktf.cloudfront.net/binaries-cdn/dqzqcuqf9/image/fetch/q_auto,dpr_auto,c_fill,f_auto,w_auto/https://d2u3kfwd92fzu7.cloudfront.net/asset/cms/Art_Basel_OVN_Los_Angeles_April_Bey_Gavlak1.jpg"}
        descriptionStyle={style.description}
        textStyle={style.text}
        />
        <Pressable style={style.addresscontainer}>
          <Text style={style.address}> 809 N Broadway, Los Angeles, CA 90012 </Text>
        </Pressable>
    </View>
    )
}

export default music

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
      marginTop: 839,
      marginLeft: 18,
      borderRadius: 12,
      backgroundColor: "rgba(25, 118, 210, 0.74)",
      justifyContent: "center",
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
  
  grad: {
    width: 452,
    height: 309,
    marginTop: 639,
    position: "absolute",
  },
})