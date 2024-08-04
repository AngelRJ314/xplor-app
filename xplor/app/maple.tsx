import { StyleSheet, Text, View, ScrollView, Pressable, Image, Alert } from 'react-native'
import React, { useState } from 'react';
import { router } from 'expo-router';
import VisitingPage from '@/components/VisitingPage';
import * as Linking from 'expo-linking';
import CustomCarousel from '@/components/Carousel';

const onPressFunctionLink = () => {
  Linking.openURL('https://www.google.com/maps/place/The+Music+Center/@34.056974,-118.2585134,15z/data=!3m1!4b1!4m6!3m5!1s0x80c2c65223b446e7:0x68bfeaf6a4a2af95!8m2!3d34.0569567!4d-118.2482137!16zL20vMDJmcW4y?entry=ttu');
};

const onPressFunctionHomeArrow = () => { 
    router.back()
  };

  const imagesArray = [
    "https://s3-alpha-sig.figma.com/img/5b54/5305/14a77335c63d540cd7bfbedaf979b809?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KOFFV-xuJ~BYScInCZg3O5eq14-lGUv-aE~bWKFawvFkD2g0g37trKHmuPJXKyW0gfeBPb4hNU6j3PaYVjvgwGLZTlLkKZMyMEtqH1KdLuQ3lcUA~A0YDhxn7T7JbdCzUSw1i9HHbVxYjxmLsiaNWFb~WnLSP3R0COom3Eb7vCxrzOY2EYHSycBsDOKsYkRvMdV9BjfHLJOcz4iLgeguxhyOIrrGMEDeE0LQxsjqrVI71Fn0PXy~RFt6FSWu7ekALak9Ys5M8ZR24FvHNRJ-BINKYIFskjgWEFIhc~zFOkJSNurcuFr5ShEdreItKqt3FrMErytEgNhE91Uelr0Lbw__",
    "https://s3-alpha-sig.figma.com/img/847a/cf74/9945b6a144eaedecde5ccf2e00bde85f?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vb8BQghGfSO8CzoJX1fGI5B4OeoxA0w3-I80cFPdHTVPIxtOJNF53DqTy0nE2muQ-rgljcsmQLNS1V54BdLXgnR9-6LYzDfz18G8l7PrUzLgGVQnAzoassFCRVWYjZn6Vdu7SB2EZXCsxQjz99QhBCrhiZ1i~p4CaZTdpOqaBdIRKXBmyMJLY5WDRZc3LNST8jN7MgoQNAM3XmaNUihdlzFUNHWayDEcO8aC52hMOJ3g5G0XnPLxOeKoglZRAarIUpFMRFAjgjOG9QzEhI3turVa-XCLIwzQn3w5S2xTpQaN7Eu6eSwDPXwf0TbpPgi1Y5vJb2rvxsZUEEOTtB2d4g__",
    "https://s3-alpha-sig.figma.com/img/9ac3/3789/68f440d70587422502e0ec36173b29df?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UjjalqKxV57FegWTN3sw6mZsw0zOyiie595jHm-JNxLX3IquEuqamIQ4auGV2QeUklbPWsUQ2WdQhCVVvFzTvY71jSAbFS1-UtfkhO9jik4P~CwKyG38jpAnjQ4fwyarhyyC23ZU7Q6A3qDrvY1HOqLXM1b4pVmVIzgsNg8VGjeM4H74imbnOvpPWanGNnCZKd3d0v2OtMBftVQnL7Ges8nBqTjuCdIKvyIbXvsy-7culK3GnCrK6PDT256AbKw9sgO~qT-~ljcm3hhShXq6OmNqWRUJE4ZIt6PeYEN0LuIj-mxTgpUw8V5dHIVUZWa7C4qAlwMek8anManfa68Q6A__",
  ];

  const onPressFunctionBookmark = () => {
    Alert.alert("Bookmark Saved")
  };

const maple = () => {

    const [index, setIndex] = useState(0);

    return (
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
        <Image style={style.grad} source={require("@/assets/images/maplegradient.png")}/> 
        <Text style={style.text}> Maple Plaza</Text>
        <Pressable style={style.bookc} onPress={onPressFunctionBookmark}>
        <Image source={require("@/assets/images/book.png")} style={style.book}/>
        </Pressable>
          <Text style={style.description}> Maple Plaza is a welcoming outdoor space located in downtown Los Angeles, offering a serene environment amidst the urban landscape. It features shaded seating areas, lush greenery, and possibly a fountain or artwork, providing a tranquil retreat for visitors. Maple Plaza serves as a gathering spot for relaxation, meetings, or simply enjoying a peaceful moment outdoors.
          </Text>
          <Image source={require("@/assets/images/maplestars.png")} style={style.stars}/>
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

    homearrow: {
        width: 43,
        height: 43,
        marginTop: 40,
        marginBottom: 516,
        marginLeft: 15,
        borderWidth: 0,
        position: "absolute",
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

    stars: {
      height: 26,
      width: 156,
      top: 645,
      left: 20,
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
      top: 591,
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