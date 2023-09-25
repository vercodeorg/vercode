import Image from "next/image"
import ProgressBar from "../DefaultProgressBar"
import gitIcon from "../../assets/icons/git.svg"

const TechProgressBar = () => {
    return (
        <div className="w-2/5">
            <div className="lg:pt-2 2xl:pt-5">
                <Image src={gitIcon} alt="tech-icon" />
            </div>
            <ProgressBar />
        </div>
    )
}
export default TechProgressBar