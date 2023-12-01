"use client"
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, User } from "@nextui-org/react"
import Link from "next/link"

interface TypeProps {
    logOut: () => void,
    username?: string,
    name?: string,
}

const UserDropdown = (props: TypeProps) => {
    return (
        <div className="h-full">
            <Dropdown placement="bottom-start" className="h-full">
                <DropdownTrigger>
                    <User
                        as="button"
                        avatarProps={{
                            isBordered: true,
                            src: "/user-default-photo.png",
                        }}
                        className="transition-transform"
                        description={`@ ${props.username}`}
                        name={props.name}
                    />
                </DropdownTrigger>
                <DropdownMenu aria-label="User Actions" variant="flat">
                    <DropdownItem key="profile" className="h-14 gap-2">
                        <p className="font-bold">Logado como</p>
                        <p className="font-bold">@{props.username}</p>
                    </DropdownItem>
                    <DropdownItem key="configurations">
                        <Link href={"/user"}>
                            Perfil
                        </Link>
                    </DropdownItem>
                    <DropdownItem key="logout" color="danger" onClick={props.logOut}>
                        Sair
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}
export default UserDropdown
