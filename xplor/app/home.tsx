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
import ProPlus from "@/components/ProPlus";
import Parkshome from "./parks";
import Sighthome from "./sights";
import Nighthome from "./nightlife";
import Shophome from "./shopping";
import Musichome from "./musica";

const home = () => {
  const [foodActive, setFoodActive] = useState(false);
  const [historyActive, setHistoryActive] = useState(false);
  const [artActive, setArtActive] = useState(false);
  const [parksActive, setParksActive] = useState(false);
  const [sightActive, setSightActive] = useState(false);
  const [shoppingActive, setShoppingActive] = useState(false);
  const [nightActive, setNightActive] = useState(false);
  const [musicActive, setMusicActive] = useState(false);
  const [allActive, setAllActive] = useState(false);

  const local = useLocalSearchParams();
  const categories = local.categories;

  const categoriesArray = (categories || "").split(",");
  // const categoriesArray = categories.split(',');

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
      if (category == "Parks") {
        setParksActive(true);
      }
      if (category == "Site Seeing") {
        setSightActive(true);
      }
      if (category == "Shopping") {
        setShoppingActive(true);
      }
      if (category == "Nightlife") {
        setNightActive(true);
      }
      if (category == "Music") {
        setMusicActive(true);
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

  const onPressFunctionAll = () => {
    {
      setAllActive(!allActive);
      setArtActive(true);
      setFoodActive(true);
      setHistoryActive(true);
      setParksActive(true);
      setSightActive(true);
      setNightActive(true);
      setShoppingActive(true);
      setMusicActive(true);
    }
  };

  const onPressFunctionFood = () => {
    {
      // foodActive ? setFoodActive(false) : setFoodActive(true);
      setFoodActive(!foodActive);
    }
  };

  const onPressFunctionHistory = () => {
    {
      // historyActive ? setHistoryActive(false) : setHistoryActive(true);
      setHistoryActive(!historyActive);
    }
  };

  const onPressFunctionArt = () => {
    {
      // artActive ? setArtActive(false) : setArtActive(true);
      setArtActive(!artActive);
    }
  };

  const onPressFunctionParks = () => {
    {
      setParksActive(!parksActive);
      // parksActive ? setParksActive(false) : setParksActive(true);
    }
  };

  const onPressFunctionSight = () => {
    {
      // historyActive ? setHistoryActive(false) : setHistoryActive(true);
      setSightActive(!sightActive);
    }
  };

  return (
    <View style={style.container}>
      <View style={style.logocontainer}>
        <Image
          source={require("@/assets/images/beglogo.png")}
          style={style.homeimage}
        />
        <Text style={style.xplor}> Xplor </Text>
        {/* <ProPlus/> */}
        <ScrollView horizontal={true}>
          <Pressable onPress={onPressFunctionAll} style={style.bcontainer}>
            <Text style={style.text}> All </Text>
          </Pressable>
          <Pressable onPress={onPressFunctionFood} style={style.fcontainer}>
            <Text style={style.text}> Food </Text>
          </Pressable>
          <Pressable onPress={onPressFunctionHistory} style={style.hcontainer}>
            <Text style={style.text}> History </Text>
          </Pressable>
          <Pressable onPress={onPressFunctionArt} style={style.acontainer}>
            <Text style={style.text}> Art </Text>
          </Pressable>
          <Pressable onPress={onPressFunctionParks} style={style.pcontainer}>
            <Text style={style.text}> Parks </Text>
          </Pressable>
          <ProPlus />
        </ScrollView>
      </View>

        <View style={style.pincontainer}>
          <ScrollView horizontal>
          <Pressable
            onPress={onPressFunctionNight1}
            style={style.nightgallerycontainer}
          >
            <Image
              source={
                "https://dza2a2ql7zktf.cloudfront.net/binaries-cdn/dqzqcuqf9/image/fetch/q_auto,dpr_auto,c_fill,f_auto,w_auto/https://d2u3kfwd92fzu7.cloudfront.net/asset/cms/Art_Basel_OVN_Los_Angeles_April_Bey_Gavlak1.jpg"
              }
              style={style.nightgallery}
            />
            <Image
              source={require("@/assets/images/pin.png")}
              style={style.pin}
            />
          </Pressable>
          <Pressable
            onPress={onPressFunctionReserve}
            style={style.thereservecontainer}
          >
            <Image
              source={
                "https://s3-alpha-sig.figma.com/img/3aeb/ba28/7694a93f688a677c0a740f556043e7ac?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qp1zBJFGPw1QUCt6Jb6MITkoOuPHta5MOJnfbAKae8U1sKle27laP1~4P88sBxwBDCrj4UQduM5xhCW93psXLWRYJX9NV2XSux4I55c8n1csVFdJUNVUF2DRIRqXLEdtzVglSFEM-bJqVrMKcTDS1~-D9~C8i6IkCkpsyjLoDJfbKezaFZhopkj1WLdj1uJzR6-3lYc4UEaaQHqVBNAQfHzUE4nFXOXP8rJM6YxYxMOP5hR~qHBAmBJ8Z4Guwz3iPJ2h3Kmkk1N3LvLvG1whO-SCWM~lPdzEeUlDr9tAmLa3e9RssQz4RD69uVLRGBf0b0mq3b6vn5YuPth3PFgY5w__"
              }
              style={style.thereserve}
            />
            <Image
              source={require("@/assets/images/pin.png")}
              style={style.pin2}
            />
          </Pressable>
          </ScrollView>
        </View>
        <ScrollView style={style.scroll}>
        {foodActive && <Foodhome />}
        {artActive && <ArtHome />}
        {historyActive && <HistoryHome />}
        {parksActive && <Parkshome />}
        {sightActive && <Sighthome />}
        {nightActive && <Nighthome />}
        {shoppingActive && <Shophome />}
        {musicActive && <Musichome />}
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

  pin: {
    width: 37,
    height: 37,
    top: 12,
    left: 155,
    position: "absolute",
  },

  pincontainer: {
    height: 200,
  },

  pin2: {
    width: 37,
    height: 37,
    top: 8,
    left: 135,
    position: "absolute",
  },

  profile: {
    width: 43,
    height: 43,
    marginTop: 70.5,
    marginLeft: 380,
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
    top: 143,
    marginLeft: 10,
    backgroundColor: "#000000",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 2,
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
    left: 50,
    width: 150,
    height: 196,
    borderWidth: 4,
    borderRadius: 8,
    borderColor: "#FFD745",
    position: "absolute",
  },

  nightgallerycontainer: {
    width: 150,
    height: 196,
    borderWidth: 0,
    borderRadius: 8,
    position: "absolute",
  },

  thereserve: {
    // marginTop: 0,
    // left: 156,
    // top: 4,
    width: 179,
    height: 197,
    borderWidth: 4,
    borderRadius: 8,
    borderColor: "#FFD745",
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
    top: 4,
    left: 206,
    width: 179,
    height: 197,
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
    marginTop: 0,
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
