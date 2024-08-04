import {
  StyleSheet,
  Platform,
  Text,
  View,
  ImageBackground,
  Pressable,
  ScrollView,
  TextInput,
  Modal,
  Alert,
} from "react-native";
import { Link, router, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CategoryButton";
import { useState } from "react";
import { Image } from "expo-image";
import CustomAlert from "@/components/CustomAlert";

const Contribution = () => {
  const onPressFunctionBack = () => {
    router.back();
  };

  const onPressFunctionSubmit = () => {
    Alert.alert("Thank you for submitting")
  };

  const onPressFunctionCam = () => {
    Alert.alert("You have added photos")
  };


  return (
    <View style={style.container}>
      <Pressable onPress={onPressFunctionBack}>
        <Image
          source={require("@/assets/images/homearrow.png")}
          style={style.arrow}
        />
      </Pressable>
      <Text style={style.header}> Add a place </Text>
      <Text style={style.header2}> Provide information about this place. We will look at your submit and it will be made public in our app. </Text>
      <Text style={style.p}> Place Name </Text>
      <TextInput style={style.pninput}> </TextInput>
      <Text style={style.c}> Category </Text>
      <TextInput style={style.cinput}> </TextInput>
      <Text style={style.a}> Address </Text>
      <TextInput style={style.ainput}> </TextInput>
      <Pressable onPress={onPressFunctionCam} style={style.camcon}>
        <Image source={require("@/assets/images/cam.png")} style={style.cam}/>
        <Text style={style.photo}> Add Photos</Text>
      </Pressable>
      <Pressable onPress={onPressFunctionSubmit} style={style.submitc} > 
        <Text style={style.submit}> Submit </Text>
      </Pressable>
    </View>
  );
};

export default Contribution;

const style = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },

  camcon: {
    width: 170,
    height: 44,
    borderWidth: 3,
    borderRadius: 12,
    borderColor: "#A6A5A5",
    top: 650,
    left: 20,
    justifyContent: "center",
    position: "absolute",
  },

  cam: {
    width: 28.9,
    height: 26,
    left: 14,
    position: "absolute"
  },

  photo: {
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: 500,
    left: 58,
    position: "absolute"
  },

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
    width: 369,
    fontSize: 15,
    marginTop: 214,
    marginLeft: 30.5,
    fontStyle: "normal",
    fontWeight: 400,
    position: "absolute",
  },

  p: {
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: 500,
    marginTop: 310,
    marginLeft: 20,
    position: "absolute",
  },

  c: {
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: 500,
    marginTop: 426,
    marginLeft: 20,
    position: "absolute",
  },

  a: {
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: 500,
    marginTop: 543,
    marginLeft: 20,
    position: "absolute",
  },

  pninput: {
    borderRadius: 12,
    borderWidth: 3,
    borderColor: "#A6A5A5",
    marginTop: 342,
    marginLeft: 18,
    width: 394,
    height: 68,
    position: "absolute"
  },

  cinput: {
    borderRadius: 12,
    borderWidth: 3,
    borderColor: "#A6A5A5",
    marginTop: 458,
    marginLeft: 18,
    width: 394,
    height: 68,
    position: "absolute"
  },

  ainput: {
    borderRadius: 12,
    borderWidth: 3,
    borderColor: "#A6A5A5",
    marginTop: 572,
    marginLeft: 18,
    width: 394,
    height: 68,
    position: "absolute"
  },

  submitc: {
    width: 375,
    height: 68,
    borderColor: "#A6A5A5",
    borderRadius: 12,
    borderWidth: 3,
    marginLeft: 27.5,
    marginTop: 778,
    justifyContent: "center",
    position: "absolute"
  },

  submit: {
    fontSize: 39,
    fontStyle: "normal",
    fontWeight: "bold",
    textAlign: "center",
  }
});
