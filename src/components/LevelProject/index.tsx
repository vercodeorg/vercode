"use client";
import Difficulty from "../Difficulty";
import Status from "../Status";
import ProjectProgressBar from "../ProjectProgressBar";
import Link from "next/link";
import {
    Button,
    Modal,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure,
} from "@nextui-org/react";
import { STATUS } from "~/types/enums/status";
import { formatPathname } from "~/utils/formatPathname";
import { IUsersProjects } from "~/types/interfaces/api";
import { useContext, useEffect} from "react";
import { AuthContext } from "~/app/contexts/AuthContext";
import { EXERCISE_STATUS } from "~/types/enums/exerciseStatus";

const LevelProject = ({usersProjects}: {usersProjects: IUsersProjects}) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { user } = useContext(AuthContext)

    const currentUsersExercises = user?.usersExercises.filter((ue) => {
        return ue.exercise.project.name.toLowerCase() === usersProjects.project.name.toLowerCase()
    })

    const exercisesFinished = currentUsersExercises?.filter((ue) => {
        return ue.exerciseStatus === EXERCISE_STATUS.SUCCESSFUL
    })

    const totalCoinsByProject = currentUsersExercises?.reduce((total, ue) => total + ue.exercise.coinsToWin, 0)

    const totalXpPoints = currentUsersExercises?.reduce((total, ue) => total + ue.exercise.xpToWin, 0)

    const currentXpPoints = exercisesFinished?.reduce((total, ue) => total + ue.exercise.xpToWin, 0)

    const projectProgressBarProps = {
        color: "text-dark-gray",
        min: exercisesFinished?.length,
        max: currentUsersExercises?.length,
        totalCoins: totalCoinsByProject,
        totalXpPoints: totalXpPoints,
        currentXpPoints: currentXpPoints
    }

    const url = 'projects/'+formatPathname(usersProjects?.project?.name)

    if (usersProjects.projectStatus === STATUS.BLOCKED) {
        return (
            <>
                <div
                    onClick={onOpen}
                    className="w-full rounded-3xl border-2 border-light-gray flex justify-between cursor-pointer"
                >
                    <div className="bg-dark-gray rounded-3xl w-1/3 py-4 px-10 flex flex-col justify-between gap-3">
                        <h2 className="font-bold text-white text-4xl">{usersProjects.project.name}</h2>
                        <Difficulty level={usersProjects.project.difficulty} />
                    </div>
                    <div className="w-1/3 px-4 py-4 flex flex-col gap-2">
                        <div className="self-end">
                            <Status statusName={usersProjects.projectStatus} />
                        </div>
                        <ProjectProgressBar {...projectProgressBarProps}/>
                    </div>
                </div>
                <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="dialog-title">
                                    Do you want unlock this project for 25 Vcoins?
                                </ModalHeader>
                                <ModalFooter>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                        Cancel
                                    </Button>
                                    <Link href={url}>
                                        <Button color="primary" variant="light" onPress={onClose}>
                                            Yes
                                        </Button>
                                    </Link>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </>
        );
    }
    return (
        <Link href={url}>
            <div className="w-full rounded-3xl border-2 border-light-gray flex justify-between">
                <div className="bg-dark-gray rounded-3xl w-1/3 py-4 px-10 flex flex-col justify-between gap-3">
                    <h2 className="font-bold text-white text-4xl">{usersProjects?.project?.name}</h2>
                    <Difficulty level={usersProjects.project.difficulty} />
                </div>
                <div className="w-1/3 px-4 py-4 flex flex-col gap-2">
                    <div className="self-end">
                        <Status statusName={usersProjects.projectStatus} />
                    </div>
                    <ProjectProgressBar {...projectProgressBarProps}/>
                </div>
            </div>
        </Link>
    );
};
export default LevelProject;
