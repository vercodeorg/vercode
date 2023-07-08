'use client'
import Image from "next/image"
import Link from "next/link"
import logoIcon from "../../../public/logo icon.png"
import { usePathname } from "next/navigation"
import { UserIcon } from "@heroicons/react/24/outline"
import { CubeTransparentIcon } from "@heroicons/react/24/outline"
import { FolderOpenIcon } from "@heroicons/react/24/outline"
import { RectangleStackIcon } from "@heroicons/react/24/outline"
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline"

export const SideBar = () => {

    const pathname = usePathname()
    return (
        <div className="bg-[#202020] xl:w-14">
            <nav>
                <div className="xl:w-8 mx-auto pt-4 pb-16 cursor-pointer">
                    <Link href={"/"}>
                        <Image src={logoIcon} alt="triangle-logo" />
                    </Link>
                </div>
                <ul className="flex flex-col gap-8 nav-icons">
                    <Link href={"/user"}>
                        <li className={pathname == "/user" ? "active" : "w-full"}>
                            <UserIcon className="text-white w-7"/>
                        </li>
                    </Link>
                    <li>
                        <CubeTransparentIcon className="text-white w-7" />
                    </li>
                    <li>
                        <FolderOpenIcon className="text-white w-7"/>
                    </li>
                    <Link href={"/levels"}>
                        <li className={pathname == "/levels" ? "active" : ""}>
                            <RectangleStackIcon className="text-white w-7"/>
                        </li>
                    </Link>
                    <li>
                        <ChatBubbleLeftRightIcon className="text-white w-7" />
                    </li>
                </ul>
            </nav>
        </div>
    )
}