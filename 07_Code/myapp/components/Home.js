import { View, Button, Text } from "react-native"

export const Home = ({navigation}) => {
    const moveToSetting = () => {
        navigation.navigate('setting', {name: "Khun"})
    }
    return (
        <View>
            <Text>Home</Text>
            <Button onPress={moveToSetting} title="Setting"/>
        </View>
    )
}