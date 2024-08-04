import { StyleSheet, Text, View, ScrollView, Pressable, } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import nightgallery from './nightgallery'
import { Image } from 'expo-image'
import HomeCatButtons from '@/components/HomeCatButtons'
import Profile from './profile'

const Sighthome = () => {
    
  const onPressFunctionSight = () => {
    router.push("/flowers")
  };

    return (
      <View style={style.container}>
        <View>
        <Pressable onPress={onPressFunctionSight} style={style.bakerycontainer}>
            <Image source={"https://s3-alpha-sig.figma.com/img/6291/4511/835b80d49ac3b21e041d43c9af72661a?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=foSGslUE0P2P8EWCgVTIwuZGI5G4I4~EfHEk7dpuYc6UV5qzd8GoYXy33yQHfcampPuvTBYq0xKhGBYjH7QBkcRL0uvju56vS5mbELzi8JxCkeq~IZl07SY7MOAwbALkcdKESZ4uGYhbm8KmauiJ-VCxCd9NdrmQoOrt1TKH3mfGLphqwG7Dtquy-xqKDz2HOPcR7LjdBZz8dWXqfn3zQlssCgabJyaet~B2CZPgUzdXp8L19I8AL9uTpBgDApDpI0deylhpTeLcfEUJ96Gi4rdI08gZ~BkszI9yuV7sm~YTsuqwdPE-7oCIUDQ7sQ2ZOOkk~myZJu7k~tpkab158A__"} style={style.bakery}/>
            </Pressable>
            <Image source={"https://s3-alpha-sig.figma.com/img/142e/d2f6/8d8ee0138e41cd249aa63b2c756d980f?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fKrCcgngmjvcG5ZVhj7c7RytMiY3xgJ5aA3xdjoAUOZlpyYQtNcJ6-fZxG-BecL-upTTy0ZaK~dXp4tOxPYEvZscAv3XIT0op4mB7IfnpwaHmehvJoc9btolMRGiaQ9~rwKiWrY30e9S3ZjJR8w8~GMAL08tjlJTd3Yx-vbas0TyjqRqJbo9u4FuuxXwdcEuEoTWjv310nnRrWMHn~~g7X6k9Ypo4QSlLESVwa-AJZqsOL7~heDAcRye6CHAIYslJ5mCGS9tnJYk98O83Fy0RvjBqINyXt4hCtEuw1QKUFq3ENXSioVnZ4U5PW3Opu30jAh7bMGc7IdxI4rPpsXn3Q__"} style={style.food}/>
            <Image source={"https://s3-alpha-sig.figma.com/img/7ae2/77ea/07cd97f58226ddf3cb6c354f93e200db?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DKcl-2iBLiibmiMxzXz1CiasH0tVob781luneBHAGOcK4rj5bs11Rsqrll~Hdro~RiS-hJDlAFW0rRC9GQcFFup7xpqNXjRDtKsb8TQc2nQtFAocuyuxxqa5HzmL2ykPXeFRN35HAa6cI76JqLklrbcduLkGL5grLUmBC18Ewx7Q5HFlCtZsmTtCyfPfUj4Fz~xaWxAoM77WmTjf16aW1nWbAZxHSCTI76LYiGDtMkVOhiC282m4gH7mE~auaBuy5s6-4kwqNbDxX8Y8RsV4doWJPIhm0gsMvVFXblsplx652EfsnCGLBvcJEp1v7SndRzn3QoZ0aFhfvpTsablAWg__"} style={style.food3}/>
            <Image source={"https://s3-alpha-sig.figma.com/img/787b/529b/8dbabcd0fc048463ac5ddf54954f9cce?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UusLWmqBMxY86FFHXKO4BIVmFkDWdwieuR7s~CT9pkGpG~HnwRHYM-xD6jarcxBymh8cFwVtdlbHrn8Ea-7~95qR4iiON4-Dxx-QeB9~EIHDtKuUd3JWgtdWlmJj5Nc1qTNjwloQQoN9GK~OHa3dz87l8vAqdNb~GNSowRHZAqg752s0SkprGCMZr6hKbCX07tkdxuqkdexCciB~PVTtJB9NAsSRHNoqxVcDrMspSiCYKXVcGTyYFabfKKWQY-uRc2DkSvi4VEsp~j3C-yYNy-y0cg-xHQSN27SE1O9WBFR4hxy7LmGVv7ZZVH3dQsEgRD7zl4vH1~Zh0x9ZXcFF8A__"} style={style.food2}/>
        </View>
      </View>
    )
}

export default Sighthome

const style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#000000",
    },  

    text: {
        color: "#FFFFFF"
    },

    bakery: {
      width: 251,
      height: 283,
      borderRadius: 8,
    },
    bakerycontainer: {
      width: 251,
      height: 283,
      marginTop: 6,
      borderRadius: 8,
    },

    food2: {
      width: 244,
      height: 285,
      marginTop: 293,
      marginLeft: 249,
      borderRadius: 8,
      position: "absolute"
    },

    food3: {
      width: 244,
      height: 285,
      marginTop: 6,
      // marginLeft: 249,
      borderRadius: 8,
    //   position: "absolute",
    },

    food: {
      width: 174,
      height: 283,
      borderRadius: 8,
      top: 6,
      left: 258,
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
