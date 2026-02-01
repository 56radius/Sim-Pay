import { Stack, router } from "expo-router";
import { StatusBar } from "expo-status-bar";

//import icons
import { Ionicons } from "@expo/vector-icons";


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
            title: "Airtime Bundles",
            headerLeft: () => (<Ionicons  
                                    name="arrow-back" 
                                    size={24} 
                                    onPress={() => router.back() }
                                />)
          }}
        />

        <Stack.Screen 
          name="data"
          options={{
            title: "Get Data",
            headerLeft: () => (<Ionicons 
                                    name="arrow-back"
                                    size={24}
                                    onPress={() => router.back()}
                                />)
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