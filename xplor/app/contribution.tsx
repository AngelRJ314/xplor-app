import {
  StyleSheet,
  Platform,
  Text,
  View,
  ImageBackground,
  Pressable,
  ScrollView,
  TextInput,
} from "react-native";
import { Link, router, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CategoryButton";
import { useState } from "react";
import { Image } from "expo-image";

const Contribution = () => {
  const onPressFunctionBack = () => {
    router.back();
  };

  return (
    <View>
      <Pressable onPress={onPressFunctionBack}>
        <Image
          source={require("@/assets/images/homearrow.png")}
          style={style.arrow}
        />
      </Pressable>
      <Text style={style.header}> Add a place </Text>
      <Text style={style.header2}> Provide information about this place. We will look at your submit and it will be made public in our app. </Text>
    </View>
  );
};

export default Contribution;

const style = StyleSheet.create({
  arrow: {
    marginLeft: 20,
    marginTop: 66,
    position: "absolute",
    width: 43,
    height: 43,
  },

  header: {
    fontSize: 39,
    marginTop: 159,
    marginLeft: 102,
    fontStyle: "normal",
    fontWeight: "bold",
    position: "absolute",
  },

  header2: {
    fontSize: 15,
    marginTop: 214,
    marginLeft: 30.5,
    fontStyle: "normal",
    fontWeight: 400,
    position: "absolute",
  },
});
