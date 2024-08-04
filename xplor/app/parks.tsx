import { StyleSheet, Text, View, ScrollView, Pressable, } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import nightgallery from './nightgallery'
import { Image } from 'expo-image'
import HomeCatButtons from '@/components/HomeCatButtons'
import Profile from './profile'

const Parkshome = () => {

  const onPressFunctionHome = () => {
    router.replace("/home")
  };

  const onPressFunctionHistory = () => {
    router.replace("/history")
  };

  const onPressFunctionArt = () => {
    router.replace("/art")
  };

  const onPressFunctionPark = () => {
    router.push("/park")
  };

  const onPressFunctionProfile = () => {
    router.push("/profile")
  };

  const onPressFunctionPlus = () => {
    router.push("/contribution")
  };


    return (
      <View style={style.container}>
        <View>
        <Pressable onPress={onPressFunctionPark} style={style.bakerycontainer}>
            <Image source={"https://s3-alpha-sig.figma.com/img/65b9/44d9/141a2bcbcd97c245152616b8e14a9ca1?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bHN4olQytftBok5xetZ4AmeANUzK0n4RBsavBsx9vRQ9JS7cqIE4N9NU7lVh~IdHZTqBvZRAiVPbf6mT6vxdzynnTZSu~vC81IeA60rdUwJZubuadDNXzBIAEGgqTjCVv7H3R63Pou14Q923-uf9BEuoiO8uyEFS9djho9Zkaww6C8qk3mbwW906f7AoS623weouZBfGSNibL2mRnxuGntGdzVCi0hth6R4kI5LEhQYBGze8AdbKeztIzgoG2pIlFtEojg64FPrQ9AQ8CsovTk1yQXRBpwz7idtlD8~y9~93565whwfF5RCFU7MRROylMOpbmwbHBYapmjmPTiGa1w__"} style={style.bakery}/>
            </Pressable>
            <Pressable style={style.foodcontainer}>
            <Image source={"https://s3-alpha-sig.figma.com/img/8b97/8eec/a6d720c2b3f425a013d5b3fc4f03f101?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QBDH-iQ4T-X~sVlW3vO-A~NWbDWHikETlTpHCeFkuYkufW5ukQsD42xi9ri27HweGUTPsvg6XIhbz~H61cWCXOjKf3X5n2tt8Y4mcYNZGeJgL8q7XDwBv4ZFcdn8VH9uQtu-KYdYTGOmln6~OdpaIHchUImVSKUpbvMYW1~GUjcYmZfrtafvxFYuL~3pNZyDqBp2YJI0rFwyqphFe6nNQYhyVCBsatmeIwwbun9nEyAtItscgOXAe9wBDDE5PRZFy7EvsI5EihTTdi5ZEmXBpEBopb8jI0xdvMFH4VTihAoaOub~zHGIzidS~ITIKK7f9qLl52CnlvaIkFI64Qi-sA__"} style={style.food}/>
            </Pressable>
            <Image source={"https://s3-alpha-sig.figma.com/img/7ca7/cc44/4cc24a5f3ca48d98e0ab4679ee753326?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xi0zeMjTTCKA5cBIagFM3obKriiTNtEFXZyoC2F~uL4uQ0HQh60NYd~vNJrqx8eWpLvchdamYrDBEPhHM5sA8FdtUp766tdUOLxO-zZB6Rw8XX5YRWOPpGSsDfWd0-KVUnyNIrxI70sJPXxV4RDAinLLXYjMGn3uVbXh~ulMCpEbv41hpHD8y6KCu0yRH0m4m3Yg0YLLkC6yAAZ~pfU2z3egT1UTCuye~BAr3E1~ftgasBLs~nXvhl2Dt3yqRJocFyqBij8bS5yLSiV2DV2p5RJ4wWxEzx8pVbgtDZPff3bdbx5nbeqX1ATJyIr13lRpCJC4zSvvWVi4K3RGUiCEkQ__"} style={style.food3}/>
            <Image source={"https://s3-alpha-sig.figma.com/img/47e0/67e8/a001449222ae8455397fef5dcbc876f3?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UAiTkQEDa20MS-ZYLyqDOLojDF4iC8AeUaF8bal3gfq4wUbmQhLfCN~zoku92XdorNpXBT2PXwALaFJBoyEzoA9rbxe4nN6hdwTbwhUyQh7M8hiceooK7bQcFAKtA7C~FN9tIf-Wzq7KKT2xZdX75FBmy~if9ISjmOipgOD8PIdWZNZvwj9HqnKr08NDxsB6W5wLroz~Y1KcREPcxy1caj7wNoNvQNejMN3zCtOrSgwTFO7ccl8LvFiUjoNIZ3jOJeqjR61RnayFxgY1ESjSewbMlZHd05lI-opRAF9atfTGSkdmqUNt2eFwTnxoQk9C3JGL4HM5yUObeprZ93~Itg__"} style={style.food2}/>
        </View>
      </View>
    )
}

export default Parkshome

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
      height: 308,
      borderRadius: 8,
    },
    bakerycontainer: {
      width: 179,
      height: 308,
      marginTop: 6,
      borderRadius: 8,
    },

    food2: {
      width: 181,
      height: 308,
      marginTop: 320,
      marginLeft: 249,
      borderRadius: 8,
      position: "absolute"
    },

    food3: {
      width: 244,
      height: 308,
      marginTop: 6,
      // marginLeft: 249,
      borderRadius: 8,
    },

    food: {
      width: 244,
      height: 308,
      borderRadius: 8,
      position: "absolute"
    },

    foodcontainer: {
      width: 244,
      height: 308,
      marginLeft: 184,
      marginTop: 6,
      borderRadius: 8,
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
