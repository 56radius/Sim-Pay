import { Tabs } from "expo-router";

export default function TabsLayout() {
    return(
        <Tabs>
            <Tabs.Screen name="home" />
            <Tabs.Screen name="services" />
            <Tabs.Screen name="history" />
            <Tabs.Screen name="profile" />
        </Tabs>
    );
}