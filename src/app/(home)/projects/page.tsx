"use client"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "~/app/contexts/AuthContext"
import Project from "~/components/Project"
import { IUser } from "~/types/interfaces/api"

const Projects = () => {
    const [data, setData] = useState<IUser>()
    const { getUser } = useContext(AuthContext)

    useEffect(() => {
        getUser().then((res) => setData(res))
    }, [getUser])

    return (
        <div className="w-full h-screen bg-cleaner-gray lg:px-20 2xl:px-28 py-16">
            <h1 className="font-semibold lg:text-[40px] 2xl:text-5xl tracking-tighter text-dark-gray lg:mb-6 2xl:mb-10">Meus Projetos</h1>
            <div className="grid grid-cols-4 gap-3">
                {data?.usersProjects.map((up) => (
                    <Project
                        key={up.id}
                        status={up.projectStatus}
                        name={up.project.name}
                        description="Resolver exercícios em C"
                        difficulty={up.project.difficulty} />
                ))}
            </div>
        </div>
    )
}
export default Projects
