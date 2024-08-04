import { StyleSheet, Text, View, ScrollView, Pressable, } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import nightgallery from './nightgallery'
import { Image } from 'expo-image'
import HomeCatButtons from '@/components/HomeCatButtons'
import Profile from './profile'

const Musichome = () => {
    
  const onPressFunctionMusic = () => {
    router.push("/music")
  };

    return (
      <View style={style.container}>
        <View>
        <Pressable onPress={onPressFunctionMusic} style={style.bakerycontainer}>
            <Image source={"https://s3-alpha-sig.figma.com/img/3ef5/9011/9e846610fb52a37c92d689e5766b1c33?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ir7XpEV5NgmeV7W02e44uMS7QVb7dldJML-CqoqfOPIbfGRgTauWabPxf~elIOzdc8yggEiUkfoaxy~lcx3H3bQLb204bNAGieVsrS2AfpaPIvFAa-JQsSwl5~QcpEbZ46oGAYJzv9hXueq4jOGTuTGQTJrQnfEiGGDWa~n-ZaPKQ-gkj4bpWB4oXuaT8ZsNW2I2c5fE2wlVHvhf0XqlL0J4tuDuVinkA20Bc6DXOfklOm0mTvw8LulRbQTO~6vQnHNPI~y-T54cUNUJ7kswVtytrkuOZAjDjCFu11i8ZaFNsiB4CXhnaDACTzPooTH1CQ1mA3IXGtEe2DKVQwDBPA__"} style={style.bakery}/>
            </Pressable>
            <Image source={"https://s3-alpha-sig.figma.com/img/4da8/1695/4a01857ee3109bb37667989ccb8cb261?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=crscP4-KKPQowD9IhpqzS2KoinQ~ao8-lVOyvLL7jPwJTapVJ6kbZGM-bm7A1JXxphXz2Nai57B4ipSmIKvGfS4CaPEhFhGtzNoE7YLQ9V4qfLP65ywR4OPrt-Ydx5roEniFtNc~WzEY39FQ2E6XcDBysPj5OTdjwMVz2-yR5LRaWpunp8daHrDVv8rRQYjVBQBEuT6auwh1fjBGP13-BLvTNuMtXbUJBF03ijqrJbDis8e~wFMgTsYGJo0Q94X3dpK-EgG1V6l9D5ut9PTWMGV8fN7b4P7kaSRPNRGGKRwIW5iGsCU2AyrZWMsrCTKDI8BKkLuEriGn02n0ZHOIrA__"} style={style.food}/>
            <Image source={"https://s3-alpha-sig.figma.com/img/1dce/42f5/8127a8ede48db06bef506f6f7eda620d?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I6hH7HC-36fjq5V7P-88HvFMt3XxlzAIGF-cwKoEyEeRpH2tUadfmRmbZhqK1I5veS37WZ-60DSMFTcpgccx~Q-KynGHnbxrTTEiI2L9QnGix3W3vVH6O~22EaAZ~EGYrjNUvWl4xc18M8OxjY2gZcmUN5-dDn~x-O6dK9Tm99rqpOlS9~ov~hNXGT-UI8bmwss8wouV10pSk0wcLP64wZMEgVQHAQ9SxZYBJy630kMWyxHj6iuZlzmANqGuny5xtitLM4IySZvUTpywt5YiatpOR5ApF4XVrbrp2X7I2uMpLTpn1c0LoFYYS8UbEUuacnuO-dan3SB~kqLi5ZTPwQ__"} style={style.food3}/>
            <Image source={"https://s3-alpha-sig.figma.com/img/c093/85de/006448259792c7a4c6ad81af7381ed07?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jQD8HeYKSW1Y2OfYxj2NmXssH-5b~sPw9qO67Z~BfOSyL8gnHLacmDIP-06uVARO7KPNUUJsxmYUQY72poH0vAwSlbkXoMamILfHLZ02~oxvDq7a1tLXhIEEpbv4nEWJbgQEBQx6qB~Z85ykqD9GHQTeOPIGyvjZNuYMtUAHF4asfXyEIG3i1d8G7KqyFXZQy-6qDQ7PQ-Tz~BMYlfscEq~zIjjnYnDy9AfK9ZH2ncuWTCz8tc5iUNhdxTLIgcxjHy6-4eQv2r~APAMdXYZoI2nD9yeBAVWn9HvSCYdxvVf3rrPRBBRMrNjthhDcegXNQqCYzCqoOj-dD7jgUo~~8Q__"} style={style.food2}/>
        </View>
      </View>
    )
}

export default Musichome

const style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#000000",
    },  

    text: {
        color: "#FFFFFF"
    },

    bakery: {
      width: 244,
      height: 305,
      borderRadius: 8,
    },
    bakerycontainer: {
      width: 244,
      height: 305,
      marginTop: 6,
      borderRadius: 8,
    },

    food2: {
      width: 181,
      height: 288,
      marginTop: 319,
      marginLeft: 249,
      borderRadius: 8,
      position: "absolute"
    },

    food3: {
      width: 244,
      height: 288,
      marginTop: 6,
      // marginLeft: 249,
      borderRadius: 8,
    //   position: "absolute",
    },

    food: {
      width: 177,
      height: 305,
      borderRadius: 8,
      top: 6,
      left: 253,
      position: "absolute"
    },

    homeimage: {
        marginTop: 52,
        marginLeft: 6,
        width: 80,
        height: 80,
        position: "absolute",
      },
})