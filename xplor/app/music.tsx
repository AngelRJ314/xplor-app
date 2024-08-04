import { StyleSheet, Text, View, ScrollView, Pressable, Image, Alert } from 'react-native'
import React from 'react';
import { router } from 'expo-router';
import VisitingPage from '@/components/VisitingPage';
import * as Linking from 'expo-linking';
import { useState } from 'react';
import CustomCarousel from '@/components/Carousel';

const onPressFunctionLink = () => {
  Linking.openURL('https://www.google.com/maps/place/The+Music+Center/@34.056974,-118.2585134,15z/data=!3m1!4b1!4m6!3m5!1s0x80c2c65223b446e7:0x68bfeaf6a4a2af95!8m2!3d34.0569567!4d-118.2482137!16zL20vMDJmcW4y?entry=ttu');
};

const onPressFunctionHomeArrow = () => { 
  router.back()
};

const imagesArray = [
  "https://s3-alpha-sig.figma.com/img/d45a/9bed/af8147a7ede430a169403dc407abca24?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KR3jQ~BwPKM~Q8RN24SN~vi3xsvX8VDnI99TATgFcTsQkepCNQQfs1qHGKzDzCETEa-p7Jaf2WY-EwBaFePpenS8iV2ovYsY0hAyS9QZPXSUJJ6ECshDhuAs69mEpYaiGZjUk4oWqOY1n8X22Rc-9En3WF5foBurPNur8AXtq9ugDD4jeI2eBYaVmr~zFyKoyNebQC1IIG37Z6-YlacXvn1GAm~BUc-1RUZBgrQ2zSgGG9qVNgysLH-tQGzI3Uibxza9M9NVkDdHqMTAwRvCU3pvuZOzM-4G~l38h5YPv9vFOBU8FONDAD~Fe4bDqphMNrDfcYJEFwmUhVOs-F8qOw__",
  "https://s3-alpha-sig.figma.com/img/9958/8899/425fc84c0704229cf26ea904bb6b0660?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CyCQutx2cC4iZD3a63qyjsiNr8tr~P5XDExyrthe-XEVa3XGic2~ZTps9erp0CISCk~YCttE7zI2P0ep9D87FRW7~QKkvTl3ExuVN~CiXTqQ4mVjNIfCi~bvYOkPYkkiV3WMz0OJEBn-L~sBAZ9VUyIPf5heICAV~KETcX0edpr820UCG0rzmnM8yobds40L7zoCrVMlY6UKg0bAPl0lLmmFxdfn9fiCDSkgY3OfFD4LpHTB-oBNgnzKLCDMKcc7SSsNI72q4~kQbTk4I5OfhDd4mLhlW~J9BGRkiUNGelZYXU7JvaOwa~B0AMRsR7Ro9rgZf~0xqgWy-D9pKwN1mg__",
  "https://s3-alpha-sig.figma.com/img/3ef5/9011/9e846610fb52a37c92d689e5766b1c33?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ir7XpEV5NgmeV7W02e44uMS7QVb7dldJML-CqoqfOPIbfGRgTauWabPxf~elIOzdc8yggEiUkfoaxy~lcx3H3bQLb204bNAGieVsrS2AfpaPIvFAa-JQsSwl5~QcpEbZ46oGAYJzv9hXueq4jOGTuTGQTJrQnfEiGGDWa~n-ZaPKQ-gkj4bpWB4oXuaT8ZsNW2I2c5fE2wlVHvhf0XqlL0J4tuDuVinkA20Bc6DXOfklOm0mTvw8LulRbQTO~6vQnHNPI~y-T54cUNUJ7kswVtytrkuOZAjDjCFu11i8ZaFNsiB4CXhnaDACTzPooTH1CQ1mA3IXGtEe2DKVQwDBPA__",
];

const onPressFunctionBookmark = () => {
  Alert.alert("Bookmark Saved")
};

const music = () => {

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
        <Image style={style.grad} source={require("@/assets/images/musicgradient.png")}/> 
        <Text style={style.text}> The Music Center </Text>
        <Pressable style={style.bookc} onPress={onPressFunctionBookmark}>
          <Image source={require("@/assets/images/book.png")} style={style.book}/>
        </Pressable>
        <Image source={require("@/assets/images/musicstars.png")} style={style.stars}/>
        <Text style={style.description}> The Music Center in downtown LA is a prestigious performing arts complex with iconic venues like Walt Disney Concert Hall and Ahmanson Theatre. Known for its cultural significance and architectural splendor, it hosts a wide range of performances, from symphonies and operas to ballets and Broadway shows, making it a vibrant hub for community engagement and artistic excellence.
        </Text>
        <Pressable onPress={onPressFunctionLink} style={style.addresscontainer}>
          <Text style={style.address}> 135 N Grand Ave, Los Angeles, CA 90012 </Text>
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
        marginTop: 679,
        position: "absolute",
    },

    stars: {
      height: 26,
      width: 156,
      top: 642,
      left: 20,
      position: "absolute",
     },

    text: {
        // marginTop: 632,
        // marginLeft: 20,
        width: 382,
        height: 85,
        marginLeft: 19,
        marginTop: 595,
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
      top: 588,
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