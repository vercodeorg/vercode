"use client"
import Status from "../Status"
import Difficulty from "../Difficulty"
import ProjectProgressBar from "../ProjectProgressBar"
import Link from "next/link"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { STATUS } from "~/types/enums/status"
import { DIFFICULTY } from "~/types/enums/difficulty"

type TypeProps = {
    status: STATUS,
    name: string,
    description: string,
    difficulty: DIFFICULTY,
}

const Project = (props: TypeProps) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const projectName = props.name.replace(/\s/g, '').toLowerCase();
    const href = `/projects/${projectName.startsWith('#') ? encodeURIComponent(projectName.substring(1)) : encodeURIComponent(projectName)}`;
    if (props.status == "Bloqueado") {
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
                    <div className="w-full h-44 bg-[#202020] rounded-3xl 2xl:px-8 lg:px-6 2xl:pt-8 lg:py-6 flex flex-col justify-between">
                        <h3 className="project-description">
                            {props.description}
                        </h3>
                        <Difficulty level={DIFFICULTY.MEDIUM} />
                        <ProjectProgressBar color="text-light-gray" />
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
                                        <Link href={href}>
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
        <Link href={href}>
            <div className="2xl:w-72 lg:w-64 2xl:h-96 lg:h-[330px] bg-white rounded-3xl flex flex-col justify-between cursor-pointer">
                <div className="mr-3 mt-3 self-end">
                    <Status statusName={props.status} />
                </div>
                <div className="mx-auto">
                    <h2 className="font-bold text-dark-gray text-4xl text-center">
                        {props.name}
                    </h2>
                </div>
                <div className="w-full h-44 bg-[#202020] rounded-3xl 2xl:px-8 lg:px-6 2xl:pt-8 lg:py-6 flex flex-col justify-between">
                    <h3 className="project-description">
                        {props.description}
                    </h3>
                    <Difficulty level={props.difficulty} />
                    <ProjectProgressBar color="text-light-gray" />
                </div>
            </div>
        </Link>
    )
}
export default Project
