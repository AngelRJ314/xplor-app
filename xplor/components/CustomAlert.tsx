import {
    StyleSheet,
    Platform,
    Text,
    View,
    ImageBackground,
    Pressable,
    ScrollView,
    TextInput,
    Modal,
  } from "react-native";
  import { Link, router, Stack } from "expo-router";
  import { SafeAreaView } from "react-native-safe-area-context";
  import CustomButton from "@/components/CategoryButton";
  import { useState } from "react";
  import { Image } from "expo-image";

const [modalVisible, setModalVisible] = useState(false)
    
const CustomAlert = () => {
    return (
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <Text> Hello </Text>
      </Modal>
    )
}

export default CustomAlert
