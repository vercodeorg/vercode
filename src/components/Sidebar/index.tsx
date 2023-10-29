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
        <div className="bg-black xl:w-14">
            <nav>
                <div className="xl:w-8 mx-auto pt-4 pb-16 cursor-pointer">
                    <Link href={"/"}>
                        <Image src={logoIcon} alt="triangle-logo" />
                    </Link>
                </div>
                <ul className="flex flex-col gap-8 nav-icons">
                    <Link href={"/user"} className="user">
                        <li className={pathname.startsWith("/user") ? "active": ""}>
                            <UserIcon className="icons" />
                        </li>
                    </Link>
                    <li>
                        <CubeTransparentIcon className="icons" />
                    </li>
                    <Link href={"/projects"} className="projects">
                        <li className={pathname.startsWith("/projects") || pathname.startsWith("/exercise")  ? "active": ""}>
                            <FolderOpenIcon className="icons" />
                        </li>
                    </Link>
                    <Link href={"/levels"} className="levels">
                        <li className={pathname.startsWith("/levels") ? "active": ""}>
                            <RectangleStackIcon className="icons" />
                        </li>
                    </Link>
                    {/* <li>
                        <ChatBubbleLeftRightIcon className="icons" />
                    </li> */}
                </ul>
            </nav>
        </div>
    )
}