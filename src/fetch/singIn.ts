
export async function singIn(email: string, password: string){
    try{
        const url = process.env.NEXT_PUBLIC_API_URL + "auth/login"
        console.log(url)
        const response = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: email, password: password})
        })
        console.log(response.body)
        if (!response.ok) {
            throw new Error('Failed to fetch data: '+response.status)
        }
        return response.json()
    }catch(err){
        console.error('Error: '+err);
    }
}
