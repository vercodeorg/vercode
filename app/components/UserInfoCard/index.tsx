import Image from "next/image"
import userPic from "../../../public/eu3.jpeg"
import Coin from "../../assets/icons/Moeda.svg"

const UserInfoCard = () => {
    return (
        <div className="2xl:w-64 lg:w-64 lg:h-[365px] 2xl:h-96 rounded-3xl pt-10 pb-20 bg-[#F5F5F7] flex flex-col justify-between items-center absolute top-14 lg:mt-16 2xl:mt-24">
            <div className="lg:w-28 lg:h-28 2xl:w-32 2xl:h-32 mb-4">
                <Image src={userPic} alt="user-photo" className="rounded-full" />
            </div>
            <h2 className="font-semibold text-[#1A1A1A] xl:text-2xl">Pedro Henrique</h2>
            <div className="flex flex-col items-center gap-1">
                <span className="font-semibold text-medium-gray lg:text-lg 2xl:text-xl">
                    #472dsfiu
                </span>
                <div className="flex gap-2 items-center">
                    <span className="font-semibold text-amber-500 text-sm">4653</span>
                    <Image src={Coin} alt="coin-icon" width={25} />
                </div>
                <span className="font-semibold text-medium-gray 2xl:text-sm lg:text-xs">
                    RANK - LV 10
                </span>
            </div>
        </div>
    )
}

export default UserInfoCard