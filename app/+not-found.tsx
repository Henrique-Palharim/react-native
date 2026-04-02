import { View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function NotFound() {
  return (
    <>
      <LinearGradient
      colors={["#6542a1ff", "#3E1B79", "#1b0346ff"]}
        // colors={["#990000ff", "#441717"]}
        style={styles.container}>

        <Link href="/" style={styles.button}>
          Ir para tela Inicial
        </Link>
        
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffffff",
  },
  text: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 24,
  },
  button: {
    color: "#000000ff",
    fontWeight: "bold",
    backgroundColor: "#f5ff6bff",
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
  },
});