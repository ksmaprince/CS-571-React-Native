import { Button, Text, View } from "react-native"

export const Setting = ({navigation, route}) => {
    const moveBack = () => {
        // navigation.navigate('home')
        navigation.goBack()
    }
    return (
        <View>
            <Text>Setting</Text>
            <Text>{route.params.name}</Text>
            <Button onPress={moveBack} title="Home"/>
        </View>

    )
}