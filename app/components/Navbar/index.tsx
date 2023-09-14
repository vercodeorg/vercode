import Image from "next/image"
import vercodeLogo from "../../assets/img/Logo.png"
import vcoin from "../../assets/icons/vcoin.svg"
import userPic from "../../../public/eu3.jpeg"
import Link from "next/link"
import { useStudentStore } from "@/app/store/store"

export const Navbar = () => {
    const coins = useStudentStore(state => state.coins)

    return (
        <div className="xl:h-14 w-full flex items-center px-4 justify-between">
            <div className="w-36">
                <Image src={vercodeLogo} alt="vercode-name-logo" width={120} />
            </div>
            <div className="flex items-center gap-3">
                <span>suas moedas:</span>
                <div className="flex mr-8 gap-2 items-center coins">
                    <span className="font-semibold text-amber-500 text-sm">{coins}</span>
                    <Image src={vcoin} alt="coin-icon" width={25} />
                </div>
                <div className="flex items-center gap-2">
                    <Link href={"/user"} className="flex items-center gap-3 hover:bg-light-gray px-1 py-2 rounded-lg">
                        <p className="text-sm">Pedro Henrique</p>
                        <Image src={userPic} alt="user-photo" className="rounded-full" width={36} height={36} />
                    </Link>
                </div>
            </div>
        </div>
    )
}