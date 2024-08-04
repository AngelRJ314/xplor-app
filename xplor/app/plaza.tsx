import { StyleSheet, Text, View, ScrollView, Pressable, Image, Alert } from 'react-native'
import React from 'react';
import { router } from 'expo-router';
import VisitingPage from '@/components/VisitingPage';
import * as Linking from 'expo-linking';
import CustomCarousel from '@/components/Carousel';
import { useState } from 'react';

const onPressFunctionLink = () => {
  Linking.openURL('https://www.google.com/maps/place/Plaza+Firehouse/@34.056037,-118.2490925,15z/data=!3m1!4b1!4m6!3m5!1s0x80c2c645a5f93ac5:0x6169c4620d199b67!8m2!3d34.0560197!4d-118.2387928!16s%2Fm%2F0yt1tpq?entry=ttu');
};

const onPressFunctionHomeArrow = () => { 
    router.back()
  };

const imagesArray = [
    "https://live.staticflickr.com/3545/3636659323_b5e1a226d4_b.jpg",
    "https://www.discoverlosangeles.com/sites/default/files/styles/hero/public/business/the-old-plaza-firehouse/c_fit-w_1920-h_1440-crm-la-181121_oldplazafirehouse_0070-157cc6375056a36_157cc717-5056-a36f-23a637f01c758e7e.jpg.webp?itok=3Yc_j73X",
    "https://tessa2.lapl.org/digital/api/singleitem/image/photos/112168/default.jpg",
  ];

  const onPressFunctionBookmark = () => {
    Alert.alert("Bookmark Saved")
  };

const plaza = () => {

    const [index, setIndex] = useState(0);

    return(
    <View style={style.container}>
        <CustomCarousel imageArray={imagesArray} setIndex={setIndex} />
        <Pressable style={style.homearrow} onPress={onPressFunctionHomeArrow}>
        <Image
          source={require("@/assets/images/homearrow.png")}
          style={style.homearrow}
        />
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
        <Pressable style={style.homearrow} onPress={onPressFunctionHomeArrow}>
          <Image source={require('@/assets/images/homearrow.png')} style={style.homearrow}/>
        </Pressable>
        <Image style={style.grad} source={require("@/assets/images/plazagradient.png")}/> 
        <Text style={style.text}> Plaza Firehouse </Text>
        <Pressable style={style.bookc} onPress={onPressFunctionBookmark}>
        <Image source={require("@/assets/images/book.png")} style={style.book}/>
      </Pressable>
      <Image source={require("@/assets/images/plazastars.png")} style={style.stars}/>
        <Text style={style.description}> The Plaza Firehouse, a historic landmark in downtown LA, is notable for its 1884 architecture and role in the city's fire service history. Originally housing horse-drawn fire engines, it now offers visitors a glimpse into the past with its well-preserved interior, antique firefighting equipment, and exhibits on the evolution of firefighting in the region.
        </Text>
        <Pressable onPress={onPressFunctionLink} style={style.addresscontainer}>
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

    homearrow: {
        width: 43,
        height: 43,
        marginTop: 40,
        marginBottom: 516,
        marginLeft: 15,
        borderWidth: 0,
        position: "absolute",
      },

      stars: {
        height: 26,
        width: 156,
        top: 686,
        left: 20,
        position: "absolute",
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

    grad: {
        width: 452,
        height: 309,
        marginTop: 639,
        position: "absolute",
    },

    fullslide: {
        backgroundColor: "#FFFFFF",
        width: 57,
        height: 6,
        borderRadius: 100,
        marginTop: 84,
        marginLeft: 117,
        position: "absolute",
      },
    
      halfslide: {
        backgroundColor: "rgba(255, 255, 255, 0.50)",
        width: 57,
        height: 6,
        borderRadius: 100,
        marginTop: 84,
        marginLeft: 186,
        position: "absolute",
      },
    
      halfslide2: {
        backgroundColor: "rgba(255, 255, 255, 0.50)",
        width: 57,
        height: 6,
        borderRadius: 100,
        marginTop: 84,
        marginLeft: 255,
        position: "absolute",
      },
})