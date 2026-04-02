import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';

import Button from "../../components/Button";
import ImageViewer from "@/components/ImageViewer";

const PlaceholderImage = require('../../assets/images/teste-charizard.jpg');

export default function Index() {
  
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1
    });

    if (!result.canceled) {
      console.log(result);
    }
    else {
      alert('You did not selected any image.');
    }
  }
  
  return (
    <LinearGradient // funciona como View
      colors={["#6542a1ff", "#3E1B79", "#1b0346ff"]}
      // colors={["#990000ff", "#441717"]}
      style={styles.container}>
        
        <View style={styles.imageContainer}>
          <ImageViewer imgSource={PlaceholderImage} />
          {/* <Image source={PlaceholderImage} style={styles.image} /> */}
        </View>

        <Text style={styles.text}>
          Imagem Qualquer
        </Text>

        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a picture" />
          <Button label="Use this picture" />
        </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,     // espaço entre imagem e texto
  },
  text: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20
  },
  footerContainer: {
    flex: 1/3,
    alignItems: 'center'
  }
});