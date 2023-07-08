"use client"
import { STATUS } from "@/app/types/status"
import { useEffect, useState } from "react"

const Status = ({ name }: { name: string }) => {
    const [statusName, setStatusName] = useState("")
    const [color, setColor] = useState("")

    useEffect(() => {
        if (STATUS.IN_PROGRESS == name) {
            setStatusName(name)
            setColor("bg-sky-700")
        } else {
            setStatusName(name)
            setColor("bg-green-700")
        }
    }, [name])
    return (
        <div className={`lg:w-28 2xl:w-32 h-7 rounded-full flex items-center justify-center ${color}`}>
            <span className="font-medium lg:text-sm 2xl:text-base text-white">{statusName}</span>
        </div>
    )
}
export default Status