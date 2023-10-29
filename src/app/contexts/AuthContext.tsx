"use client"
import { createContext, useContext, ReactNode, useEffect } from 'react';
import { cookie } from '~/service/cookies';
import { getProfile } from '~/fetch/getProfile';
import { useRouter } from 'next/navigation';
import { useStudentStore } from '~/store/student';
import { getUserData } from '~/fetch/getUser';
import { TUser } from '~/types/typings.td';

type AuthContextData = {
    getUser: () => Promise<TUser | undefined>,
    logOut: () => void
}


export const AuthContext = createContext({} as AuthContextData)

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: ReactNode }) {
    const router = useRouter();
    const { addStudent, removeStudent, student } = useStudentStore();

    useEffect(() => {
        const accessToken = cookie.get(null, "auth_token");

        const fetchProfile = async () => {
            const profile = await getProfile(accessToken);
            if (!profile) {
                removeStudent()
                router.push('/login')
            }
            addStudent(profile)
        }
        if (accessToken) {
            fetchProfile();
        } else {
            removeStudent()
            router.push('/login')
        }
    }, [])

    const logOut = async () => {
        cookie.del(null, "auth_token");
        removeStudent()
        router.push('/login')
    }

    const getUser = async () => {
        if (student) {
            const data = await getUserData(student?.userId)
            return data
        }
    }

    return (
        <AuthContext.Provider value={{ getUser , logOut}}>
            {children}
        </AuthContext.Provider>
    );
}
