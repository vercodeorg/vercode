import Image from "next/image";
import clang from "~/assets/icons/C.svg";

type TypeProps = {
  technology?: string[];
  xpPoints?: number;
};

const Technology = ({ technology, xpPoints }: TypeProps) => {
  return (
    <div className="flex align-middle items-center gap-2">
      <Image src={clang} alt="icon" />
      <span className="font-medium text-base text-blue-900">
        + {xpPoints} xp
      </span>
    </div>
  );
};
export default Technology;
