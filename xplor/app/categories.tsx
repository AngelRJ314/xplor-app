import { Image, Text, View, StyleSheet, Button, Pressable } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CategoryButton from '@/components/CategoryButton';

export default function App() {

    const onPressFunctionContinue = () => {
        
    }

    return(
        <View style={styles.container}>
            <Text style={styles.header}> What Are You Interested In?</Text>
            <Text style={styles.miniHeader}> Please Select 2 Or More</Text>
            <View style={styles.buttons}>
                <CategoryButton title="Art" image={require("@/assets/images/Los-Angeles-Street-Art.jpg")} style={styles.box}/>
                <CategoryButton title="Nightlife" image={require("@/assets/images/Skyline.webp")} style={styles.box}/>
                <CategoryButton title="Site Seeing" image={require("@/assets/images/Seeing.jpg")} style={styles.box}/>
                <CategoryButton title="History" image={require("@/assets/images/History.jpeg")} style={styles.box}/>
                <CategoryButton title="Parks" image={require("@/assets/images/Grandpark.jpg")} style={styles.box}/>
                <CategoryButton title="Music" image={require("@/assets/images/Music.webp")} style={styles.box}/>
                <CategoryButton title="Dining" image={require("@/assets/images/Food.jpg")} style={styles.box}/>
                <CategoryButton title="Shopping" image={require("@/assets/images/Shopping.jpg")} style={styles.box}/>
             </View>
             <View>
                <Pressable onPress={onPressFunctionContinue}>
                    <Text style={styles.continue}> Continue . . . </Text>
                </Pressable>
             </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FCF1DA",
        flex: 1,
    },

    continue: {
        // borderWidth: 3,
        // borderRadius: 10,
        // borderColor: "#977B60",
        color: "#977B60",
        fontSize: 26.388,
        fontFamily: "Arial Rounded MT Bold",
        marginTop: 10,
        marginLeft: 250,
    },

    buttons: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'center',
        marginTop: 17,
    },

    box: {
        margin: 10,
    },

    header: {
        textAlign: "center",
        fontSize: 49.636,
        fontFamily: "Arial Rounded MT Bold",
        flexWrap: "wrap",
        marginTop: 49.636,
        color: "#977B60",
    },

    miniHeader: {
        textAlign: "center",
        marginTop: 15,
        fontFamily: "Arial Rounded MT Bold",
        color: "#977B60",
        fontSize: 15.634,

    }
})