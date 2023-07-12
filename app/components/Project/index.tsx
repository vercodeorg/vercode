import { STATUS } from "@/app/types/status"
import Status from "../Status"
import Difficulty from "../Difficulty"
import { DIFFICULTY } from "@/app/types/difficulty"
import ProjectProgressBar from "../ProjectProgressBar"
import Link from "next/link"

const Project = () => {
    return (
        <Link href={""}>
            <div className="2xl:w-72 lg:w-64 2xl:h-96 lg:h-[330px] bg-white rounded-3xl flex flex-col justify-between">
                <div className="mr-3 mt-3 self-end">
                    <Status statusName={STATUS.BLOCKED} />
                </div>
                <div className="mx-auto">
                    <h2 className="font-bold text-dark-gray text-4xl text-center">
                        #C01
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