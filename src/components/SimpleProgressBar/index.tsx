import Subtract from "../../assets/icons/Subtract.svg"
import Image from "next/image"

type TypeProps = {
    min: number | undefined,
    max: number | undefined,
}

const SimpleProgressBar = (props: TypeProps) => {
    const progressPercent = (100 * props.min!) / props.max!;
    return (
        <div className="w-1/2">
            <span className="font-medium level mb-1 px-1">{props.min}/{props.max} Projetos</span>
            <div className="grid bg-light-gray w-full lg:h-4 2xl:h-6 rounded-xl">
                <div className="bg-gradient-to-r from-dark-purple to-light-purple relative lg:h-4 2xl:h-6 rounded-xl"
                    style={{ width: `${progressPercent}%` }} />
                <div className="lg:w-6 2xl:w-8 absolute justify-self-end self-center translate-x-1" >
                    <Image src={Subtract} alt="icon" />
                </div>
            </div>
        </div>
    )
}
export default SimpleProgressBar
