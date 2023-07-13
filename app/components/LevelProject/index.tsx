import { DIFFICULTY } from "@/app/types/difficulty"
import Difficulty from "../Difficulty"
import Status from "../Status"
import { STATUS } from "@/app/types/status"
import ProjectProgressBar from "../ProjectProgressBar"
import Link from "next/link"

const LevelProject = () => {
    return (
        <Link href={"/"}>
            <div className="w-full rounded-3xl border-2 border-light-gray flex justify-between">
                <div className="bg-dark-gray rounded-3xl w-1/3 py-4 px-10 flex flex-col justify-between gap-3">
                    <h2 className="font-bold text-white text-4xl">
                        #C01
                    </h2>
                    <h3 className="project-description">
                        solve c language exercises
                    </h3>
                    <Difficulty level={DIFFICULTY.EASY} />
                </div>
                <div className="w-1/3 px-4 py-4 flex flex-col gap-2">
                    <div className="self-end">
                        <Status statusName={STATUS.COMPLETE} />
                    </div>
                    <ProjectProgressBar color="text-dark-gray" />
                </div>
            </div>
        </Link>
    )
}
export default LevelProject