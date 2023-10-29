import { cookie } from "~/service/cookies";
import { TUser } from "~/types/typings.td";

const API_URL = process.env.NEXT_PUBLIC_API_URL
const accessToken = cookie.get(null, "auth_token")

export const getUserData = async (userId: number): Promise<TUser> => {
    const url = API_URL + `users/${userId}`
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
    });
    if (!response.ok) {
        throw new Error('Network response was not ok')
    }
    return response.json();
}
