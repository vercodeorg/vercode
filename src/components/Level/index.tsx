import { ArrowRightIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import Status from "../Status"
import { STATUS } from "~/types/status"
import { TLevel } from "~/types/typings.td"

const Level = ({ level }: { level: TLevel }) => {
  return (
    <Link href={`/levels/${level.id}`}>
      <div className="w-full h-20 flex justify-between items-center px-8 rounded-xl drop-shadow-xl bg-white">
        <div className="flex gap-6">
          <h2 className="font-bold lg:text-2xl 2xl:text-3xl tracking-tight text-dark-gray">
            {level.name}
          </h2>
          <ArrowRightIcon className="lg:w-8 2xl:w-10" />
        </div>
        <div className="flex gap-8">
          <span className="font-medium lg:text-base 2xl:text-xl text-medium-gray">Projetos 0/25</span>
          <Status statusName={STATUS.BLOCKED} />
        </div>
      </div>
    </Link>
  )
}
export default Level
