import { StyleSheet, Text, View, ScrollView, Pressable, Image, Alert } from 'react-native'
import React, { useState } from 'react';
import { router } from 'expo-router';
import VisitingPage from '@/components/VisitingPage';
import * as Linking from 'expo-linking';
import CustomCarousel from '@/components/Carousel';

const onPressFunctionLink = () => {
  Linking.openURL("https://www.google.com/maps/place/Queen's+Bakery/@34.0627082,-118.2486804,15z/data=!3m1!4b1!4m6!3m5!1s0x80c2c65a497143e3:0x8be97acb7eef986d!8m2!3d34.0626909!4d-118.2383807!16s%2Fg%2F1tf_nkt1?entry=ttu");
};

const imagesArray = [
  "https://lh3.googleusercontent.com/p/AF1QipM_wqdl2lUk_ggFqC_gRC34MFj2ufYIPKeUuANH=s1360-w1360-h1020",
  "https://lh3.googleusercontent.com/p/AF1QipOTTojX_4sd-ARCRhqOLe97baKFZ6QgPlQv-kLx=s1360-w1360-h1020",
  "https://s3-alpha-sig.figma.com/img/cf03/9098/9c9809071e745513492ef1b8b8cb7d51?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EyQZ2yDD2nza4S9Edoue5uIrc-Viqrga8yxmv5fWEaMy8290PWiLXn2UkjzLGYBEwALSkHd3jTKpuXazB~BxQvaSONjqHGvDPI4~Ik6ksGWEuA-1-0UqX85akq177CWESCMYjyi0LB3yfESFX~epSghVRmYjzYpHTjE2qYJQKnfv7gdxOY0ac4DF0VA05VqKPFaHDhoTnpDd1RRx36caQ0x69mIHe6uERA3kz50VSpg8SIP3qM3FcPj9yzijFH7pJQ85GLHuBw1qAnqfJaVz4WePvT9elMhtMgoqkFuj~VQ7e0NIgBFFP9ivF08pJt7KjYgxp76tUX3G8a06XCZGVg__",
];

const onPressFunctionBookmark = () => {
  Alert.alert("Bookmark Saved")
  console.log("Bookmark")
};

const onPressFunctionHomeArrow = () => { 
  router.back()
};

const reserve = () => {

  const onPressFunctionBookmark = () => {  
    setIsBookmarked(!isBookmarked);
  };

  const [isBookmarked, setIsBookmarked] = useState(false);
  
  const [index, setIndex] = useState(0)

   return (
     <View style={style.container}>
        <CustomCarousel imageArray={imagesArray} setIndex={setIndex}/>
       <Pressable style={style.homearrow} onPress={onPressFunctionHomeArrow}>
          <Image source={require('@/assets/images/homearrow.png')} style={style.homearrow}/>
        </Pressable>
        <View
        style={[
          style.fullslide,
          {
            backgroundColor: index == 0 ? "white" : "rgba(255, 255, 255, 0.50)",
          },
        ]}
      />
      {/* <View style={style.halfslide} /> */}
      <View
        style={[
          style.halfslide,
          {
            backgroundColor: index == 1 ? "white" : "rgba(255, 255, 255, 0.50)",
          },
        ]}
      />
      <View
        style={[
          style.halfslide2,
          {
            backgroundColor: index == 2 ? "white" : "rgba(255, 255, 255, 0.50)",
          },
        ]}
      />
        <Image style={style.grad} source={require("@/assets/images/bakerygradient.png")}/>
        <Pressable style={style.bookc} onPress={onPressFunctionBookmark}>
          {isBookmarked? (<Image source={require("@/assets/images/bookmark.png")} style={style.book}/>)
          : (<Image source={require("@/assets/images/book.png")} style={style.book}/>)}
        </Pressable>
        <Text style={style.text}> Queen's Bakery </Text>
        <Image source={require("@/assets/images/bakerystar.png")} style={style.stars}/>
          <Text style={style.description}> Queen's Bakery in downtown LA offers a delightful assortment of freshly baked goods and pastries. Known for its cozy atmosphere and quality ingredients, it's the perfect spot to enjoy artisan breads, cakes, cookies, and savory treats, providing a relaxing break in the heart of the city.
          </Text>
       <Pressable onPress={onPressFunctionLink} style={style.addresscontainer}>
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

   stars: {
    height: 26,
    width: 156,
    top: 673,
    left: 19,
    position: "absolute",
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

bookc: {
  width: 43,
  height: 43,
  marginTop: 0,
  // left: 370,
  // top: 619,
  position: "absolute",
},

book: {
  width: 43,
  height: 43,
  left: 370,
  top: 619,
  position: "absolute",
},

homearrow: {
  width: 43,
  height: 43,
  marginTop: 40,
  marginBottom: 516,
  marginLeft: 15,
  borderWidth: 0,
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