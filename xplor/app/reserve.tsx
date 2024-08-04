import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
  Alert
} from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import VisitingPage from "@/components/VisitingPage";
import * as Linking from "expo-linking";
import CustomCarousel from "@/components/Carousel";

const onPressFunctionLink = () => {
  Linking.openURL(
    "https://www.google.com/maps/place/The+Reserve/@34.0447201,-118.2622121,15z/data=!3m1!4b1!4m6!3m5!1s0x80c2c63545599d4b:0xc53cafb3eeb64883!8m2!3d34.0447027!4d-118.2519124!16s%2Fg%2F11bwcldkb_?entry=ttu"
  );
};

const onPressFunctionHomeArrow = () => {
  router.back();
};

const imagesArray = [
  "https://s3-alpha-sig.figma.com/img/3aeb/ba28/7694a93f688a677c0a740f556043e7ac?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qp1zBJFGPw1QUCt6Jb6MITkoOuPHta5MOJnfbAKae8U1sKle27laP1~4P88sBxwBDCrj4UQduM5xhCW93psXLWRYJX9NV2XSux4I55c8n1csVFdJUNVUF2DRIRqXLEdtzVglSFEM-bJqVrMKcTDS1~-D9~C8i6IkCkpsyjLoDJfbKezaFZhopkj1WLdj1uJzR6-3lYc4UEaaQHqVBNAQfHzUE4nFXOXP8rJM6YxYxMOP5hR~qHBAmBJ8Z4Guwz3iPJ2h3Kmkk1N3LvLvG1whO-SCWM~lPdzEeUlDr9tAmLa3e9RssQz4RD69uVLRGBf0b0mq3b6vn5YuPth3PFgY5w__",
  "https://s3-alpha-sig.figma.com/img/c90f/352b/25b5359a0e593c274b0f7217bf3a529b?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UWgPnFBFBwMIF07BW7uUI~B-ULt7wdv3Jt3yB5sHXuLmmDwK723t93uds~rmjMNuZe0AkXCFECzW85QRTNldXi3gG4j0KjfpYF2gGfitsH1HKrullqCDrX64Il6CpZZj0TyA-rl-xnoQ~Tb0S9Gz9ix66eAKWUh9HqD3OfguKIqhJFTSY6z0OwnAdt3aS~7g9LlxbQtwqaxluiRwaqOsb9qf9m7FbY~CkSLCnF0EhNVWKkyfTaN81r2snXuLzgL1sLjBNtw0fipJrWNUCInSvbrrnnb0~2R7AC~PWqgJwsxab7G4pH~0Wf6vINX7bFnhgXD9oAeoUgkuUR12a5g5TQ__",
  "https://s3-alpha-sig.figma.com/img/2d2b/1fda/39ebf048ceaabb971426588a7768ca3f?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=me7S8VCGS8v0xgzgYzrYmSWZjYrubFxXF1Q9Pd-XfBleN3VbCtBgNfd21D8TvU629LxC2L5RFsoEmbz8SlM9nYE2EI6qRtCMrB~fIUfDu8PbSqtaPK5rVDNSELGQdakZvj0ubtqK-rkWPG-Ku1XzQMlQlU15kajOBrjXKl5pcGN1eNBOl-NPNz5JI~MKI1nnsppwizciSHxVUmJ5HgIgoLAU47j7-OEwQca5AeCdx6N38qvmz-wdVLcVJ2qfUyUfTIU9bClju~wzJQn5Tr4mmt8yN5jMAKib76QXuAuVtFmlg91s~3Ypv-mlgPEptAZQmZDmCcb59iehvZYmKlMv1w__",
];

const onPressFunctionBookmark = () => {
  Alert.alert("Bookmark Saved")
};

const reserve = () => {

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
      {/* <View style={style.halfslide2} /> */}

      <Image
        style={style.grad}
        source={require("@/assets/images/reservegradient.png")}
      />
      <Text style={style.text}> The Reserve </Text>
      <Pressable style={style.bookc} onPress={onPressFunctionBookmark}>
        <Image source={require("@/assets/images/book.png")} style={style.book}/>
      </Pressable>
      <Image
        style={style.stars}
        source={require("@/assets/images/reservestar.png")}
      />
      <Text style={style.description}>
        {" "}
        The Reserve is a prestigious private club nestled in downtown Los
        Angeles, known for its luxurious ambiance and exclusive offerings.
        Members enjoy fine dining, elegant lounges, and personalized concierge
        services, making it a sought-after destination for professionals and
        individuals seeking a refined social experience.
      </Text>
      <Pressable onPress={onPressFunctionLink} style={style.addresscontainer}>
        <Text style={style.address}>
          {" "}
          650 South Spring Street, Los Angeles, CA, 90014
        </Text>
      </Pressable>
    </View>
  );
};

export default reserve;

const style = StyleSheet.create({
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
    marginTop: 716,
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
    textAlign: "center",
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
});
