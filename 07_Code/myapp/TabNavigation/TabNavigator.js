import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MaterialCommunityIcons } from "react-native-vector-icons"
import { Screen1 } from "../components/Screen1"
import { Screen2 } from "../components/Screen2"
const Tab = createBottomTabNavigator()
export const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name='screen1' component={Screen1} options={{
                title: "HOME",
                tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={26} />
            }} />
            <Tab.Screen name='screen2' component={Screen2} options={{
                title: "SETTING",
                tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account-search" color={color} size={26} />
            }} />
        </Tab.Navigator>
    )

}