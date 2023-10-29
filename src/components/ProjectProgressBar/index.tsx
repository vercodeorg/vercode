import Image from "next/image"
import Coin from "../../assets/icons/Moeda.svg"

type TypeProps = {
    color: string,
    min: number | undefined,
    max: number | undefined
}

const ProjectProgressBar = (props: TypeProps) => {
    const progressPercent = (100 * props.min!) / props.max!;
    return (
        <div>
            <div className="flex justify-between items-center">
                <span className={`font-normal lg:text-x 2xl:text-sm ${props.color} mb-1`}>{props.min}/{props.max}</span>
                <div className="flex items-center">
                    <span className="font-semibold text-xs text-[#F0B40D]">650</span>
                    <div className="w-7">
                        <Image src={Coin} alt="coin" />
                    </div>
                </div>
            </div>
            <div className="grid bg-light-gray w-full h-4 rounded-xl">
                <div className="bg-gradient-to-r from-dark-purple to-light-purple relative h-4 rounded-xl"
                    style={{ width: `${progressPercent}%` }} />
            </div>
            <span className={`font-normal lg:text-xs 2xl:text-sm ${props.color} mb-1`}>5.000/5.000 Exp</span>
        </div>
    )
}
export default ProjectProgressBar
