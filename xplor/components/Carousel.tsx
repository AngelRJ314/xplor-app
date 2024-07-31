import * as React from "react";
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { Image } from "expo-image";
import VisitingPage from "./VisitingPage";

interface CarouselProps {
  imageArray: string[];
}

function CustomCarousel(props: CarouselProps) {
  const width: number = Math.max(Dimensions.get("window").width);
  const height: number = Math.max(Dimensions.get("window").height);

  return (
    <View style={{ flex: 1 }}>
      <Carousel
        loop
        width={width}
        height={height}
        autoPlay={false}
        data={[...new Array(3).keys()]}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log("current index:", index)}
        renderItem={({ index }) => (
          <View
          // style={{
          //     flex: 1,
          //     borderWidth: 1,
          //     justifyContent: 'center',
          // }}
          >
            <VisitingPage style={style.image} image={props.imageArray[index]} />
            {/* <Image source={"https://dza2a2ql7zktf.cloudfront.net/binaries-cdn/dqzqcuqf9/image/fetch/q_auto,dpr_auto,c_fill,f_auto,w_auto/https://d2u3kfwd92fzu7.cloudfront.net/asset/cms/Art_Basel_OVN_Los_Angeles_April_Bey_Gavlak1.jpg"}/>  */}
            {/* <Text style={{ textAlign: 'center', fontSize: 30 }}>
                            {index}
                        </Text> */}
            <View
              style={[
                style.fullslide,
                {
                  backgroundColor:
                    index == 0 ? "white" : "rgba(255, 255, 255, 0.50)",
                },
              ]}
            />
            <View
              style={[
                style.halfslide,
                {
                  backgroundColor:
                    index == 1 ? "white" : "rgba(255, 255, 255, 0.50)",
                },
              ]}
            />
            <View
              style={[
                style.halfslide2,
                {
                  backgroundColor:
                    index == 2 ? "white" : "rgba(255, 255, 255, 0.50)",
                },
              ]}
            />
          </View>
        )}
      />
    </View>
  );
}

export default CustomCarousel;

const style = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  fullslide: {
    backgroundColor: "rgba(255, 255, 255, 0.50)",
    width: 57,
    height: 6,
    borderRadius: 100,
    marginTop: 84,
    marginLeft: 117,
    position: "absolute",
  },
  halfslide: {
    backgroundColor: "rgba(255, 255, 255, 0.50)",
    width: 57,
    height: 6,
    borderRadius: 100,
    marginTop: 84,
    marginLeft: 186,
    position: "absolute",
  },

  halfslide2: {
    backgroundColor: "rgba(255, 255, 255, 0.50)",
    width: 57,
    height: 6,
    borderRadius: 100,
    marginTop: 84,
    marginLeft: 255,
    position: "absolute",
  },
});
