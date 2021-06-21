const URL = 'http://127.0.0.1:8000'

type User = { user_id: number, username: string, password: string, email: string }

async function createUser(username: string, password: string, email: string): Promise<User> {
    const response = await fetch(`${URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username: username, password: password, email: email}),
    })

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.detail)
    }

    return data;
}

function getToken(): string | null {
    return sessionStorage.getItem('token');
}

function isLoggedIn(): boolean {
    return getToken() !== null;
}

async function login(username: string, password: string)  {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password)
    const response = await fetch(`${URL}/users/token`, {
        method: 'POST',
        body: formData,
    })

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.detail)
    }

    sessionStorage.setItem('token', data.access_token)
}

async function uploadRecording(blob: Blob) {
    const formData = new FormData();
    formData.append('recording', blob);
    const response = await fetch(`${URL}/recordings/`, {
        method: 'POST',
        body: formData,
        headers: {'Authorization': `bearer ${getToken()}`}
    })

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.detail)
    }
}


async function getFrequentTopic() {
    const response = await fetch(`${URL}/topics/frequent`, {
        method: 'GET',
        headers: {'Authorization': `bearer ${getToken()}`}
    })

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.detail)
    }

    return data.topic;
}


export {createUser, login, isLoggedIn, uploadRecording, getFrequentTopic}
