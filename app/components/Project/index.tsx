"use client"
import { STATUS } from "@/app/types/status"
import Status from "../Status"
import Difficulty from "../Difficulty"
import { DIFFICULTY } from "@/app/types/difficulty"
import ProjectProgressBar from "../ProjectProgressBar"
import Link from "next/link"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

const Project = ({ status }: { status: STATUS }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const projectName = "Shell 00"
    if (status == "Blocked") {
        return (
            <>
                <div
                    className="2xl:w-72 lg:w-64 2xl:h-96 lg:h-[330px] bg-white rounded-3xl flex flex-col justify-between cursor-pointer"
                    onClick={onOpen}>
                    <div className="mr-3 mt-3 self-end">
                        <Status statusName={status} />
                    </div>
                    <div className="mx-auto">
                        <h2 className="font-bold text-dark-gray text-4xl text-center">
                            {projectName}
                        </h2>
                    </div>
                    <div className="w-full h-44 bg-[#202020] rounded-3xl 2xl:px-8 lg:px-6 2xl:pt-8 lg:py-6 flex flex-col justify-between">
                        <h3 className="project-description">
                            Solve C language exercises
                        </h3>
                        <Difficulty level={DIFFICULTY.MEDIUM} />
                        <ProjectProgressBar color="text-light-gray" />
                    </div>
                </div>
                <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">Confirmation</ModalHeader>
                                <ModalBody>
                                    Are you want to unlock this project for 45 coins ?
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                        Cancel
                                    </Button>
                                    <Button color="primary" onPress={onClose}>
                                        <Link href={`/projects/${projectName.replace(/\s+/g, '')}`}>
                                            Unlock
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
        <Link href={`/projects/${projectName.replace(/\s+/g, '')}`}>
            <div className="2xl:w-72 lg:w-64 2xl:h-96 lg:h-[330px] bg-white rounded-3xl flex flex-col justify-between cursor-pointer">
                <div className="mr-3 mt-3 self-end">
                    <Status statusName={status} />
                </div>
                <div className="mx-auto">
                    <h2 className="font-bold text-dark-gray text-4xl text-center">
                        {projectName}
                    </h2>
                </div>
                <div className="w-full h-44 bg-[#202020] rounded-3xl 2xl:px-8 lg:px-6 2xl:pt-8 lg:py-6 flex flex-col justify-between">
                    <h3 className="project-description">
                        Solve C language exercises
                    </h3>
                    <Difficulty level={DIFFICULTY.MEDIUM} />
                    <ProjectProgressBar color="text-light-gray" />
                </div>
            </div>
        </Link>
    )
}
export default Project