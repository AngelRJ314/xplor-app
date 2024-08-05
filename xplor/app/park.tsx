import { StyleSheet, Text, View, ScrollView, Pressable, Image, Alert} from 'react-native'
import React, { useState } from 'react';
import { router } from 'expo-router';
import VisitingPage from '@/components/VisitingPage';
import * as Linking from 'expo-linking';
import CustomCarousel from '@/components/Carousel';

const onPressFunctionLink = () => {
  Linking.openURL("https://www.google.com/maps/place/Lower+Angel's+Point/@34.0794201,-118.2543365,15z/data=!3m1!4b1!4m6!3m5!1s0x80c2c78994bc7511:0xb1c4259c259627c4!8m2!3d34.0794028!4d-118.2440368!16s%2Fg%2F11hdqvrmqw?entry=ttu");
};

const onPressFunctionHomeArrow = () => { 
  router.back()
};

const imagesArray = [
  "https://s3-alpha-sig.figma.com/img/54f7/4c18/62ce618ffe1f9c4cf0655afd9aabb455?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B2GUrVQ4D1Qxnx3p58M4minHCQW75-nQuVzLZMOOsOzLm~VsC5WgRvbQ4Vt5riZ-TjKpFpQ7yXl6WE39BxlqIgMDvA5lhSclSFuNv-Bd3qiEezpYXE4TB1PxjTMA~I8Zdm8Q265bkMXJmleoX8ZxplkirqlLGDTop4S3nl4YmZM1PVPpM7I5D0iqO68t61~ttXbFnwfzhjtLnDX0cFq8AduuEP~PfV4BGt8QL-FOO8V-R4nJ4YFsmHHEQ2giWamDTqpHTvz73xaoUys~pNh0HQPfgRj-wnURdDer--I0WV-HaYpBUqopJGhJ62aIJwBkB7o28V4eyh-5KGx8Kt0blQ__",
  "https://s3-alpha-sig.figma.com/img/0b57/ea0c/733f063c4b8289d06a84d88ca74b6e4b?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RfUw6d-gdVAQZuOfAJwfqXI4z8wQnRTRwd1jb3eahCOV8HazY3Xy5cETI8uA6Kn3L3xa7Vr33-s4xgAKhoLU-NpPWtO2EjnRwFnEHH7H0BhC3bJJq-H2bSi66NWVJkRteLrbS8VvKl22oz1ye58POH0z~fuzdEm9e4Neep6GRprpHfguGqlUTPOJE-Qx-mh3FDoNfzWztW4mR3GQT8HO-38PPxCmOQ~u2D1U4XU0ukSnKFBULLA-xvu933YshW7bRaSPH0bZW2jKrQVyKVBHvuyvL4zkP-uz~fnQ2NSoCR5Z3MPCa1-j~76PJ9wO0dlLA1MpIoWLh6nS8d9jwMRzXg__",
  "https://s3-alpha-sig.figma.com/img/4231/da5c/faf84f473bf9961fe0a9b24f1a228879?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cYVcf~agC1zmPgojMJnPPiv4Nps6ZhEhs9uDBZJ9zT~k~ExJOJSHaw7bKlSaSC-beMo350i1FW1gvpUsalBX2tP5A3WvvD2N-WFsnfuMTMLE~qPKT01yJ~QjXif06atF9022JcZBVmYPho0gutXXSGLva6io~EHXtB0AywKtbPWmBVHYufEWTTRBP7VNUqXjNSeaCsUMo~5NsNmmzuNmMXW37ZqFCskHkdF5-K49Y9MpqYL4oAZ0z4DmZYBqmXuFsiTWpT8GDYjZm70-SkZqoBeVVUESWBa8I5Wq9EuEv1oYqc-05jRdFMrohYBY7nKZVPd33IkLlsb9lejriZMisg__",
];



const nightgallery = () => {

  const onPressFunctionBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const [isBookmarked, setIsBookmarked] = useState(false);

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
      
        <Image style={style.grad} source={require("@/assets/images/parkgradient.png")}/>
        <Text style={style.text}> Lower Angel's Point </Text>
          <Text style={style.description}> Lower Angel's Point in Elysian Park offers breathtaking views of the LA skyline and surrounding landscape. It's a popular spot for locals and tourists seeking panoramic vistas and a tranquil escape, featuring hiking trails and picnic areas for outdoor recreation and relaxation.
          </Text>
          <Pressable style={style.bookc} onPress={onPressFunctionBookmark}>
          {isBookmarked? (<Image source={require("@/assets/images/bookmark.png")} style={style.book}/>)
          : (<Image source={require("@/assets/images/book.png")} style={style.book}/>)}
        </Pressable>
        <Image source={require("@/assets/images/musicstars.png")} style={style.stars}/>
        <Pressable onPress={onPressFunctionLink} style={style.addresscontainer}>
          <Text style={style.address}> 2050 Imperial Street, Los Angeles, CA, 90021</Text>
        </Pressable>
        <Pressable style={style.homearrow} onPress={onPressFunctionHomeArrow}>
          <Image source={require('@/assets/images/homearrow.png')} style={style.homearrow}/>
        </Pressable>
    </View>
    )
}

export default nightgallery

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
        marginLeft: 19,
        marginTop: 732,
        position: "absolute",
    },

    stars: {
      height: 26,
      width: 156,
      top: 688,
      left: 20,
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
      top: 634,
      position: "absolute",
    },


    text: {
        marginTop: 641,
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
      backgroundColor: "rgba(120, 122, 41, 0.82)",
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