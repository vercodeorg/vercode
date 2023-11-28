"use client"
import Status from "../Status"
import Difficulty from "../Difficulty"
import ProjectProgressBar from "../ProjectProgressBar"
import Link from "next/link"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { STATUS } from "~/types/enums/status"
import { DIFFICULTY } from "~/types/enums/difficulty"
import { useContext, useEffect, useState } from "react"
import { IUser } from "~/types/interfaces/api"
import { AuthContext } from "~/app/contexts/AuthContext"
import { EXERCISE_STATUS } from "~/types/enums/exerciseStatus"
import { formatPathname } from "~/utils/formatPathname"

type TypeProps = {
    status: STATUS,
    name: string,
    difficulty: DIFFICULTY,
}

const Project = (props: TypeProps) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [data, setData] = useState<IUser>()
    const { getUser } = useContext(AuthContext)

    const currentUsersExercises = data?.usersExercises.filter((ue) => {
        return ue.exercise.project.name.toLowerCase() === props.name.toLowerCase()
    })

    const exercisesFinished = currentUsersExercises?.filter((ue) => {
        return ue.exerciseStatus === EXERCISE_STATUS.SUCCESSFUL
    })

    const totalCoinsByProject = currentUsersExercises?.reduce((total, ue) => total + ue.exercise.coinsToWin, 0)

    const totalXpPoints = currentUsersExercises?.reduce((total, ue) => total + ue.exercise.xpToWin, 0)

    const currentXpPoints = exercisesFinished?.reduce((total, ue) => total + ue.exercise.xpToWin, 0)

    const projectProgressBarProps = {
        color: "text-light-gray",
        min: exercisesFinished?.length,
        max: currentUsersExercises?.length,
        totalCoins: totalCoinsByProject,
        totalXpPoints: totalXpPoints,
        currentXpPoints: currentXpPoints
    }

    const url = 'projects/'+formatPathname(props.name)

    useEffect(() => {
        getUser().then((res) => setData(res))
    }, [getUser])

    if (props.status === STATUS.BLOCKED) {
        return (
            <>
                <div
                    className="2xl:w-72 lg:w-64 2xl:h-96 lg:h-[330px] bg-white rounded-3xl flex flex-col justify-between cursor-pointer"
                    onClick={onOpen}>
                    <div className="mr-3 mt-3 self-end">
                        <Status statusName={props.status} />
                    </div>
                    <div className="mx-auto">
                        <h2 className="font-bold text-dark-gray text-4xl text-center">
                            {props.name}
                        </h2>
                    </div>
                    <div className="w-full h-44 bg-[#202020] rounded-3xl 2xl:px-8 lg:px-6 2xl:pt-8 lg:py-6 flex flex-col gap-3 justify-around">
                        <Difficulty level={DIFFICULTY.MEDIUM} />
                        <ProjectProgressBar  {...projectProgressBarProps}/>
                    </div>
                </div>
                <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">Confirmação</ModalHeader>
                                <ModalBody>
                                    Você tem certeza que deseja desbloquear esse projeto por 45 coins ?
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                        Cancelar
                                    </Button>
                                    <Button color="primary" onPress={onClose}>
                                        <Link href={url}>
                                            Desbloquear
                                        </Link>
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </>
        )
    }
    return (
        <Link href={url}>
            <div className="2xl:w-72 lg:w-64 2xl:h-96 lg:h-[330px] bg-white rounded-3xl flex flex-col justify-between cursor-pointer">
                <div className="mr-3 mt-3 self-end">
                    <Status statusName={props.status} />
                </div>
                <div className="mx-auto">
                    <h2 className="font-bold text-dark-gray text-4xl text-center">
                        {props.name}
                    </h2>
                </div>
                <div className="w-full h-44 bg-[#202020] rounded-3xl 2xl:px-8 lg:px-6 2xl:pt-8 lg:py-6 flex flex-col gap-3 justify-around">
                    <Difficulty level={props.difficulty} />
                    <ProjectProgressBar {...projectProgressBarProps} />
                </div>
            </div>
        </Link>
    )
}
export default Project
