"use client";
import { useContext } from "react";
import { AuthContext } from "~/app/contexts/AuthContext";
import Level from "~/components/Level";

const Levels = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="w-full h-screen bg-cleaner-gray lg:px-20 2xl:px-28 py-16">
      <h1 className="font-semibold lg:text-[40px] 2xl:text-5xl tracking-tighter text-dark-gray lg:mb-6 2xl:mb-10">
        Levels
      </h1>
      {user?.usersLevels.map((ul) => <Level key={ul.id} usersLevels={ul} />)}
    </div>
  );
};
export default Levels;
