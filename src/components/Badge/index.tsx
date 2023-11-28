import { BadgeType } from "~/types/typings.td"

const Badge = ({badge}: {badge: BadgeType}) => {
    return (
        <div className="flex flex-col items-center w-fit">
            <div className="w-48">
                <img src={badge.imageUrl} alt="badge_icon" />
            </div>
            <span className="font-extrabold text-dark-gray xl:text-xl">
                {badge.name}
            </span>
            <span className="font-semibold text-medium-gray lg:text-sm 2xl:text-base">
                RANK - LV 1
            </span>
        </div>
    )
}
export default Badge
