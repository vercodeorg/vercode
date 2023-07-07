import Image from "next/image"
import vercodeLogo from "../../assets/img/Logo.png"
import vcoin from "../../assets/icons/vcoin.svg"

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
                    <p className="text-sm">your name</p>
                    <div className="rounded-full w-9 h-9 bg-gradient-to-r from-purple-500 to-pink-500"/>
                </div>
            </div>
        </div>
    )
}