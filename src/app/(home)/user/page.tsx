"use client";
import Image from "next/image";
import bgCover from "~/assets/img/bg-cover.png";
import UserInfoCard from "~/components/UserInfoCard";
import Badges from "~/components/Badges";
import RankProgress from "~/components/RankProgress";
import TechProgress from "~/components/TechProgress";
import Achievements from "~/components/Achievements";
import { useContext } from "react";
import { AuthContext } from "~/app/contexts/AuthContext";

const User = () => {
  const { user } = useContext(AuthContext);

  const userTechProgress =
    user?.usersTechProgress?.[user?.usersTechProgress.length - 1];

  const rankProgressProps = {
    xp: user?.xpPoints,
    xpToUpgrade: user?.xpToUpgrade,
    level: user?.level,
  };

  const techProgressProps = {
    username: user?.username,
    xp: userTechProgress?.xpPoints,
    xpToUpgrade: userTechProgress?.techProgress.xpToUpgrade,
    level: userTechProgress?.techProgress.level,
  };

  return (
    <>
      <div className="w-full xl:h-48">
        <Image src={bgCover} alt="background-colorful" className="w-full" />
      </div>
      <div className="2xl:px-48 xl:px-28 lg:px-24 2xl:py-16 lg:pb-10">
        <UserInfoCard user={user} />
        <div className="w-full grid lg:grid-cols-11 2xl:grid-cols-5 grid-rows-1 gap-16 lg:gap-10">
          <div className="lg:col-span-3 2xl:col-span-1" />
          <Badges user={user} />
          <RankProgress {...rankProgressProps} />
        </div>
        <div className="w-full grid grid-cols-11 grid-rows-1 gap-16 lg:gap-10 mt-10">
          <TechProgress {...techProgressProps} />
          <Achievements />
        </div>
      </div>
    </>
  );
};

export default User;
