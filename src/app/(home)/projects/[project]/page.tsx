import ExerciseItem from "~/components/ExerciseItem"
import ProjectProgressBar from "~/components/ProjectProgressBar"
import Status from "~/components/Status"
import { exercises } from "~/mocks"
import { STATUS } from "~/types/status"

const Project = ({ params }: { params: { project: string } }) => {
    return (
        <div className="w-full h-screen bg-cleaner-gray lg:px-20 2xl:px-28 py-16">
            <div className="flex items-center gap-8 lg:mb-6 2xl:mb-10">
                <h1 className="font-semibold lg:text-[40px] 2xl:text-5xl tracking-tighter text-dark-gray">{params.project}</h1>
                <div>
                    <Status statusName={STATUS.IN_PROGRESS} />
                </div>
            </div>
            <div className="w-96">
                <ProjectProgressBar color="text-dark-gray" />
            </div>
            <div className="flex flex-col 2xl:gap-3 lg:gap-2 2xl:mt-10 lg:mt-6">
                {exercises.map((e) => (
                    <ExerciseItem key={e.id} name={e.name} status={e.status} />
                ))}
            </div>
        </div>
    )
}
export default Project