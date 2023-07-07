'use client'
import userIcon from "../../assets/icons/user_icon.svg"
import graphIcon from "../../assets/icons/graph_icon.svg"
import projectsIcon from "../../assets/icons/projects_icon.svg"
import stagesIcon from "../../assets/icons/stages_icon.svg"
import socialIcon from "../../assets/icons/social_icon.svg"
import logoIcon from "../../assets/img/logo icon.png"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

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
                <ul className="flex flex-col gap-8 nav-icons align-middle">
                    <Link href={"/user"}>
                        <li className={pathname == "/user" ? "active": ""}>
                            <Image src={userIcon} alt="user-icon" />
                        </li>
                    </Link>
                    <li>
                        <Image src={graphIcon} alt="graph-icon" />
                    </li>
                    <li>
                        <Image src={projectsIcon} alt="projects-icon" />
                    </li>
                    <li>
                        <Image src={stagesIcon} alt="stages-icon" />
                    </li>
                    <li>
                        <Image src={socialIcon} alt="social-icon" />
                    </li>
                </ul>
            </nav>
        </div>
    )
}