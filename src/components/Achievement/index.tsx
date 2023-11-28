import Image from "next/image"
import ProgressBar from "../ProgressBar"
import achievIcon from "../../assets/icons/hearth-achiev.svg"

const Achievement = () => {
    return (
        <div className="w-full flex gap-2 border border-light-gray p-2">
            <div>
                <Image src={achievIcon} alt="" width={120} height={150} />
            </div>
            <div className="w-full flex flex-col">
                <span className="font-medium text-lg text-dark-gray">
                    Mago dos códigos
                </span>
                <span className="level">
                    Complete 7 easy C exercises
                </span>
                <div className="flex items-center gap-2">
                        <></>
                    <span className="level">5/7</span>
                </div>
            </div>
        </div>
    )
}
export default Achievement
