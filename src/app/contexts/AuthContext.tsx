"use client"
import { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { cookie } from '~/service/cookies';
import { useRouter } from 'next/navigation';
import { IUser } from '~/types/interfaces/api';
import { signInRequest } from '~/fetch/singIn';
import { getProfile } from '~/fetch/getProfile';
import { getUserData } from '~/fetch/getUser';

type SignInData = {
    email: string;
    password: string;
}

type Profile = {
    userId: number,
    username: string
}

interface AuthContextType {
    logOut: () => void;
    isAuthenticated: boolean;
    profile: Profile | undefined;
    user: IUser | undefined;
    signIn: (data: SignInData) => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextType)

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: ReactNode }) {
    const [profile, setProfile] = useState<Profile | undefined>();
    const [user, setUser] = useState<IUser | undefined>();
    const isAuthenticated = !!profile;
    const router = useRouter();

    async function signIn({ email, password }: SignInData) {
        const { access_token } = await signInRequest({
            email,
            password,
        })
        cookie.set(null, 'auth_token', access_token, {
            maxAge: 60 * 60 * 24, //1 day
            path: '/',
        });

        router.push('/')
    }

    useEffect(() => {
        const token = cookie.get(null, "auth_token");
        if (token) {
            const fetchData = async () => {
                const profile = await getProfile(token)
                setProfile(profile)
                if (profile) {
                    const user = await getUserData(profile.userId);
                    setUser(user)
                }
            }
            fetchData()
        } else {
            setProfile(undefined)
            router.push('/login')
        }
    }, [])

    const logOut = async () => {
        cookie.del(null, "auth_token");
        setProfile(undefined)
        router.push('/login')
    }

    return (
        <AuthContext.Provider value={{ signIn, profile, logOut, isAuthenticated, user }}>
            {children}
        </AuthContext.Provider>
    );
}
