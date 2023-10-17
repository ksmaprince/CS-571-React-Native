import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "../components/Home";
import { Setting } from "../components/Setting";


const Stack = createNativeStackNavigator();
export default function StackNavigation() {
    return (
        <Stack.Navigator initialRouteName="home">
            <Stack.Screen name="home" component={Home} options={{title: "My Home", headerShown: true}}/>
            <Stack.Screen name="setting" component={Setting} options={{title: "Setting", headerShown: true}} />
        </Stack.Navigator>
    )
}