"use client"
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, User } from "@nextui-org/react"
import Link from "next/link"
import { useContext } from "react"
import { AuthContext } from "~/app/contexts/AuthContext"

const UserDropdown = () => {
    const { logOut } = useContext(AuthContext)
    return (
        <div className="h-full">
            <Dropdown placement="bottom-start" className="h-full">
                <DropdownTrigger>
                    <User
                        as="button"
                        avatarProps={{
                            isBordered: true,
                            src: "/eu3.jpeg",
                        }}
                        className="transition-transform"
                        description="@prince"
                        name="Pedro Henrique"
                    />
                </DropdownTrigger>
                <DropdownMenu aria-label="User Actions" variant="flat">
                    <DropdownItem key="profile" className="h-14 gap-2">
                        <p className="font-bold">Signed in as</p>
                        <p className="font-bold">@prince</p>
                    </DropdownItem>
                    <DropdownItem key="configurations">
                        <Link href={"/user"}>
                            Perfil
                        </Link>
                    </DropdownItem>
                    <DropdownItem key="logout" color="danger" onClick={logOut}>
                        Sair
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}
export default UserDropdown
