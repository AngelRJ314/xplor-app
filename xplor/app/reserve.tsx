 import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native'
 import React from 'react';
 import { router } from 'expo-router';
 import VisitingPage from '@/components/VisitingPage';

 const reserve = () => {
    return (
      <View style={style.container}>
        <VisitingPage 
        image={"https://images.squarespace-cdn.com/content/v1/58d2c08f725e25221a206ef3/1583285753191-T3MFQ3RKSR1L2I73YQVQ/the-reserve_21743836568_o.jpg"}
        />
        <View style={style.fullslide}/>
        <View style={style.halfslide}/>
        <View style={style.halfslide2}/>
          <Image style={style.grad} source={require("@/assets/images/reservegradient.png")}/> 
          <Image style={style.stars} source={require("@/assets/images/nightstars.png")}/>
          <Text style={style.text}> The Reserve </Text>
          <Text style={style.description}> The Reserve is a prestigious private club nestled in downtown Los Angeles, known for its luxurious ambiance and exclusive offerings. Members enjoy fine dining, elegant lounges, and personalized concierge services, making it a sought-after destination for professionals and individuals seeking a refined social experience.
          </Text>
          <Pressable style={style.addresscontainer}>
          <Text style={style.address}> 650 South Spring Street, Los Angeles, CA, 90014</Text>
          </Pressable>
    </View>
    )
 }

 export default reserve

 const style = StyleSheet.create({
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
      marginTop: 716,
      position: "absolute",
  },

  text: {
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
  marginTop: 839,
  marginLeft: 18,
  borderRadius: 12,
  backgroundColor: "#797777",
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

stars: {
  width: 124,
  height: 26,
  marginLeft: 20,
  marginTop: 678,
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

})