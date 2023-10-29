"use client"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "~/app/contexts/AuthContext"
import ExerciseItem from "~/components/ExerciseItem"
import ProjectProgressBar from "~/components/ProjectProgressBar"
import Status from "~/components/Status"
import { EXERCISE_STATUS } from "~/types/enums/exerciseStatus"
import { IUser } from "~/types/interfaces/api"

const Project = ({ params }: { params: { name: string } }) => {
    const [data, setData] = useState<IUser>()
    const { getUser } = useContext(AuthContext)

    const userProject = data?.usersProjects.find((up) => {
        return up.project.name.toLowerCase().replace(/\s/g, '') === params.name.toLowerCase()
    })

    const totalExercisesByProject = data?.usersExercises.filter((ue) => {
        return ue.exercise.project.name.toLowerCase().replace(/\s/g, '') === params.name.toLowerCase()
    })

    const exercisesFinished = data?.usersExercises.filter((ue) => {
        return ue.exerciseStatus === EXERCISE_STATUS.COMPLETED
    })

    const currentExercisesAmount = exercisesFinished?.length
    const maxExercisesAmount = totalExercisesByProject?.length

    useEffect(() => {
        getUser().then((res) => setData(res))
    }, [getUser])
    return (
        <div className="w-full h-screen bg-cleaner-gray lg:px-20 2xl:px-28 py-16">
            <div className="flex items-center gap-8 lg:mb-6 2xl:mb-10">
                <h1 className="font-semibold lg:text-[40px] 2xl:text-5xl tracking-tighter text-dark-gray">{userProject?.project.name}</h1>
                <div>
                    <Status statusName={userProject?.projectStatus} />
                </div>
            </div>
            <div className="w-96">
                <ProjectProgressBar min={currentExercisesAmount} max={maxExercisesAmount} color="text-dark-gray" />
            </div>
            <div className="flex flex-col 2xl:gap-3 lg:gap-2 2xl:mt-10 lg:mt-6">
                {totalExercisesByProject?.map((e) => (
                    <ExerciseItem
                        key={e.id}
                        id={e.exercise.id}
                        name={e.exercise.name}
                        status={e.exerciseStatus} />
                ))}
            </div>
        </div>
    )
}
export default Project
