import { toast } from "react-toastify"

export async function signUp(email: string, username: string, password: string){
    try{
        const url = process.env.NEXT_PUBLIC_API_URL + "auth/register"
        const response = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, username, password})
        })
        if (!response.ok) {
            toast(response.status + " :" + response.statusText, {
                autoClose: 5000,
            })
        }
        toast("Usuário criado com successo!")
    }catch(err){
        console.error('Error: '+err);
    }
}
