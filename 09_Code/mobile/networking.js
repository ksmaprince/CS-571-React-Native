export default async function getMessage(token) {
    try {
        const response = await fetch('http://10.200.155.201:5001/', {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        const json = await response.json();
        return json;
    } catch (error) {
        throw error;
    }
}

export async function login(username, password) {
    try {
        const response = await fetch("http://10.200.155.201:5001/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        });
        const json = await response.json()
        return json;
    } catch (error) {
        throw error
    }
}