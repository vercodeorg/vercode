import Image from "next/image"
import clang from "~/assets/icons/C.svg"

type TypeProps = {
    technologies: string[] | undefined,
    xpPoints: number | undefined
}

const Technology = ({technologies, xpPoints}: TypeProps) => {
    return (
        <div className="flex flex-col align-middle">
            <Image src={clang} alt="icon" />
            <span className="font-medium text-base text-dark-gray">+ {xpPoints} xp</span>
        </div>
    )
}
export default Technology
