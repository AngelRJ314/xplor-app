import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native'
import React from 'react';
import { router } from 'expo-router';
import VisitingPage from '@/components/VisitingPage';
import * as Linking from 'expo-linking';
import CustomCarousel from '@/components/Carousel';

const onPressFunctionLink = () => {
  Linking.openURL('https://www.google.com/maps/place/Plaza+Firehouse/@34.056037,-118.2490925,15z/data=!3m1!4b1!4m6!3m5!1s0x80c2c645a5f93ac5:0x6169c4620d199b67!8m2!3d34.0560197!4d-118.2387928!16s%2Fm%2F0yt1tpq?entry=ttu');
};

const imagesArray = [
    "https://live.staticflickr.com/3545/3636659323_b5e1a226d4_b.jpg",
    "https://www.discoverlosangeles.com/sites/default/files/styles/hero/public/business/the-old-plaza-firehouse/c_fit-w_1920-h_1440-crm-la-181121_oldplazafirehouse_0070-157cc6375056a36_157cc717-5056-a36f-23a637f01c758e7e.jpg.webp?itok=3Yc_j73X",
    "https://tessa2.lapl.org/digital/api/singleitem/image/photos/112168/default.jpg",
  ];

const plaza = () => {
    return(
    <View style={style.container}>
        <CustomCarousel imageArray={imagesArray} />
        <VisitingPage
        // image={"https://live.staticflickr.com/3545/3636659323_b5e1a226d4_b.jpg"} 
        />
        <Image style={style.grad} source={require("@/assets/images/plazagradient.png")}/> 
        <Text style={style.text}> Plaza Firehouse </Text>
        <Text style={style.description}> The Plaza Firehouse, a historic landmark in downtown LA, is notable for its 1884 architecture and role in the city's fire service history. Originally housing horse-drawn fire engines, it now offers visitors a glimpse into the past with its well-preserved interior, antique firefighting equipment, and exhibits on the evolution of firefighting in the region.
        </Text>
        <Pressable onPress={onPressFunctionLink} style={style.addresscontainer}>
          <Text style={style.address}> 501 N Los Angeles St, Los Angeles, CA 90012 </Text>
        </Pressable>
    </View>
    )
}

export default plaza

const style=StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
    },

    description: {
        color: "#FFFFFF",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "normal",
        width: 382,
        height: 105,
        marginLeft: 20,
        marginTop: 723,
        position: "absolute",
    },

    text: {
        marginTop: 639,
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
        textAlign: "center"
    },
    
    addresscontainer: {
      width: 394,
      height: 58,
      // alignItems: "center",
      // justifyContent: "center",
      marginTop: 839,
      marginLeft: 18,
      borderRadius: 12,
      backgroundColor: "#B35031",
      justifyContent: "center",
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
})