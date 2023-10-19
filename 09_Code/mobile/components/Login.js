import { useContext, useState } from "react"
import { Button, TextInput, View, Text, StyleSheet} from "react-native"
import { GlobalContext } from "../Context"
import { login } from "../networking"

export const Login = () => {
    const {state, setState} = useContext(GlobalContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const pressedLogin = async ()=> {
        console.log("..Start login ..")
        try {
            const ret = await login(username, password);
            console.log(ret)
            if(ret && ret.success){
                console.log(ret)
                setState({...state, token: ret.data})
                alert("Login Success: "+ret.data)
            }
        } catch (error) {
            console.log('ERROR', error.message)
        }
    }
    const onChangeUserName = (text) => {
        setUsername(text)
    }

    const onChangePassword = (text) => {
        setPassword(text)
    }
    return(
        <View style={styles.container}>
            <Text>Login</Text>
            <TextInput 
            value={username}
            onChangeText={onChangeUserName}
            placeholder="Enter username" />
            <TextInput
            value={password}
            onChangeText={onChangePassword}
            placeholder="Enter Password"/>
            <Button onPress={pressedLogin} title="Login"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });