"use client"
import { DIFFICULTY } from "@/app/types/difficulty"
import Difficulty from "../Difficulty"
import Status from "../Status"
import { STATUS } from "@/app/types/status"
import ProjectProgressBar from "../ProjectProgressBar"
import Link from "next/link"
import * as AlertDialog from '@radix-ui/react-alert-dialog';

const LevelProject = ({ status }: { status: STATUS }) => {
    const projectName = "#C01"
    if (status == "Blocked") {
        return (
            <AlertDialog.Root>
                <AlertDialog.Trigger asChild>
                    <div className="w-full rounded-3xl border-2 border-light-gray flex justify-between">
                        <div className="bg-dark-gray rounded-3xl w-1/3 py-4 px-10 flex flex-col justify-between gap-3">
                            <h2 className="font-bold text-white text-4xl">
                                {projectName}
                            </h2>
                            <h3 className="project-description">
                                solve c language exercises
                            </h3>
                            <Difficulty level={DIFFICULTY.EASY} />
                        </div>
                        <div className="w-1/3 px-4 py-4 flex flex-col gap-2">
                            <div className="self-end">
                                <Status statusName={status} />
                            </div>
                            <ProjectProgressBar color="text-dark-gray" />
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
            </AlertDialog.Root >
        )
    }
    return (
        <Link href={`/projects/${projectName.replace(/\s+/g, '')}`}>
            <div className="w-full rounded-3xl border-2 border-light-gray flex justify-between">
                <div className="bg-dark-gray rounded-3xl w-1/3 py-4 px-10 flex flex-col justify-between gap-3">
                    <h2 className="font-bold text-white text-4xl">
                        {projectName}
                    </h2>
                    <h3 className="project-description">
                        solve c language exercises
                    </h3>
                    <Difficulty level={DIFFICULTY.EASY} />
                </div>
                <div className="w-1/3 px-4 py-4 flex flex-col gap-2">
                    <div className="self-end">
                        <Status statusName={status} />
                    </div>
                    <ProjectProgressBar color="text-dark-gray" />
                </div>
            </div>
        </Link>
    )

}
export default LevelProject