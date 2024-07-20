import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

interface CategoryButtonProps {
  title: string;
  image: string;
  style?: StyleProp<ViewStyle>;
}

export default function CategoryButton(props: CategoryButtonProps) {
  // const [continue, setContinue] =
  //     useState ()

  const [selected, setSelected] = useState(false);

  const onPressFunction = () => {
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
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <Image source={props.image} style={style.pictures} />
        {selected && (
          <Ionicons name="checkmark-circle-outline" size={24} color="black" />
        )}
        {!selected && (
            <Ionicons name="checkmark-circle" size={24} color="black" />
        )}
        <Text style={style.text}> {props.title} </Text>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  pictures: {
    width: 144.66,
    height: 147.38,
    borderRadius: 36,
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "black",
    fontFamily: "Arial Rounded MT Bold",
    fontStyle: "normal",
    fontSize: 24.1,
    fontWeight: 800,
    color: "#FFFFFF",
    position: "absolute",
  },
});
