import { StyleSheet, Text, View, ScrollView, Pressable, } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import nightgallery from './nightgallery'
import { Image } from 'expo-image'
import HomeCatButtons from '@/components/HomeCatButtons'
import Profile from './profile'

const Shophome = () => {
    
  const onPressFunctionMaple = () => {
    router.push("/maple")
  };

    return (
      <View style={style.container}>
        <View>
        <Pressable onPress={onPressFunctionMaple} style={style.bakerycontainer}>
            <Image source={"https://s3-alpha-sig.figma.com/img/5b54/5305/14a77335c63d540cd7bfbedaf979b809?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KOFFV-xuJ~BYScInCZg3O5eq14-lGUv-aE~bWKFawvFkD2g0g37trKHmuPJXKyW0gfeBPb4hNU6j3PaYVjvgwGLZTlLkKZMyMEtqH1KdLuQ3lcUA~A0YDhxn7T7JbdCzUSw1i9HHbVxYjxmLsiaNWFb~WnLSP3R0COom3Eb7vCxrzOY2EYHSycBsDOKsYkRvMdV9BjfHLJOcz4iLgeguxhyOIrrGMEDeE0LQxsjqrVI71Fn0PXy~RFt6FSWu7ekALak9Ys5M8ZR24FvHNRJ-BINKYIFskjgWEFIhc~zFOkJSNurcuFr5ShEdreItKqt3FrMErytEgNhE91Uelr0Lbw__"} style={style.bakery}/>
            </Pressable>
            <Image source={"https://s3-alpha-sig.figma.com/img/63ee/fbc0/a9b1643a6a58c7b03d5bf9b4de76da27?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FcpymOD6EsdH~Gjcqj-O5oWG0PRXi0KJZgI~EQcD07mZvIVeDak29QhuBM1uATE9YKb-ZBMxNS9XmPXy4JC6frZfq-YGj2ORecarMKaS2JPlqwuD7EEShwCGcZk0iXkR39uDziBCVvRPCRRzdEb5h-uWXPXJCL1Prwl7AIxTHrRj~5Bna8Z8Z13id6YeMYBrxi1ZdCKkV3jNiH9LJBElbmr8M2Nf2d9pPuMg7Rl83ymJXo0cGUdxIPHDgNVaXXdkbECvWZWeoEiiKE4Tb0FLwxDiW~Yyrhdo6LBQXfo2L1jRYkmxU-~O7q6q~73HiVBjVSzO5-zCP3fNclSRIAwbtg__"} style={style.food}/>
            <Image source={"https://s3-alpha-sig.figma.com/img/8762/0ff2/2d0d62ebb8fdf4790458897d856e728f?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A8LQFOZfFOHAyrq17mRCIRD9kHrXGU7oLLKEIuEDmdDaKFZP8Ff9PQ6mwKXo3jy15opWszQaPShpmupmXqhmqYueIdovpTAF88z-EFkz2ie1VgZAyt~K4zYOz77y-4JEhOh4LRadFu448NPTQkydTNDcfgfGCfcgAl7P4BUPKSHDg3JQ~QZTgA0lU8VWd1CUk8O9u45hlB1LFXAHfnZsZW6yWlTqGBxMGyw8eck1eJGHCvS0Ygnx4u7siK6wwPUGEBXIR7o~9-PeJYXK1uaWGzzkdFRFmy2rdi7iDKgNGVNKkWoJzdREZ-L2DN0B1JPQnY8Gm2coshdC-aJcnYUkyA__"} style={style.food3}/>
            <Image source={"https://s3-alpha-sig.figma.com/img/aa38/d8f6/2e03b9a9be3a3905db4c1e415f3a9261?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gItxU9WLgeZTcjqbY0zvTILUR~J424w5oybXCezLBFh8stiS86Bg~BGV~jqnRDNcYMeHC7L3hDAzWU8i0l3hYpMzhocICVf2WDV6FBdiXtIggFqJ6dtNwwxLH7bd6JAyahe16DeYZYZcB0Frvf76mfTVg4ZC2hm4cy64TM6VfkXpe2qLoo-fk~VTgReprxljcbbXxBwPo8aSnAshlQFxqdLJEW8USrdfQPq2zND0Bs-hDZZt3vbEKXkzVgBRKdYDKQ6qvqg0mEeVIKas0JDQojQp5NNSAA1JGoV~jw1qDOw5REYKd0hfDWY8cahWKK4mYFWwCJu233uVFpxTtpNsIg__"} style={style.food2}/>
        </View>
      </View>
    )
}

export default Shophome

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
      width: 181,
      height: 288,
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