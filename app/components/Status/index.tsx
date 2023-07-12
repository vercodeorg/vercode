import { STATUS, getColor } from "@/app/types/status"

const Status = ({ statusName }: { statusName: STATUS }) => {
    return (
        <div className={`px-4 py-1 rounded-full flex items-center justify-center ${getColor(statusName)}`}>
            <span className="font-medium lg:text-sm 2xl:text-base text-white">{statusName}</span>
        </div>
    )
}
export default Status