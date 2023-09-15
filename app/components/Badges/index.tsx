import Image from "next/image";
import badge from "../../assets/icons/Group 532.svg"
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const Badges = ({userId}: {userId: number}) => {
    return (
        <div className="lg:col-span-4 2xl:col-span-2 bg-cleaner-gray relative rounded-3xl lg:px-6 2xl:px-8 py-6">
            <h2 className="font-semibold xl:text-2xl text-dark-gray tracking-tight">Emblemas</h2>
            <div className="px-5 py-1 flex items-center gap-4">
                <div className="w-28">
                    <Image src={badge} alt="bagde_icon" />
                </div>
                <div className="">
                    <h3 className="font-extrabold text-dark-gray xl:text-xl">PRO</h3>
                    <span className="font-semibold text-medium-gray lg:text-sm 2xl:text-base">RANK - LV 10</span>
                </div>
            </div>
            <Link href={`user/${userId}/badges`}>
                <div className="lg:w-8 2xl:w-10 bg-strong-gray rounded-full float-right">
                    <ChevronRightIcon className="text-cleaner-gray translate-x-[2px]" />
                </div>
            </Link>
        </div>
    )
}

export default Badges;