import { Tabs } from "expo-router";

export default function TabLayout() {
  return(
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Página Inicial" }} />
      <Tabs.Screen name="about" options={{ title: "Página Sobre" }} />
    </Tabs>
  )
}