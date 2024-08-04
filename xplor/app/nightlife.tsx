import { StyleSheet, Text, View, ScrollView, Pressable, } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import nightgallery from './nightgallery'
import { Image } from 'expo-image'
import HomeCatButtons from '@/components/HomeCatButtons'
import Profile from './profile'

const Nighthome = () => {
    
  const onPressFunctionReserve = () => {
    router.push("/reserve")
  };

    return (
      <View style={style.container}>
        <View>
        <Pressable onPress={onPressFunctionReserve} style={style.bakerycontainer}>
            <Image source={"https://s3-alpha-sig.figma.com/img/3aeb/ba28/7694a93f688a677c0a740f556043e7ac?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qp1zBJFGPw1QUCt6Jb6MITkoOuPHta5MOJnfbAKae8U1sKle27laP1~4P88sBxwBDCrj4UQduM5xhCW93psXLWRYJX9NV2XSux4I55c8n1csVFdJUNVUF2DRIRqXLEdtzVglSFEM-bJqVrMKcTDS1~-D9~C8i6IkCkpsyjLoDJfbKezaFZhopkj1WLdj1uJzR6-3lYc4UEaaQHqVBNAQfHzUE4nFXOXP8rJM6YxYxMOP5hR~qHBAmBJ8Z4Guwz3iPJ2h3Kmkk1N3LvLvG1whO-SCWM~lPdzEeUlDr9tAmLa3e9RssQz4RD69uVLRGBf0b0mq3b6vn5YuPth3PFgY5w__"} style={style.bakery}/>
            </Pressable>
            <Image source={"https://s3-alpha-sig.figma.com/img/8433/6469/c71cdf936c4d424d5c1f915f2475f3c1?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OyTc9j-g07TRlvLE7B1fDBlenLCt3zlYWpDDmAXtVyvRcYTx9CPxlI4V64UQTdO8LmYGLAV0tsqUfgCohr-UBr-04zmhLpw~0G5bStj4X3hsSqCG~h7Ji98gAd-xvcxpNqFHCX6~9r-YcKNJjKohCf3-qn8MN4N7XBWv9KNXtMSc6WdmbSXaXyb0xo0jBgAc2mkaXTaRWdC0Ko9AB7MxjrpL2-ktF294ZyRFbxTO6Fr1cQoSMTOa9FuZPJau0deNucerenT0Tcj6HXU-dZ8If3pXFIMRc414Tdr3pVAoITT8uCN3rnhHV43z8uIGNK6XZLJ6gtthVsBO~T1k8Gcr1g__"} style={style.food}/>
            <Image source={"https://s3-alpha-sig.figma.com/img/6312/1ed8/36f373d540fc6271e72e5dcff9a61e45?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f10s7lR5VjLro20~1LT5cVKBT5up9rXiZho~8Ln~B6TX8wtEfW1-5ZNbj5KfYVKa2D7PZ0SbOTiypZ6kvj-w01ZG~uxHe9Qj~2A0jnN~tMAQXgHGtDGvVluoP4ICkqWcnD32qvFnNUUFpLdaA31Si2lBpCCl8Hnj6wfT2OT75~joYwTFE6b0HVzPS7QnHSVlxh1mmmQjLV3wE7l9vWf-rjpcqV0RCvbEoZdPmILfjhlCl4o7DL5yk9UARRt3ceYHqoEdkqp1hZU69E--T8iZOVYquIBq45iW-K72JAJxm53PeitPvIx4aUhwq9TqT3NIkO6jh5M049ekgJZ7XfA9ew__"} style={style.food3}/>
            <Image source={"https://s3-alpha-sig.figma.com/img/c41f/1148/8553ddce9765f4cd78d4832a3639f81e?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mEMUnplu904tRrxGbLpjeXVJtsX920fcwf76GTmQKpJDfAt3XDblsWaNHUnkPocSWAFgakeaEzlqokEp09OL4~AzocBqIATicjSfWPbkT5Of0xGjYzs9pZA9NXkR5URuCbB4094X0dD4VTWMl6pUYTFqQPVnqzo5Yze5SoWEW4vPBq7vAhrpXe2QnEkqBBSy3LDeolVNbZ0iEA4e8-bcl9~4W1tW2aJw2OH3PGJsFucsmsIOdcWU~-Ng3o74Vz7b6g~g-WuzwMRdw5uspoApt0~Xd5RET85sTCpaO1nmuanOrQiaOHiE4szh0UgFcQQe36pKhIb82kBP-nDCyq1ToQ__"} style={style.food2}/>
        </View>
      </View>
    )
}

export default Nighthome

const style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#000000",
    },  

    text: {
        color: "#FFFFFF"
    },

    bakery: {
      width: 179,
      height: 288,
      borderRadius: 8,
    },
    bakerycontainer: {
      width: 179,
      height: 288,
      marginTop: 6,
      borderRadius: 8,
    },

    food2: {
      width: 181,
      height: 285,
      marginTop: 293,
      marginLeft: 251,
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
      width: 245,
      height: 288,
      borderRadius: 8,
      top: 6,
      left: 186,
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