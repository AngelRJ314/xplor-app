import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native'
import React from 'react';
import { router } from 'expo-router';
import VisitingPage from '@/components/VisitingPage';

const reserve = () => {
   return (
     <View style={style.container}>
       <VisitingPage
       image={"https://lh3.googleusercontent.com/p/AF1QipM_wqdl2lUk_ggFqC_gRC34MFj2ufYIPKeUuANH=s1360-w1360-h1020"}
       />
        <Image style={style.grad} source={require("@/assets/images/bakerygradient.png")}/>
        <View style={style.fullslide}/>
        <View style={style.halfslide}/>
        <View style={style.halfslide2}/>
        <Text style={style.text}> Queen's Bakery </Text>
          <Text style={style.description}> Queen's Bakery in downtown LA offers a delightful assortment of freshly baked goods and pastries. Known for its cozy atmosphere and quality ingredients, it's the perfect spot to enjoy artisan breads, cakes, cookies, and savory treats, providing a relaxing break in the heart of the city.
          </Text>
       <Pressable style={style.addresscontainer}>
          <Text style={style.address}> 809 N Broadway, Los Angeles, CA 90012 </Text>
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
     marginLeft: 19,
     marginTop: 710,
     position: "absolute",
 },

 text: {
   marginTop: 626,
   marginLeft: 20,
   width: 382,
   height: 85,
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
marginTop: 831,
marginLeft: 18,
borderRadius: 12,
backgroundColor: "#A23A7F",
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