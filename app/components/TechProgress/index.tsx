import Image from "next/image"
import ProgressBar from "../ProgressBar"
import CIcon from "../../assets/icons/C.svg"
import ArrowRight from "../../assets/icons/arrow-right.svg"

const TechProgress = () => {
    return (
        <div className="lg:col-span-7 2xl:col-span-3 row-span-1 bg-[#F5F5F7] relative rounded-3xl px-8 pt-6 pb-3">
            <h2 className="font-semibold xl:text-2xl text-[#1A1A1A] tracking-tight">Tech Progress</h2>
            <div>
                <div className="lg:pt-2 2xl:pt-5">
                    <Image src={CIcon} alt="tech-icon"/>
                </div>
                <ProgressBar/>
                <div className="lg:pt-2 2xl:pt-5">
                    <Image src={CIcon} alt="tech-icon"/>
                </div>
                <ProgressBar/>
            </div>
            <div className="float-right lg:w-8 2xl:w-10 bg-[#31353A] rounded-full mt-4">
                <a href="">
                    <Image src={ArrowRight} alt="arrow-right-icon" />
                </a>
            </div>
        </div>
    )
}

export default TechProgress