export async function getUser() {
    const res = await fetch('http://localhost:3000/users/2');
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
