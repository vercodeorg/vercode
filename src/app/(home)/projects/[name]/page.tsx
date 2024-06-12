"use client";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "~/app/contexts/AuthContext";
import ExerciseItem from "~/components/ExerciseItem";
import ProjectProgressBar from "~/components/ProjectProgressBar";
import Status from "~/components/Status";
import { EXERCISE_STATUS } from "~/types/enums/exerciseStatus";

const Project = ({ params }: { params: { name: string } }) => {
  const { user } = useContext(AuthContext);

  const userProject = user?.usersProjects.find((up) => {
    return (
      up.project.name.toLowerCase().replace(/\s/g, "") ===
      params.name.toLowerCase()
    );
  });

  const currentUsersExercises = user?.usersExercises.filter((ue) => {
    return (
      ue.exercise.project.name.toLowerCase().replace(/\s/g, "") ===
      params.name.toLowerCase()
    );
  });

  const exercisesFinished = currentUsersExercises?.filter((ue) => {
    return ue.exerciseStatus === EXERCISE_STATUS.SUCCESSFUL;
  });

  const totalCoinsByProject = currentUsersExercises?.reduce(
    (total, ue) => total + ue.exercise.coinsToWin,
    0,
  );

  const totalXpPoints = currentUsersExercises?.reduce(
    (total, ue) => total + ue.exercise.xpToWin,
    0,
  );

  const currentXpPoints = exercisesFinished?.reduce(
    (total, ue) => total + ue.exercise.xpToWin,
    0,
  );

  const projectProgressBarProps = {
    color: "text-dark-gray",
    min: exercisesFinished?.length,
    max: currentUsersExercises?.length,
    totalCoins: totalCoinsByProject,
    totalXpPoints: totalXpPoints,
    currentXpPoints: currentXpPoints,
  };

  return (
    <div className="w-full h-screen bg-cleaner-gray lg:px-20 2xl:px-28 py-16">
      <div className="flex items-center gap-8 lg:mb-6 2xl:mb-10">
        <h1 className="font-semibold lg:text-[40px] 2xl:text-5xl tracking-tighter text-dark-gray">
          {userProject?.project.name}
        </h1>
        <div>
          <Status statusName={userProject?.projectStatus} />
        </div>
      </div>
      <div className="w-96">
        <ProjectProgressBar {...projectProgressBarProps} />
      </div>
      <div className="flex flex-col 2xl:gap-3 lg:gap-2 2xl:mt-10 lg:mt-6">
        {currentUsersExercises?.map((e) => (
          <ExerciseItem
            key={e.id}
            id={e.exercise.id}
            name={e.exercise.name}
            status={e.exerciseStatus}
          />
        ))}
      </div>
    </div>
  );
};
export default Project;
