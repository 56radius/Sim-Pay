import { Tabs } from "expo-router";

//import icons
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabsLayout() {
    return(
        <Tabs>
            <Tabs.Screen 
                name="home" 
                options={{
                    tabBarIcon: () => <Ionicons name="home-outline" size={24} color="black" />
                }}
            />

            <Tabs.Screen 
                name="services" 
            />

            <Tabs.Screen 
                name="history" 
            />

            <Tabs.Screen 
                name="profile" 
                />
        </Tabs>
    );
}