import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Button, Text, View } from "react-native"

const Stack = createNativeStackNavigator()

function Language({ navigation }) {
    const press = () => {
        navigation.navigate("font")
    }
    return (
        <View>
            <Text>Language</Text>
            <Button onPress={press} title="Go Font" />
        </View>
    )
}

function Font({ navigation }) {
    const press = () => {
        navigation.goBack()
    }
    return (
        <View>
            <Text>Font</Text>
            <Button onPress={press} title="Move to Language" />
        </View>
    )
}
export const Screen2 = () => {
    return (
        <Stack.Navigator initialRouteName="language">
            <Stack.Screen name="language" component={Language} />
            <Stack.Screen name="font" component={Font} />
        </Stack.Navigator>
    )
}