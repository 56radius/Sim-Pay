import { Stack, router } from "expo-router";

import { Ionicons } from "@expo/vector-icons";

import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return(
    <>
    <StatusBar style="light" />
      <Stack>
        <Stack.Screen 
          name="login" 
          options={{
            headerShown: false,
          }}
        />

       <Stack.Screen
          name="airtime"
          options={{
            title: "Airtime",
            headerLeft: () => (<Ionicons  name="arrow-back" size={24} onPress={() => router.back}/>)
          }}
        />


        <Stack.Screen 
          name="(tabs)" 
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}