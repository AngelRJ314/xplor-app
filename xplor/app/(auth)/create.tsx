import {
  Image,
  Text,
  View,
  StyleSheet,
  Button,
  Pressable,
  TextInput,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryButton from "@/components/CategoryButton";
import { useState } from "react";
import { FA6Style } from "@expo/vector-icons/build/FontAwesome6";
import { router } from "expo-router";

const CreateAccount = () => {

  const onPressFunctionArrowCreate = () => {
    console.log("Arrow Pressed");
    router.back();
  };

  const onPressFunctionCreate = () => {
    router.replace("/categories");
  };

  return (
    <View style={style.signuppage}>
      <View> 
        <Pressable style={style.arrowc} onPress={onPressFunctionArrowCreate}>
            <Image source={require("@/assets/images/arrow.png")} style={style.arrow}/>
        </Pressable>
      </View>
      <Text style={style.header1}> Become a Xplorer  </Text>
      <Text style={style.header2}>
        {" "}
        Begin your journey, so glad to have you!
      </Text>
      <View style={style.inputs}>

      <Text style={style.fname}> First Name </Text>
      <TextInput style={style.inputf}/>
      <Text style={style.lname}> Last Name </Text>
      <TextInput style={style.inputl}/>
      <Text style={style.email}> E-mail </Text>
      <TextInput style={style.inpute}/>
      <Text style={style.password}> Password </Text>
      <TextInput style={style.inputp}/>
      </View>
    
      <View >
        <Pressable style={style.signbox} onPress={onPressFunctionCreate}>
          <Text style={style.signup}> Sign Up </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CreateAccount;

const style = StyleSheet.create({


  header1: {
    marginTop: 172,
    marginLeft: 3,
    width: 406,
    height: 47,
    fontSize: 39,
    fontStyle: "normal",
    fontWeight: "bold",
    position: "absolute"
  },

  header2: {
    color: "#A6A5A5",
    width: 368,
    height: 22,
    marginTop: 219,
    marginLeft: 10,
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: 400,
    position: "absolute"
  },

  arrow: {
    marginLeft: 0, 
    marginTop: 0, 
    width: 57, 
    height: 26,
  },

  arrowc: {
    marginLeft: 28, 
    marginTop: 114, 
    position: "absolute",  
    width: 57, 
    height: 26,
  },
  
  signuppage: {
    backgroundColor: "white",
    flex: 1,
  },

  signbox: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderRadius: 12,
    width: 394,
    height: 70,
    borderColor: "#A6A5A5",
    marginTop: 817,
    marginHorizontal: 18,
  },

  signup: {
    // marginTop: 817,
    // marginHorizontal: 18,
    textAlign: "center",
    position: "absolute",
    color: "#000000",
    fontSize: 29,
    fontStyle: "normal",
    fontWeight: "bold"
  },

  inputs:{
    // alignItems: "center",
    // justifyContent: "center",
    // position: "absolute"
  },

  inputf: {
    width: 396,
    height: 70,
    marginTop: 324,
    marginLeft: 17,
    borderColor: '#A6A5A5',
    borderWidth: 3,
    position: "absolute",
    borderRadius: 12,
  },
  inputl: {
    width: 396,
    height: 70,
    marginTop: 415,
    marginLeft: 17,
    borderColor: '#A6A5A5',
    borderWidth: 3,
    position: "absolute",
    borderRadius: 12,
  },
  inpute: {
    width: 396,
    height: 70,
    marginTop: 507,
    marginLeft: 17,
    borderColor: '#A6A5A5',
    borderWidth: 3,
    position: "absolute",
    borderRadius: 12,
  },
  inputp: {
    width: 396,
    height: 70,
    marginTop: 602,
    marginLeft: 17,
    borderColor: '#A6A5A5',
    borderWidth: 3,
    position: "absolute",
    borderRadius: 12,
  },

  fname: {
    // fontFamily: Inter,
    marginLeft: 17,
    marginTop: 303,
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "bold",
    position: "absolute",
  },

  lname: {
    marginLeft: 17,
    marginTop: 393,
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "bold",
    position: "absolute",
  },

  email: {
    marginLeft: 17,
    marginTop: 486,
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "bold",
    position: "absolute",
  },

  password: {
    marginLeft: 17,
    marginTop: 581,
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "bold",
    position: "absolute",
  }
});
