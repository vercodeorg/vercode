import { EXERCISE_STATUS } from "~/types/enums/exerciseStatus"
import StatusIcon from "../ExerciseStatusIcon"
import Link from "next/link"

type TypeProps = {
    name: string,
    id: number,
    status: EXERCISE_STATUS
}

const ExerciseItem = (props: TypeProps) => {
    return (
        <div className="flex items-center gap-5">
            <Link href={`/exercise/${props.id}`} className="font-normal tracking-tighter text-2xl underline">{props.name}</Link>
            <div className="lg:w-8 2xl:w-10">
                <StatusIcon statusName={props.status} />
            </div>
        </div>
    )
}
export default ExerciseItem
