import { STATUS, getColor } from "@/app/types/status"

const Status = ({ statusName }: { statusName: STATUS }) => {
    return (
        <div className={`lg:max-w-28 2xl:w-32 h-7 rounded-full flex items-center justify-center ${getColor(statusName)}`}>
            <span className="font-medium lg:text-sm 2xl:text-base text-white">{statusName}</span>
        </div>
    )
}
export default Status