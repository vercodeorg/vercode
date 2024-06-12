import { use } from "react";
import Badge from "~/components/Badge";
import { getUserData } from "~/fetch/getUser";
import { IUser, IUsersBadges } from "~/types/interfaces/api";

const Badges = () => {
  return (
    <div className="w-full h-screen bg-cleaner-gray lg:px-20 2xl:px-28 py-16">
      <h1 className="font-semibold lg:text-[40px] 2xl:text-5xl tracking-tighter text-dark-gray lg:mb-6 2xl:mb-10">
        Emblemas
      </h1>
      <div className="w-full bg-white rounded-3xl px-4 py-10 flex gap-2"></div>
    </div>
  );
};
export default Badges;
