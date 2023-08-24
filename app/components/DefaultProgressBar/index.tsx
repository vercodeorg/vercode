import Image from "next/image"
import Subtract from "../../assets/icons/Subtract.svg"
import ProgressBar from "../ProgressBar"

const DefaultProgressBar = () => {
    return (
        <div>
            <span className="font-medium level mb-1 px-1">24.000/35.000 Exp</span>
            <ProgressBar>
                <div className="lg:w-6 absolute justify-self-end self-center translate-x-1">
                    <Image src={Subtract} alt="icon" />
                </div>
            </ProgressBar>
            <div className="flex justify-between px-1 py-1">
                <span className="level">LV 10</span>
                <span className="level">LV 11</span>
            </div>
        </div>
    )
}

export default DefaultProgressBar