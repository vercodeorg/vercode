"use client"
import Image from "next/image"
import vercodeLogo from "../../assets/img/Logo.png"
import vcoin from "../../assets/icons/vcoin.svg"
import UserDropdown from "../UserDropdown"
import { useContext, useEffect, useState } from "react"
import { IUser } from "~/types/interfaces/api"
import { AuthContext } from "~/app/contexts/AuthContext"

export const Navbar = () => {
    const [data, setData] = useState<IUser>();
    const { getUser, logOut } = useContext(AuthContext);

    useEffect(() => {
        getUser().then((res) => setData(res));
    }, [getUser]);
    return (
        <div className="xl:h-14 w-full flex items-center px-4 justify-between">
            <div className="w-36">
                <Image src={vercodeLogo} alt="vercode-name-logo" width={120} />
            </div>
            <div className="flex items-center gap-3">
                <span>suas moedas:</span>
                <div className="flex mr-8 gap-2 items-center coins">
                    <span className="font-semibold text-amber-500 text-sm">{data?.coins}</span>
                    <Image src={vcoin} alt="coin-icon" width={25} />
                </div>
                <div className="flex items-center gap-2">
                    <UserDropdown logOut={logOut} username={data?.username} name={data?.username} />
                </div>
            </div>
        </div>
    )
}
