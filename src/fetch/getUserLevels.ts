
export async function getUserLevels(){
    const res = await fetch('http://localhost:3000/users/2/levels');
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
