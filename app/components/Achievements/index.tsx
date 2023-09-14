import Link from "next/link"
import Achievement from "../Achievement"
import { ChevronRightIcon } from "@heroicons/react/20/solid"

const Achievements = () => {
    return (
        <div className="col-span-5 row-span-1 bg-cleaner-gray relative rounded-3xl px-8 pt-6 pb-3">
            <h2 className="font-semibold xl:text-2xl text-dark-gray tracking-tight mb-4">
                Conquistas
            </h2>
            <Achievement />
            <Achievement />
            <Link href={"/achievements"}>
                <div className="lg:w-8 2xl:w-10 bg-strong-gray rounded-full float-right mt-10">
                    <ChevronRightIcon className="text-cleaner-gray translate-x-[2px]"/>
                </div>
            </Link>
        </div>
    )
}
export default Achievements