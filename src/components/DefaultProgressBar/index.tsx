import Image from "next/image";
import Subtract from "../../assets/icons/Subtract.svg";
import ProgressBar from "../ProgressBar";

interface TypeProps {
  xp?: number;
  xpToUpgrade?: number;
  level?: number;
}

const DefaultProgressBar = (props: TypeProps) => {
  return (
    <div>
      <span className="font-medium level mb-1 px-1">
        {props?.xp} xp/{props?.xpToUpgrade} xp
      </span>
      <ProgressBar xpToUpgrade={props?.xpToUpgrade} xpPoints={props?.xp}>
        <div className="lg:w-6 absolute justify-self-end self-center translate-x-1">
          <Image src={Subtract} alt="icon" />
        </div>
      </ProgressBar>
      <div className="flex justify-between px-1 py-1">
        <span className="level">LV {props?.level}</span>
        <span className="level">LV {props.level! + 1}</span>
      </div>
    </div>
  );
};

export default DefaultProgressBar;
