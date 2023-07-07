import Image from "next/image"
import Subtract from "../../assets/icons/Subtract.svg"


const ProgressBar = () => {
    return (
        <div>
            <span className="font-medium level mb-1 px-1">24.000/35.000 Exp</span>
            <div className="grid bg-[#D9D9D9] w-full lg:h-4 2xl:h-6 rounded-xl">
                <div className="bg-gradient-to-r from-[#3F0065] to-[#B911F3] relative w-2/3 lg:h-4 2xl:h-6 rounded-xl"></div>
                <div className="lg:w-6 absolute justify-self-end self-center translate-x-1">
                    <Image src={Subtract} alt="icon" />
                </div>
            </div>
            <div className="flex justify-between px-1 py-1">
                <span className="level">LV 10</span>
                <span className="level">LV 11</span>
            </div>
        </div>
    )
}

export default ProgressBar