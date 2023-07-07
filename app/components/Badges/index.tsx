import Image from "next/image";
import badge from "../../assets/icons/Group 532.svg"
import ArrowRight from "../../assets/icons/arrow-right.svg"

const Badges = () => {
    return (
        <div className="lg:col-span-4 2xl:col-span-2 bg-[#F5F5F7] relative rounded-3xl lg:px-6 2xl:px-8 py-6">
            <h2 className="font-semibold xl:text-2xl text-[#1A1A1A] tracking-tight">Badges</h2>
            <div className="px-5 py-1 flex items-center gap-4">
                <div className="w-28">
                    <Image src={badge} alt="bagde_icon" />
                </div>
                <div className="">
                    <h3 className="font-extrabold text-[#1A1A1A] xl:text-xl">PRO</h3>
                    <span className="font-semibold text-[#6C6C6C] xl:text-sm">RANK - LV 10</span>
                </div>
            </div>
            <div className="float-right lg:w-8 2xl:w-10 bg-[#31353A] rounded-full">
                <a href="">
                    <Image src={ArrowRight} alt="arrow-right-icon" />
                </a>
            </div>
        </div>
    )
}

export default Badges;