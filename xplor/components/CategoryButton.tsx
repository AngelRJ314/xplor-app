import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import OutlinedText from '@kdn0325/react-native-outlined-text';

interface CategoryButtonProps {
  title: string;
  image: string;
  style?: StyleProp<ViewStyle>;
  addCategory: () => void
}

export default function CategoryButton(props: CategoryButtonProps) {
  // const [continue, setContinue] =
  //     useState ()

  const [selected, setSelected] = useState(false);

  const onPressFunction = () => {
    props.addCategory();
    if (selected) {
      setSelected(false);
    } else {
      setSelected(true);
    }
  };

  return (
    <View style={props.style}>
      <Pressable
        onPress={onPressFunction}
        style={{alignItems: "center", justifyContent: "center",}}
      >
       <View style={style.checkmark}>
          <Image source={props.image} style={[style.pictures, selected ? style.pic : style.pictures]} />
          {/* {!selected && (
           <Ionicons name="checkmark-circle-outline" size={24} color="black" style={{position: 'absolute', marginTop: 15, marginRight: 10,}} />
          )} */}
          {selected && (
              <Ionicons name="checkmark-circle" size={24} color="white"
                        style={{position: 'absolute', marginTop: 5, marginRight: 5,}}/>

          )}
        </View>
        <View style={style.text}> 
          <OutlinedText
            fontSize={24.1}
            fontWeight={'bold'}
            outlineColor={'black'}
            shadowLine={2}
            text={props.title} />
        </View>
            
        {/* <Text style={style.text}> {props.title} </Text> */}
      </Pressable>
    </View>
  );
}




const style = StyleSheet.create({
  pictures: {
    width: 178,
    height: 102,
    borderRadius: 7,
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    textShadowRadius: 10,
    textShadowColor: "black",
    fontFamily: "Arial Rounded MT Bold",
    fontStyle: "normal",
    fontSize: 24.1,
    fontWeight: 800,
    color: "#FFFFFF",
    position: "absolute",
  },

  checkmark: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },

  pic: {
    borderWidth: 3,
    borderColor: "black",
  }
});
