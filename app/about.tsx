import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function AboutScreen() {
  return (
    <LinearGradient // funciona como View
      colors={["#990000ff", "#441717"]}
      style={styles.container}>

      <Text style={styles.text}>
        Não pode mexer no celular
      </Text>

      <Link href="/" style={styles.button}>
        Voltar para a tela inicial
      </Link>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e98888ff",
  },
  text: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 24,
  },
  button: {
    color: "#000000ff",
    fontWeight: "bold",
    backgroundColor: "#FFADAD",
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
  },
});