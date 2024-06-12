"use client";
import Image from "next/image";
import Badge from "~/assets/icons/Badge.png";
import SimpleProgressBar from "~/components/SimpleProgressBar";
import LevelProject from "~/components/LevelProject";
import { useContext } from "react";
import { AuthContext } from "~/app/contexts/AuthContext";
import { STATUS } from "~/types/enums/status";

const Level = ({ params }: { params: { levelId: string } }) => {
  const { user } = useContext(AuthContext);

  const userLevel = user?.usersLevels.find((ul) => {
    return ul.level.id.toString() === params.levelId;
  });

  const projects = user?.usersProjects.filter((up) => {
    return up.project.level.id.toString() === params.levelId;
  });

  const projectsFinished = user?.usersProjects.filter((up) => {
    return up.projectStatus === STATUS.COMPLETED;
  });

  const currentProjectsAmount = projectsFinished?.length;
  const maxProjectsAmount = projects?.length;

  return (
    <div className="w-full bg-cleaner-gray px-28 py-16">
      <div className="flex items-center gap-6 lg:mb-6 2xl:mb-10">
        <h1 className="font-semibold lg:text-4xl 2xl:text-5xl tracking-tighter text-dark-gray">
          {userLevel?.level.name}
        </h1>
        <div className="lg:w-16 2xl:w-20">
          <Image src={Badge} alt="badge-icon" />
        </div>
      </div>
      <SimpleProgressBar min={currentProjectsAmount} max={maxProjectsAmount} />
      <div className="w-full bg-white rounded-3xl mt-10 h-full px-14 py-10 flex flex-col gap-8">
        {user?.usersProjects.map((up) => (
          <LevelProject key={up.id} usersProjects={up} />
        ))}
      </div>
    </div>
  );
};
export default Level;
