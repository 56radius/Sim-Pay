import { Tabs } from "expo-router";

//import icons
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabsLayout() {
    return(
        <Tabs>
            <Tabs.Screen 
                name="home" 
                options={{
                    tabBarIcon: () => <Ionicons name="home-outline" size={24} color="black" />,
                    headerShown: false,
                }}
            />

            <Tabs.Screen 
                name="bills" 
                options={{
                    tabBarIcon: () => <MaterialIcons name="dashboard" size={24} color="black" />
                }}
            />

            <Tabs.Screen 
                name="history" 
                options={{
                    tabBarIcon: () => <Ionicons name="time-outline" size={24} color="black" />
                }}
            />

            <Tabs.Screen 
                name="profile" 
                 options={{
                    tabBarIcon: () => <Ionicons name="person-outline" size={24} color="black" />
                }}
            />
        </Tabs>
    );
}