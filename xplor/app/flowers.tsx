import { StyleSheet, Text, View, ScrollView, Pressable, Image, Alert } from 'react-native'
import React, { useState } from 'react';
import { router } from 'expo-router';
import VisitingPage from '@/components/VisitingPage';
import * as Linking from 'expo-linking';
import CustomCarousel from '@/components/Carousel';

const onPressFunctionLink = () => {
  Linking.openURL('https://www.google.com/maps/place/Los+Angeles+Flower+District/@34.038457,-118.2609413,15z/data=!3m1!4b1!4m6!3m5!1s0x80c2c6337bfc2ea1:0x320faca468602c2a!8m2!3d34.0384396!4d-118.2506416!16s%2Fm%2F04yc6jy?entry=ttu');
};

const onPressFunctionHomeArrow = () => { 
  router.back()
};

const imagesArray = [
  "https://greenweddingshoes.com/wp-content/uploads/2014/07/GWSFlowerMart_KatiePritchardWEB-10.jpg",
  "https://s3-alpha-sig.figma.com/img/6291/4511/835b80d49ac3b21e041d43c9af72661a?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=foSGslUE0P2P8EWCgVTIwuZGI5G4I4~EfHEk7dpuYc6UV5qzd8GoYXy33yQHfcampPuvTBYq0xKhGBYjH7QBkcRL0uvju56vS5mbELzi8JxCkeq~IZl07SY7MOAwbALkcdKESZ4uGYhbm8KmauiJ-VCxCd9NdrmQoOrt1TKH3mfGLphqwG7Dtquy-xqKDz2HOPcR7LjdBZz8dWXqfn3zQlssCgabJyaet~B2CZPgUzdXp8L19I8AL9uTpBgDApDpI0deylhpTeLcfEUJ96Gi4rdI08gZ~BkszI9yuV7sm~YTsuqwdPE-7oCIUDQ7sQ2ZOOkk~myZJu7k~tpkab158A__",
  "https://s3-alpha-sig.figma.com/img/0eb7/54b4/a50310b8e325f4cbeaf64dd87785a156?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i2lz2LUe5Pf~YMPqEhlgy7SeSisX1sW9onAhUsYyCEoIbdyNfnB1ENO984tGaTDgiqreRRCVsWNf6jyCpSfZ9fja-oedBkrUQ1mgAAR3Z4BQj8cUeFP3j~Hqlk-hnSJAKZ9IqFUrr1lQGG5QL-AI9qsa-urtMY6zUifSlt4pQdVfhtQe8fNqhoL6Fo~zjHs3fXVPTN03YKQHXzOs7wnIUtX6vrpsFzl4TRxhmZpkycO6O6jz4dzKZ2i1UARIANI2C84q-GLvCv1awmxhbzxXhLC06DdkdVWuv1RwT1PgQHm1S-OH~Hc0PS-fD18w0qhGaML8CdTctYYujUpWcAjHcw__",
];

const onPressFunctionBookmark = () => {
  Alert.alert("Bookmark Saved")
};

const flower = () => {

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
        <Image style={style.grad} source={require("@/assets/images/flowersgradient.png")}/> 
        <Text style={style.text}> Los Angeles Flower District </Text>
        <Pressable style={style.bookc} onPress={onPressFunctionBookmark}>
        <Image source={require("@/assets/images/book.png")} style={style.book}/>
      </Pressable>
        <Image source={require("@/assets/images/flowerstars.png")} style={style.stars}/>
        <Text style={style.description}> The Los Angeles Flower District in downtown LA is a lively hub known for its vibrant atmosphere and diverse array of flowers, plants, and floral supplies. Spanning several blocks, it features both wholesale and retail vendors offering fresh-cut flowers, exotic plants, and decorative accessories. Popular among florists, event planners, and flower enthusiasts, it's renowned for its extensive selection and competitive prices, making it a must-visit for floral arrangements and gardening.
        </Text>
        <Pressable onPress={onPressFunctionLink} style={style.addresscontainer}>
          <Text style={style.address}> 846 San Julian St, Los Angeles, CA 90014 </Text>
        </Pressable>
    </View>
    )
}

export default flower

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

    stars: {
      height: 26,
      width: 156,
      top: 626,
      left: 20,
      position: "absolute",
     },

    description: {
        color: "#FFFFFF",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "normal",
        marginLeft: 20,
        marginTop: 663,
        position: "absolute",
    },

    text: {
        // marginTop: 632,
        // marginLeft: 20,
        width: 382,
        height: 85,
        marginLeft: 19,
        marginTop: 579,
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
      top: 572,
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
      backgroundColor: "rgba(210, 25, 25, 0.74)",
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