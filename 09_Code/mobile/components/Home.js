import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import getMessage from '../networking';

export const Home = () => {
    const [msg, setMsg] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        async function getData() {
            try {
                let ret = await getMessage();
                if (ret.success) {
                    setMsg(ret.data)
                    setLoading(false)
                }
            } catch (error) {
                setError(error.TypeError)
            }
        }
        getData();
    }, [])
    if (loading) {
        <View style={styles.container}>
            return <ActivityIndicator size='large' />
        </View>

    }
    return (
        <View style={styles.container}>
            <Text>{msg}</Text>
            {error && <Text>{error}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
