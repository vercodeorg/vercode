import Image from "next/image"
import Coin from "../../assets/icons/Moeda.svg"

type TypeProps = {
    color: string 
    min?: number 
    max?: number
    totalCoins?: number
    totalXpPoints?: number
    currentXpPoints?: number
}

const ProjectProgressBar = ( {color, min, max, totalCoins, totalXpPoints, currentXpPoints}: TypeProps) => {
    const progressPercent = (100 * min!) / max!;
    return (
        <div>
            <div className="flex justify-between items-center">
                <span className={`font-normal lg:text-x 2xl:text-sm ${color} mb-1`}>{min}/{max}</span>
                <div className="flex items-center">
                    <span className="font-semibold text-xs text-[#F0B40D]">{totalCoins}</span>
                    <div className="w-7">
                        <Image src={Coin} alt="coin" />
                    </div>
                </div>
            </div>
            <div className="grid bg-light-gray w-full h-4 rounded-xl">
                <div className="bg-gradient-to-r from-dark-purple to-light-purple relative h-4 rounded-xl"
                    style={{ width: `${progressPercent}%` }} />
            </div>
            <span className={`font-normal lg:text-xs 2xl:text-sm ${color} mb-1`}>{currentXpPoints} xp/ {totalXpPoints} xp</span>
        </div>
    )
}
export default ProjectProgressBar
