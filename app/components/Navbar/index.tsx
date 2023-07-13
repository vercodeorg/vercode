import Image from "next/image"
import vercodeLogo from "../../assets/img/Logo.png"
import vcoin from "../../assets/icons/vcoin.svg"
import userPic from "../../../public/eu3.jpeg"
import Link from "next/link"

export const Navbar = () => {
    return (
        <div className="xl:h-14 w-full flex items-center px-4 justify-between">
            <div className="w-36">
                <Image src={vercodeLogo} alt="vercode-name-logo" width={120} />
            </div>
            <div className="flex items-center">
                <div className="flex mr-8 gap-2 items-center">
                    <span className="font-semibold text-amber-500 text-sm">4653</span>
                    <Image src={vcoin} alt="coin-icon" width={25} />
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-sm">Pedro Henrique</p>
                    <Link href={"/user"}>
                        <Image src={userPic} alt="user-photo" className="rounded-full" width={36} height={36} />
                    </Link>
                </div>
            </div>
        </div>
    )
}