import { DIFFICULTY, getColor } from "@/app/types/difficulty"

const Difficulty = ({level}: {level: DIFFICULTY}) => {   
    return (
        <div className="flex gap-2 items-center mb-3">
            <span className="font-normal 2xl:text-sm text-white">
                Difficulty:
            </span>
            <span className={`font-normal text-sm uppercase ${getColor(level)}`}>{level}</span>
        </div>
    )
}
export default Difficulty