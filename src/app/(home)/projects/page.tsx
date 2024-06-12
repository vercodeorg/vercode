"use client";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "~/app/contexts/AuthContext";
import Project from "~/components/Project";
import { IUser } from "~/types/interfaces/api";

const Projects = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="w-full h-screen bg-cleaner-gray lg:px-20 2xl:px-28 py-16">
      <h1 className="font-semibold lg:text-[40px] 2xl:text-5xl tracking-tighter text-dark-gray lg:mb-6 2xl:mb-10">
        Meus Projetos
      </h1>
      <div className="grid grid-cols-4 gap-3">
        {user?.usersProjects.map((up) => (
          <Project
            key={up.id}
            status={up.projectStatus}
            name={up.project.name}
            difficulty={up.project.difficulty}
            projectId={up.project.id}
            usersProjectId={up.id}
            unlockCost={up.project.unlockCost}
          />
        ))}
      </div>
    </div>
  );
};
export default Projects;
