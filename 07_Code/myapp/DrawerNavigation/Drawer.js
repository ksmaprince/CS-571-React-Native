import { createDrawerNavigator } from "@react-navigation/drawer"
import "react-native-gesture-handler"
import { Screen1 } from "../components/Screen2";
import { Screen2 } from "../components/Screen1";

const Drawer = createDrawerNavigator();
export default function DrawerNavigation(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="screen1" component={Screen1} options={{title:"My Home"}}/>
            <Drawer.Screen name="screen2" component={Screen2} options={{title:"Setting"}}/>
        </Drawer.Navigator>
    )
}

