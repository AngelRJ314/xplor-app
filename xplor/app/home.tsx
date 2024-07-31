import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import nightgallery from "./nightgallery";
import { Image } from "expo-image";
import HomeCatButtons from "@/components/HomeCatButtons";
import Profile from "./profile";
import Foodhome from "./food";
import ArtHome from "./art";
import HistoryHome from "./history";

const home = () => {
  const [foodActive, setFoodActive] = useState(false);
  const [historyActive, setHistoryActive] = useState(false);
  const [artActive, setArtActive] = useState(false);
  // const [foodActive, setFoodActive] = useState(false);
  // const [reserveActive, setReserveActive] = useState(false);

  const local = useLocalSearchParams();
  const categories = local.categories;

  const categoriesArray = categories.split(",");

  // console.log("These are the params", Object.keys(local));

  useEffect(() => {
    // if (categories) {
    categoriesArray.map((category) => {
      // console.log(category);
      if (category == "Dining") {
        setFoodActive(true);
      }
      if (category == "History") {
        setHistoryActive(true);
      }
      if (category == "Art") {
        setArtActive(true);
      }
    });
    // }
  }, [categories]);

  const onPressFunctionNight1 = () => {
    router.push("/nightgallery");
  };

  const onPressFunctionReserve = () => {
    router.push("/reserve");
  };

  const onPressFunctionPlaza = () => {
    router.push("/plaza");
  };

  const onPressFunctionPark = () => {
    router.push("/park");
  };

  const onPressFunctionProfile = () => {
    router.push("/profile");
  };

  const onPressFunctionBakery = () => {
    router.push("/bakery");
  };

  const onPressFunctionMusic = () => {
    router.push("/music");
  };

  const onPressFunctionMaple = () => {
    router.push("/maple");
  };

  const onPressFunctionFlowers = () => {
    router.push("/flowers");
  };

  const onPressFunctionFood = () => {
    {
      foodActive ? setFoodActive(false) : setFoodActive(true);
    }
    // setFoodActive(true);
    // router.push("/food");
  };

  const onPressFunctionHistory = () => {
    {
      historyActive ? setHistoryActive(false) : setHistoryActive(true);
    } // router.push("/history");
  };

  const onPressFunctionArt = () => {
    {
      artActive ? setArtActive(false) : setArtActive(true);
    }
    // setArtActive(true);
    // router.push("/art");
  };

  const onPressFunctionPlus = () => {
    router.push("/contribution");
  };

  return (
    <View style={style.container}>
      <View>
        <View style={style.logocontainer}>
        <Pressable style={style.profilec} onPress={onPressFunctionProfile}>
            <Image
              source={require("@/assets/images/profile.png")}
              style={style.profile}
            />
          </Pressable>
          <Pressable onPress={onPressFunctionPlus}>
            <Image
              source={require("@/assets/images/plus.png")}
              style={style.plus}
            />
          </Pressable>
          <Image
            source={require("@/assets/images/beglogo.png")}
            style={style.homeimage}
          />
          <Text style={style.xplor}> Xplor </Text>
          <ScrollView horizontal>
            <Pressable style={style.bcontainer}>
              <Text style={style.text}> All </Text>
            </Pressable>
            <Pressable onPress={onPressFunctionFood} style={style.fcontainer}>
              <Text style={style.text}> Food </Text>
            </Pressable>
            <Pressable
              onPress={onPressFunctionHistory}
              style={style.hcontainer}
            >
              <Text style={style.text}> History </Text>
            </Pressable>
            <Pressable onPress={onPressFunctionArt} style={style.acontainer}>
              <Text style={style.text}> Art </Text>
            </Pressable>
            <Pressable style={style.pcontainer}>
              <Text style={style.text}> Parks </Text>
            </Pressable>
          </ScrollView>
        </View>
      </View>

      <ScrollView style={style.scroll}>
        {/* <Pressable
          onPress={onPressFunctionNight1}
          style={style.nightgallerycontainer}
        >
          <Image
            source={
              "https://dza2a2ql7zktf.cloudfront.net/binaries-cdn/dqzqcuqf9/image/fetch/q_auto,dpr_auto,c_fill,f_auto,w_auto/https://d2u3kfwd92fzu7.cloudfront.net/asset/cms/Art_Basel_OVN_Los_Angeles_April_Bey_Gavlak1.jpg"
            }
            style={style.nightgallery}
          />
        </Pressable>
        <Pressable
          onPress={onPressFunctionReserve}
          style={style.thereservecontainer}
        >
          <Image
            source={
              "https://images.squarespace-cdn.com/content/v1/58d2c08f725e25221a206ef3/1583285753191-T3MFQ3RKSR1L2I73YQVQ/the-reserve_21743836568_o.jpg"
            }
            style={style.thereserve}
          />
        </Pressable>
        <Pressable onPress={onPressFunctionPlaza} style={style.plazacontainer}>
          <Image
            source={
              "https://live.staticflickr.com/3545/3636659323_b5e1a226d4_b.jpg"
            }
            style={style.plaza}
          />
        </Pressable>
        <Pressable onPress={onPressFunctionPark} style={style.parkcontainer}>
          <Image
            source={
              "https://farm8.staticflickr.com/7027/6534189599_6d7f9f6c8b_z.jpg"
            }
            style={style.park}
          />
        </Pressable>
        <Pressable
          onPress={onPressFunctionBakery}
          style={style.bakerycontainer}
        >
          <Image
            source={
              "https://lh3.googleusercontent.com/p/AF1QipM_wqdl2lUk_ggFqC_gRC34MFj2ufYIPKeUuANH=s1360-w1360-h1020"
            }
            style={style.bakery}
          />
        </Pressable>
        <Pressable onPress={onPressFunctionMusic} style={style.musiccontainer}>
          <Image
            source={
              "https://www.musiccenter.org/media/intjb04g/mtf.jpeg?anchor=center&mode=crop&width=1920&height=1080&rnd=132815648649270000"
            }
            style={style.music}
          />
        </Pressable>
        <Pressable onPress={onPressFunctionMaple} style={style.maplecontainer}>
          <Image
            source={
              "https://images1.loopnet.com/i2/x8wwn4HHearLbJ2DDj0kbzSIdVYiDVHGHUI_kjRXumk/110/401-E-12th-St-Los-Angeles-CA-401-E-12th-St-1-Large.jpg"
            }
            style={style.maple}
          />
        </Pressable>
        <Pressable
          onPress={onPressFunctionFlowers}
          style={style.flowercontainer}
        >
          <Image
            source={
              "https://lh3.googleusercontent.com/p/AF1QipPte9Zh6dLy7_ZhVxPlPveeOJ80VhPnq9FsCH_A=s1360-w1360-h1020"
            }
            style={style.flower}
          />
        </Pressable> */}

        {foodActive && <Foodhome />}
        {artActive && <ArtHome />}
        {historyActive && <HistoryHome />}
      </ScrollView>
    </View>
  );
};

export default home;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },

  scroll: {
    backgroundColor: "#000000",
    flex: 1,
    borderRadius: 45,
  },

  plus: {
    width: 43,
    height: 43,
    marginTop: 70.5,
    marginLeft: 332,
    position: "absolute",
  },

  profile: {
    width: 43,
    height: 43,
    // marginTop: 70.5,
    // marginLeft: 380,
    position: "absolute",
  },

  profilec: {
    width: 43,
    height: 43,
    marginTop: 70.5,
    marginLeft: 380,
    position: "absolute",
  },

  logocontainer: {
    backgroundColor: "white",
    width: 430,
    height: 210,
    borderRadius: 45,
    // position: "absolute",
  },

  homeimage: {
    marginTop: 52,
    marginLeft: 6,
    width: 80,
    height: 80,
    position: "absolute",
  },

  bcontainer: {
    width: 70,
    height: 37,
    marginTop: 143,
    marginLeft: 10,
    backgroundColor: "#000000",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },

  fcontainer: {
    width: 89,
    height: 37,
    marginTop: 143,
    marginLeft: 96,
    backgroundColor: "#000000",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },

  hcontainer: {
    width: 109,
    height: 37,
    marginTop: 143,
    marginLeft: 201,
    backgroundColor: "#000000",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },

  acontainer: {
    width: 75,
    height: 37,
    marginTop: 143,
    marginLeft: 326,
    backgroundColor: "#000000",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },

  pcontainer: {
    width: 96,
    height: 37,
    marginTop: 143,
    marginLeft: 417,
    backgroundColor: "#000000",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },

  text: {
    color: "#FFFFFF",
  },

  nightgallery: {
    marginTop: 5,
    width: 246,
    height: 288,
    borderWidth: 0,
    borderRadius: 8,
    // position: "absolute",
  },

  nightgallerycontainer: {
    // marginTop: 6,
    width: 246,
    height: 288,
    borderWidth: 0,
    borderRadius: 8,
    // position: "absolute",
  },

  thereserve: {
    // flexShrink: 0,
    marginTop: 0,
    marginLeft: 0,
    width: 246,
    height: 288,
    borderWidth: 0,
    borderRadius: 8,
    position: "absolute",
  },

  home: {
    // marginTop: 100,
    fontSize: 30,
  },
  xplor: {
    marginTop: 79.5,
    marginLeft: 89,
    fontSize: 21.048,
    fontStyle: "normal",
    fontWeight: "bold",
    position: "absolute",
  },

  thereservecontainer: {
    marginTop: 5,
    marginLeft: 251,
    width: 246,
    height: 288,
    borderWidth: 0,
    borderRadius: 8,
    position: "absolute",
  },

  plaza: {
    marginTop: 0,
    width: 288,
    height: 288,
    borderRadius: 8,
    position: "absolute",
  },

  plazacontainer: {
    marginTop: 300,
    width: 288,
    height: 288,
    borderRadius: 8,
    position: "absolute",
  },

  park: {
    width: 137,
    height: 288,
    marginTop: 0,
    borderRadius: 8,
    position: "absolute",
  },

  parkcontainer: {
    width: 137,
    height: 288,
    marginTop: 10,
    marginLeft: 293,
    borderRadius: 8,
  },

  bakery: {
    width: 179,
    height: 308,
    borderRadius: 8,
  },

  bakerycontainer: {
    width: 179,
    height: 308,
    marginTop: 7,
    borderRadius: 8,
  },

  music: {
    width: 244,
    height: 308,
    borderRadius: 8,
  },
  musiccontainer: {
    width: 244,
    height: 308,
    marginTop: 592,
    marginLeft: 184,
    borderRadius: 8,
    position: "absolute",
  },
  maple: {
    width: 171,
    height: 198,
    borderRadius: 8,
  },
  maplecontainer: {
    width: 171,
    height: 198,
    borderRadius: 8,
    marginTop: 5,
  },
  flower: {
    width: 251,
    height: 198,
    borderRadius: 8,
  },
  flowercontainer: {
    width: 251,
    height: 198,
    borderRadius: 8,
    marginTop: 906,
    marginLeft: 177,
    position: "absolute",
  },
});
