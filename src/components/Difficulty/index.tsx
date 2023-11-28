import { DIFFICULTY, getColor } from "~/types/enums/difficulty"

const Difficulty = ({level}: {level: DIFFICULTY}) => {   
    return (
        <div className="flex gap-2 items-center">
            <span className="font-normal 2xl:text-sm text-white">
                Dificuldade:
            </span>
            <span className={`font-normal text-sm uppercase ${getColor(level)}`}>{level}</span>
        </div>
    )
}
export default Difficulty
