import { cookie } from "~/service/cookies";
import { IUser } from "~/types/interfaces/api";

const API_URL = process.env.NEXT_PUBLIC_API_URL
const token = cookie.get(null, "auth_token")

export const getUserData = async (userId: number): Promise<IUser> => {
    const url = API_URL + `users/${userId}`
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        cache: 'no-cache'
    });
    if (!response.ok) {
        throw new Error('Network response was not ok')
    }
    return response.json();
}
