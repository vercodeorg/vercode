import { EXERCISE_STATUS } from "~/types/exerciseStatus"
import StatusIcon from "../ExerciseStatusIcon"
import Link from "next/link"

type TypeProps = {
    name: string,
    status: EXERCISE_STATUS
}

const ExerciseItem = ({ name, status }: TypeProps) => {
    return (
        <div className="flex items-center gap-5">
            <Link href={`/exercise/${name.replace(/\s+/g, '')}`} className="font-normal tracking-tighter text-2xl underline">{name}</Link>
            <div className="lg:w-8 2xl:w-10">
                <StatusIcon statusName={status} />
            </div>
        </div>
    )
}
export default ExerciseItem