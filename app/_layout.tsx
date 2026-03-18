import { Stack } from "expo-router";

export default function RootLayout() {
  return(
    <Stack>
      <Stack.Screen name="index" options={{ title: "Página Inicial" }} />
      <Stack.Screen name="about" options={{ title: "Página Sobre" }} />
    </Stack>
  )
}