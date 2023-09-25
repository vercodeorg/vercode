import Image from "next/image"
import Coin from "../../assets/icons/Moeda.svg"
const ProjectProgressBar = ({color}: {color: string}) => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <span className={`font-normal lg:text-x 2xl:text-sm ${color} mb-1`}>5/5</span>
                <div className="flex items-center">
                    <span className="font-semibold text-xs text-[#F0B40D]">650</span>
                    <div className="w-7">
                        <Image src={Coin} alt="coin" />
                    </div>
                </div>
            </div>
            <div className="grid bg-light-gray w-full h-4 rounded-xl">
                <div className="bg-gradient-to-r from-dark-purple to-light-purple relative w-3/3 h-4 rounded-xl"></div>
            </div>
            <span className={`font-normal lg:text-xs 2xl:text-sm ${color} mb-1`}>5.000/5.000 Exp</span>
        </div>
    )
}
export default ProjectProgressBar