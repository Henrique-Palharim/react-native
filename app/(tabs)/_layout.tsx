import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFonts } from 'expo-font';

export default function TabLayout() {

  const [fontsLoaded] = useFonts({
    PokemonHollow: require('../../assets/fonts/PokemonHollow.ttf'),
    PokemonSolid: require('../../assets/fonts/PokemonSolid.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (

    <Tabs
      screenOptions={{
        
        // HEADER
        headerStyle: { backgroundColor: '#ffffff' }, // '#3b3b3bff'
        headerTitleStyle: { color: '#990000ff', fontFamily: "PokemonSolid", fontSize: 24 },
        headerTintColor: '#ffffff',
        headerShadowVisible: false,

        // TAB BAR
        tabBarStyle: { backgroundColor: '#ffffff', borderTopWidth: 0, elevation: 10, height: 50, },
        tabBarActiveTintColor: '#990000ff',
        // tabBarActiveBackgroundColor: '#e9bbbbff',
        tabBarInactiveTintColor: '#999',
        tabBarLabelStyle: { fontSize: 14 },
      }}
    >

      <Tabs.Screen 
        name="index" 
        options={{ title: "Início",tabBarIcon: ({ color, focused }) => (
            <Ionicons 
              name={focused ? 'home' : 'home-outline'} color={color} size={24} />
          ),
        }} 
      />

      <Tabs.Screen 
        name="about" 
        options={{ title: "Sobre", tabBarIcon: ({ color, focused }) => (
          <Ionicons 
              name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
          ),
        }} 
      />

    </Tabs>

  );

}