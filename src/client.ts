const URL = 'http://127.0.0.1:8000'

type User = {user_id: number, username: string, password: string, email: string}
async function createUser(username: string, password: string, email: string): Promise<User> {
    const response = await fetch(`${URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username: username, password: password, email: email}),
    })

    if (!response.ok) {
        throw new Error(`User creation failed: ${response.status} ${response.statusText}`)
    }

    return await response.json();
}

export {createUser}