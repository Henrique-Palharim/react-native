import { Text, View, StyleSheet, useWindowDimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as ImagePicker from 'expo-image-picker';

import Button from "../../components/Button";
import ImageViewer from "@/components/ImageViewer";

const PlaceholderImage = require('../../assets/images/pokemons/mimikyu.jpg');

export default function Index() {

  const { width } = useWindowDimensions();
  const isMobile = width < 768; // breakpoint arbitrário, ajuste se quiser
  
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
      alert('Você não selecionou nenhuma imagem.');
    }
  }
  
  return (
    <LinearGradient
      colors={["#FAE6C9", "#D1AD72", "#72514A"]}
      style={styles.container}
    >
      {/* Container horizontal: imagem + conteúdo */}
      <View style={[styles.horizontalContainer, { flexDirection: isMobile ? 'column' : 'row' }]}>

        {/* Coluna da imagem + botões */}
        <View style={[styles.imageContainer, { marginBottom: isMobile ? 50 : 0 }]}>
          <ImageViewer 
            imgSource={PlaceholderImage} 
            style={{ width: 200, height: 300, borderRadius: 10, marginBottom: 10 }}
          />

          <View style={styles.footerContainer}>
            <Button theme="primary" label="Choose a picture" />
            <Button label="Use this picture" />
          </View>
        </View>

        {/* Coluna de texto e botões tipo/fairy */}
        <View style={styles.contentContainer}>

          <View style={styles.row}>
            <Text style={[styles.text, { color: "#fff", marginRight: 10 }]}>Type:</Text>
            <Button theme="ghost" label="Ghost" style={{ marginRight: -5 }} />
            <Button theme="fairy" label="Fairy" />
          </View>

          <Text style={styles.text}>Mimikyu</Text>

          {/* Outras informações */}
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            <Text style={[styles.text, { color: '#ffffffff', marginRight: 5 }]}>Tier:</Text>
            <Text style={[styles.text, styles.textBlue ]}>RU</Text>
          </View>

          <View style={{ flexDirection: 'row', marginBottom: 5 }}>
            <Text style={[styles.text, { color: '#ffffffff', marginRight: 5 }]}>Move1:</Text>
            <Text style={[styles.text, styles.textBlue ]}>Shadow Claw</Text>
          </View>

          <View style={{ flexDirection: 'row', marginBottom: 5 }}>
            <Text style={[styles.text, { color: '#ffffffff', marginRight: 5 }]}>Move2:</Text>
            <Text style={[styles.text, styles.textBlue ]}>Play Rough</Text>
          </View>

          <View style={{ flexDirection: 'row', marginBottom: 5 }}>
            <Text style={[styles.text, { color: '#ffffffff', marginRight: 5 }]}>Move3:</Text>
            <Text style={[styles.text, styles.textBlue ]}>Shadow Sneak</Text>
          </View>

          <View style={{ flexDirection: 'row', marginBottom: 5 }}>
            <Text style={[styles.text, { color: '#ffffffff', marginRight: 5 }]}>Move4:</Text>
            <Text style={[styles.text, styles.textBlue ]}>Swords Dance</Text>
          </View>

        </View>

      </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",   // centraliza verticalmente
    alignItems: "center",       // centraliza horizontalmente
  },
  horizontalContainer: {
    flexDirection: 'row',       // imagem e conteúdo lado a lado
    alignItems: 'center',       // centraliza verticalmente
  },
  imageContainer: {
    alignItems: "center",
    marginRight: 50,
  },

  contentContainer: {
    alignItems: 'flex-start', // alinha todo o conteúdo à esquerda
    justifyContent: 'flex-start',
  },
  text: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 10,
    color: "#ffffff", // default branco
  },
  textBlue: {         // nova "classe"
    color: "#2E78D6",
  },
  row: {
    flexDirection: 'row',      // coloca Type e botões na mesma linha
    alignItems: 'center',
    marginBottom: 10,
  },
  
  footerContainer: {
    marginTop: 10,
    alignItems: 'center',
  }
});