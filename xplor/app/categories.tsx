import { Image, Text, View, StyleSheet, Button, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryButton from "@/components/CategoryButton";
import { useState } from "react";
import { FA6Style } from "@expo/vector-icons/build/FontAwesome6";
import { router } from "expo-router";


export default function App() {
  const [categories, setCategories] = useState([]);
  const [next, setNext] = useState(false);

  const anyname = (category: string) => {
    // console.log("anyname called with category:", category);

    setCategories((prevCategories) => {
      const newCategories = prevCategories.includes(category)
        ? prevCategories.filter((item) => item !== category)
        : [...prevCategories, category];

      setNext(newCategories.length > 2);

      console.log("more than 2?", newCategories.length > 2)
      console.log("Selected Categories", newCategories);
      return newCategories;
    });
  };
  const onPressFunctionNext = () => {
    console.log("Next pressed");
    router.replace("/home")
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}> What Are You </Text>
      <Text style={styles.iheader}> Interested In? </Text>
      <Text style={styles.miniHeader}> Please select 3 or more this will help us </Text>
      <Text style={styles.iminiHeader}> understand you better </Text>
      <View style={styles.buttons}>
        <CategoryButton
          addCategory={() => anyname("Art")}
          title="Art"
          image={require("@/assets/images/Los-Angeles-Street-Art.jpg")}
          style={styles.box2}
        />
        <CategoryButton
          addCategory={() => anyname("Nightlife")}
          title="Nightlife"
          image={require("@/assets/images/Skyline.webp")}
          style={styles.box2}
        />
        <CategoryButton
          addCategory={() => anyname("Site Seeing")}
          title="Site Seeing"
          image={require("@/assets/images/Seeing.jpg")}
          style={styles.box}
        />
        <CategoryButton
          addCategory={() => anyname("History")}
          title="History"
          image={require("@/assets/images/History.jpeg")}
          style={styles.box}
        />
        <CategoryButton
          addCategory={() => anyname("Parks")}
          title="Parks"
          image={require("@/assets/images/Grandpark.jpg")}
          style={styles.box}
        />
        <CategoryButton
          addCategory={() => anyname("Music")}
          title="Music"
          image={require("@/assets/images/Music.webp")}
          style={styles.box}
        />
        <CategoryButton
          addCategory={() => anyname("Dining")}
          title="Dining"
          image={require("@/assets/images/Food.jpg")}
          style={styles.box}
        />
        <CategoryButton
          addCategory={() => anyname("Shopping")}
          title="Shopping"
          image={require("@/assets/images/Shopping.jpg")}
          style={styles.box}
        />
      </View>
      <View>
        {/* <Pressable onPress={onPressFunctionNext}>
                   <Text>  </Text>
                </Pressable> */}
      </View>
      <View style={{ alignItems: "center" }}>
        <Pressable
          onPress={onPressFunctionNext}
          style={[styles.nextbox, next ? styles.nextboxEnabled : styles.nextboxDisabled]}
          disabled={!next}
        >
          <Text style={styles.nexttext}> Next </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },

  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    // marginHorizontal: 15,
    // marginTop: 37,
  },

  box: {
    marginHorizontal: 8.5,
    marginTop: 47,
  },

  box2: {
    marginHorizontal: 8.5,
    marginTop: 29,
  },

  header: {
    textAlign: "left",
    fontSize: 39,
    fontWeight: 900,
    flexShrink: 0,
    fontStyle: "normal",
    fontFamily: "Inter",
    // width: 290,
    // flexDirection: "row",
    // justifyContent: "flex-start",
    // flexWrap: "wrap",
    marginLeft: 24,
    marginTop: 9,
    color: "#000000",
  },

  miniHeader: {
    textAlign: "left",
    // flexDirection: "row",
    // justifyContent: "flex-start",
    // flexWrap: "wrap",
    // width: 290,
    marginTop: 8,
    marginLeft: 24,
    color: "#A6A5A5",
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: 15,
  },

  iminiHeader: {
    textAlign: "left",
    // flexDirection: "row",
    // justifyContent: "flex-start",
    // flexWrap: "wrap",
    // width: 290,
    marginLeft: 24,
    color: "#A6A5A5",
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: 15,
  },

  nextbox: {
    width: 161.032,
    height: 52,
    borderWidth: 3,
    borderRadius: 10.55,
    borderColor: "#D9D9D9",
    marginTop: 72,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  iheader: {
    textAlign: "left",
    fontSize: 39,
    fontWeight: 900,
    flexShrink: 0,
    fontStyle: "normal",
    fontFamily: "Inter",
    // width: 290,
    // flexDirection: "row",
    // justifyContent: "flex-start",
    // flexWrap: "wrap",
    marginLeft: 24,
    // marginTop: 9,
    color: "#000000",
  },

  nextboxEnabled: {
    backgroundColor: 'black',
    borderWidth: 3,
    borderRadius: 10.55,
    borderColor: "#000000",
  },
  nextboxDisabled: {
    backgroundColor: 'white',
  },

  nexttext: {
    //     alignItems: "center",
    //     justifyContent: "center",
    //     backgroundColor: "black",
    color: "#D9D9D9",
    fontFamily: "Inter",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: 500,
  },
});
