import Image from "next/image"
import Subtract from "../../assets/icons/Subtract.svg"
import ProgressBar from "../ProgressBar"
import { TUsersTechProgress } from "~/types/typings.td"

const DefaultProgressBar = ({ usersTechProgress }: { usersTechProgress: TUsersTechProgress }) => {
  const currentUsersTechProgress = usersTechProgress?.[usersTechProgress?.length - 1]
  const xpPoints = currentUsersTechProgress?.xpPoints
  const xpToUpgrade = currentUsersTechProgress?.techProgress.xpToUpgrade
  const level = currentUsersTechProgress?.techProgress.level
  return (
    <div>
      <span className="font-medium level mb-1 px-1">{xpPoints} xp/{xpToUpgrade} xp</span>
      <ProgressBar xpToUpgrade={xpToUpgrade} xpPoints={xpPoints}>
        <div className="lg:w-6 absolute justify-self-end self-center translate-x-1">
          <Image src={Subtract} alt="icon" />
        </div>
      </ProgressBar>
      <div className="flex justify-between px-1 py-1">
        <span className="level">LV {level}</span>
        <span className="level">LV {level + 1}</span>
      </div>
    </div>
  )
}

export default DefaultProgressBar
