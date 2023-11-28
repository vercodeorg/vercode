import Image from "next/image"
import Lock from "../../assets/icons/lock-icon.svg"
import { STATUS, getColor } from "~/types/enums/status"

type TypeProps = {
    statusName: STATUS | undefined
}

const Status = (props: TypeProps) => {
    if (props?.statusName == STATUS.BLOCKED) {
        return (
            <div>
                <Image src={Lock} alt="lock-icon" />
            </div>
        )
    }
    return (
        <div className={`px-4 py-1 rounded-full flex items-center justify-center ${getColor(props.statusName!)}`}>
            <span className="font-medium lg:text-sm 2xl:text-base text-white">{props?.statusName}</span>
        </div>
    )
}
export default Status
