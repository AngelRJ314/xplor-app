// This is the login
import { Image, StyleSheet, Platform, Text, View, ImageBackground, Pressable } from 'react-native';
import { Link, router, Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton  from '@/components/CategoryButton';
import { useState } from 'react';

const Home = () => {

  const [create, setCreate] = useState(false);
  const onPressFunctionLogin = () => {
    router.push("/login")
    
  };
  const onPressFunctionCreate = () => {
      router.push("/create")
  };
  
 
  return (
    <View>
      <Image source={require('@/assets/images/DTLA.png')} style={styles.dtla}/>
      <Image source={require('@/assets/images/beglogo.png')} style={styles.xplorContainer}/>
      <Text style={styles.welcome}>
          Welcome to Xplor
      </Text>
      <Text style={styles.dlap}>
        Discover, Learn, and Promote
      </Text>
      <Pressable onPress={onPressFunctionLogin} style={styles.loginbox}>
        <Text style={styles.login}>
          Login
        </Text>
      </Pressable>
      <Pressable onPress={onPressFunctionCreate} style={styles.createbox}>
        <Text style={styles.createaccount}>
          Create Account 
        </Text>
      </Pressable>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  dtla: {
  width: 430,
  height: 932,
  shadowOpacity: 0.5,
  opacity: 1,
  },
  xplorContainer: {
    width: 300,
    height: 300,
    marginLeft: 69,
    marginTop: 78,
    position: "absolute",
  },
  linkContainer: {
    color: 'black',
    textAlign: "center",
    justifyContent: "center",
    position: "absolute",
    marginTop: 100,
    fontSize: 70,
  },

  loginbox: {
    width: 394,
    height: 70,
    borderRadius: 12,
    borderWidth: 3,
    marginHorizontal: 18,
    marginTop: 668,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },

  login: {
    color: "black",
    fontSize: 29,
    fontStyle: "normal",
    fontWeight: "bold",
    alignItems: "center",
    position: "absolute",
  },

  createbox: {
    width: 394,
    height: 70,
    borderRadius: 12,
    borderWidth: 3,
    marginHorizontal: 18,
    marginTop: 746,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },

  createaccount: {
    color: "black",
    // fontFamily: 'Inter',
    fontSize: 29,
    fontStyle: "normal",
    fontWeight: "bold",
    alignItems: "center",
    position: "absolute",
  },

  welcome: {
    color: "white",
    // fontFamily: "Inter",
    marginTop: 386,
    marginHorizontal: 41,
    fontSize: 39,
    fontStyle: "normal",
    fontWeight: "bold",
    position: "absolute",
  },

  dlap: {
    color: "white",
 // font-family: "Inter";
    width: 201,
    height: 17,
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "bold",
    marginTop: 448,
    marginHorizontal: 114.5,
    position: "absolute",
  },
})
