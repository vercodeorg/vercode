import { STATUS, getColor } from "~/types/status"
import Image from "next/image"
import Lock from "../../assets/icons/lock-icon.svg"

const Status = ({ statusName }: { statusName: STATUS | undefined}) => {
    if(statusName == STATUS.BLOCKED){
        return (
            <div>
                <Image src={Lock} alt="lock-icon" />
            </div>
        )
    }
    return (
        <div className={`px-4 py-1 rounded-full flex items-center justify-center ${getColor(statusName!)}`}>
            <span className="font-medium lg:text-sm 2xl:text-base text-white">{statusName}</span>
        </div>
    )
}
export default Status
