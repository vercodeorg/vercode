import Image from "next/image";
import completedIcon from "../../assets/icons/check-mark.png";
import failedIcon from "../../assets/icons/cross-mark.png";
import { EXERCISE_STATUS } from "~/types/enums/exerciseStatus";

const StatusIcon = ({ statusName }: { statusName: EXERCISE_STATUS }) => {
  if (statusName == EXERCISE_STATUS.NOT_STARTED) {
    return <div />;
  } else if (statusName == EXERCISE_STATUS.SUCCESSFUL) {
    return <Image src={completedIcon} alt="check-icon" />;
  } else {
    return <Image src={failedIcon} alt="cross-icon" />;
  }
};
export default StatusIcon;
