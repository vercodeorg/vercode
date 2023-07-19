"use client"
import { STATUS } from "@/app/types/status"
import Status from "../Status"
import Difficulty from "../Difficulty"
import { DIFFICULTY } from "@/app/types/difficulty"
import ProjectProgressBar from "../ProjectProgressBar"
import Link from "next/link"
import * as AlertDialog from '@radix-ui/react-alert-dialog';

const Project = ({status}: {status: STATUS}) => {
    const projectName = "Shell 00"
    if (status == "Blocked") {
        return (
            <AlertDialog.Root>
                <AlertDialog.Trigger asChild>
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
                </AlertDialog.Trigger>
                <AlertDialog.Portal>
                    <AlertDialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
                    <AlertDialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                        <AlertDialog.Title className="dialog-title">
                            Do you want unlock this project for 25 Vcoins?
                        </AlertDialog.Title>
                        <div className="flex justify-end gap-[25px]">
                            <AlertDialog.Cancel asChild>
                                <button className="text-gray-500 bg-gray-200 hover:bg-gray-300 focus:shadow-gray-500 dialog-button">
                                    Cancel
                                </button>
                            </AlertDialog.Cancel>
                            <AlertDialog.Action asChild>
                                <Link href={`/projects/${projectName.replace(/\s+/g, '')}`}
                                    className="text-red-800 bg-red-300 hover:bg-red-400 focus:shadow-red-800 dialog-button">
                                    Yes
                                </Link>
                            </AlertDialog.Action>
                        </div>
                    </AlertDialog.Content>
                </AlertDialog.Portal>
            </AlertDialog.Root>
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