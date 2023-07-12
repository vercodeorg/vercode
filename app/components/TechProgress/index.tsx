import Image from "next/image"
import ProgressBar from "../ProgressBar"
import CIcon from "../../assets/icons/C.svg"
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const TechProgress = () => {
    return (
        <div className="lg:col-span-7 2xl:col-span-3 row-span-1 bg-cleaner-gray relative rounded-3xl px-8 pt-6 pb-3">
            <h2 className="font-semibold xl:text-2xl text-dark-gray tracking-tight">Tech Progress</h2>
            <div>
                <div className="lg:pt-2 2xl:pt-5">
                    <Image src={CIcon} alt="tech-icon" />
                </div>
                <ProgressBar />
                <div className="lg:pt-2 2xl:pt-5">
                    <Image src={CIcon} alt="tech-icon" />
                </div>
                <ProgressBar />
            </div>
            <a href="">
                <div className="lg:w-8 2xl:w-10 bg-strong-gray rounded-full float-right mt-4">
                    <ChevronRightIcon className="text-cleaner-gray translate-x-[2px]"/>
                </div>
            </a>
        </div>
    )
}

export default TechProgress