import Image from "next/image"
import badgeIcon from "../../assets/icons/Group 531.svg"

const Badge = () => {
    return (
        <div className="flex flex-col items-center w-fit">
            <div className="w-48">
                <Image src={badgeIcon} alt="" />
            </div>
            <span className="font-extrabold text-dark-gray xl:text-xl">
                NOOB
            </span>
            <span className="font-semibold text-medium-gray lg:text-sm 2xl:text-base">
                RANK - LV 1
            </span>
        </div>
    )
}
export default Badge