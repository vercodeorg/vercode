import Image from "next/image"
import vercodeLogo from "../../assets/img/Logo.png"
import vcoin from "../../assets/icons/vcoin.svg"
import UserDropdown from "../UserDropdown"

export const Navbar = () => {
    return (
        <div className="xl:h-14 w-full flex items-center px-4 justify-between">
            <div className="w-36">
                <Image src={vercodeLogo} alt="vercode-name-logo" width={120} />
            </div>
            <div className="flex items-center gap-3">
                <span>suas moedas:</span>
                <div className="flex mr-8 gap-2 items-center coins">
                    <span className="font-semibold text-amber-500 text-sm">{0}</span>
                    <Image src={vcoin} alt="coin-icon" width={25} />
                </div>
                <div className="flex items-center gap-2">
                    <UserDropdown />
                </div>
            </div>
        </div>
    )
}
