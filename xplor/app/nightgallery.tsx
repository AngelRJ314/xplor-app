import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
  Button,
  Alert,
  Dimensions,
} from "react-native";
import React, { useRef, useState, } from "react";
import { router } from "expo-router";
import VisitingPage from "@/components/VisitingPage";
import { useCallback } from "react";
import * as Linking from "expo-linking";
import CustomCarousel from "@/components/Carousel";

interface urlProps {
  url?: string;
}

const { width, height } = Dimensions.get("window");
const supportedURL = "https://google.com";

const onPressFunctionLink = () => {
  Linking.openURL(
    "https://maps.app.goo.gl/2dYKnKkUiTKi7kEYA?g_st=com.google.maps.preview.copy"
  );
};

const swipe = [
  { title: "1", illustration: require("@/assets/images/nightpic1.jpeg") },
  { title: "2", illustartion: require("@/assets/images/Music.webp") },
  { title: "3", illustartion: require("@/assets/images/Food.jpg") },
];

const imagesArray = [
  "https://dza2a2ql7zktf.cloudfront.net/binaries-cdn/dqzqcuqf9/image/fetch/q_auto,dpr_auto,c_fill,f_auto,w_auto/https://d2u3kfwd92fzu7.cloudfront.net/asset/cms/Art_Basel_OVN_Los_Angeles_April_Bey_Gavlak1.jpg",
  "https://img.artlogic.net/w_800,h_800,c_limit/exhibit-e/58efe75202a9377c212b12c6/1573411e0cadfba80b95639e1c929fac.jpeg",
  "https://static.frieze.com/files/event/main/20240119_NightGallery-WandaKoop-0160-4000px.jpg?VersionId=8j4n47mQ0IYMjhxtE58E7ZAHe3wA23fL",
];

const onPressFunctionBookmark = () => {
  Alert.alert("Bookmark Saved")
};

const nightgallery = () => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const onScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / width);
    setActiveIndex(index);
  };

  const goToPage = (index: number) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: index * width, animated: true });
    }
  };

  const onPressFunctionHomeArrow = () => { 
    router.back()
  };

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
      <Image
        style={style.grad}
        source={require("@/assets/images/nightgradient.png")}
      />
      <Pressable style={style.bookc} onPress={onPressFunctionBookmark}>
          {isBookmarked? (<Image source={require("@/assets/images/bookmark.png")} style={style.book}/>)
          : (<Image source={require("@/assets/images/book.png")} style={style.book}/>)}
        </Pressable>
      <Image
        style={style.stars}
        source={require("@/assets/images/nightstars.png")}
      />
      <Text style={style.text}> Night gallery </Text>
      <Text style={style.description}>
        {" "}
        Night Gallery in downtown LA is a contemporary art hotspot in the arts
        district, known for its sleek space and diverse exhibitions. It features
        innovative works in painting and sculpture, attracting art enthusiasts
        and collectors with its dynamic atmosphere and regular events.
      </Text>
      <Pressable onPress={onPressFunctionLink} style={style.addresscontainer}>
        <Text style={style.address}>
          {" "}
          2050 Imperial Street, Los Angeles, CA, 90021
        </Text>
      </Pressable>
    </View>
  );
};

export default nightgallery;

const style = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },

  // images: {
  //   width: "100%",
  //   height: "100%",
  // },

  homearrow: {
    width: 43,
    height: 43,
    marginTop: 40,
    marginBottom: 516,
    marginLeft: 15,
    borderWidth: 0,
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
    top: 635,
    position: "absolute",
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

  address: {
    color: "#000000",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "bold",
    marginTop: 0,
    marginLeft: 0,
    // width: 282,
    textAlign: "center",
  },

  addresscontainer: {
    width: 394,
    height: 58,
    justifyContent: "center",
    marginTop: 831,
    marginLeft: 18,
    borderRadius: 12,
    backgroundColor: "#14959B",
    position: "absolute",
  },

  stars: {
    width: 156,
    height: 26,
    marginLeft: 20,
    marginTop: 695,
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

  scrollView: {
    width: "100%",
  },
  carouselItem: {
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: height * 0.4,
  },
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: 10,
    alignSelf: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#000",
    margin: 5,
  },
});
