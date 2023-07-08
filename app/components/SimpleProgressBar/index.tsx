import Subtract from "../../assets/icons/Subtract.svg"
import Image from "next/image"

const SimpleProgressBar =() => {
    return (
        <div className="w-1/2">
            <span className="font-medium level mb-1 px-1">20/20 Projects</span>
            <div className="grid bg-medium-gray w-full lg:h-4 2xl:h-6 rounded-xl">
                <div className="bg-gradient-to-r from-dark-purple to-light-purple relative w-2/3 lg:h-4 2xl:h-6 rounded-xl"></div>
                <div className="lg:w-6 2xl:w-8 absolute justify-self-end self-center translate-x-1">
                    <Image src={Subtract} alt="icon" />
                </div>
            </div>
        </div>
    )
}
export default SimpleProgressBar