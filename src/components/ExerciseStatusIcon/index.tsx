import { EXERCISE_STATUS } from "~/types/exerciseStatus"
import Image from "next/image"
import completedIcon from "../../assets/icons/check-mark.png"
import failedIcon from "../../assets/icons/cross-mark.png"

const StatusIcon = ({ statusName }: { statusName: EXERCISE_STATUS }) => {
  if (statusName == EXERCISE_STATUS.NOT_STARTED) {
    return <div />
  } else if (statusName == EXERCISE_STATUS.COMPLETED) {
    return <Image src={completedIcon} alt="check-icon" />
  } else {
    return <Image src={failedIcon} alt="cross-icon" />
  }
}
export default StatusIcon
