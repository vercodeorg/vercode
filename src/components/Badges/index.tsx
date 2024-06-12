import { IUser } from "~/types/interfaces/api";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const Badges = ({ user }: { user: IUser | undefined }) => {
  const badge = user?.usersBadges[user.usersBadges.length - 1].badge;
  return (
    <div className="lg:col-span-4 2xl:col-span-2 bg-cleaner-gray relative rounded-3xl lg:px-6 2xl:px-8 py-6">
      <h2 className="font-semibold xl:text-2xl text-dark-gray tracking-tight">
        Emblemas
      </h2>
      <div className="px-5 py-1 flex items-center gap-4">
        <div className="w-28">
          <img className="w-full" src={badge?.imageUrl} alt="bagde_icon" />
        </div>
        <div className="">
          <h3 className="font-extrabold text-dark-gray xl:text-xl">
            {badge?.name}
          </h3>
          <span className="font-semibold text-medium-gray lg:text-sm 2xl:text-base">
            RANK - LV {user?.level}
          </span>
        </div>
      </div>
      <Link href={`user/${user?.username}/badges`}>
        <div className="lg:w-8 2xl:w-10 bg-strong-gray rounded-full float-right">
          <ChevronRightIcon className="text-cleaner-gray translate-x-[2px]" />
        </div>
      </Link>
    </div>
  );
};

export default Badges;
