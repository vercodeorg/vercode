"use client"
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Status from "../Status";
import { STATUS } from "~/types/enums/status";
import { useContext } from "react";
import { AuthContext } from "~/app/contexts/AuthContext";
import { IUsersLevels } from "~/types/interfaces/api";

const Level = ({ usersLevels}: { usersLevels: IUsersLevels}) => {
    const { user } = useContext(AuthContext)

    const projects = user?.usersProjects.filter((up) => {
        return up.project.level.name.toLowerCase() === usersLevels.level.name.toLowerCase()
    })

    const finishedProjects = user?.usersProjects.filter((up) => {
        return up.projectStatus === STATUS.COMPLETED
    })
        
	return (
		<Link href={`/levels/${usersLevels.level.id}`}>
			<div className="w-full h-20 mb-6 flex justify-between items-center px-8 rounded-xl drop-shadow-xl bg-white">
				<div className="flex gap-6">
					<h2 className="font-bold lg:text-2xl 2xl:text-3xl tracking-tight text-dark-gray">
						{usersLevels.level.name}
					</h2>
					<ArrowRightIcon className="lg:w-8 2xl:w-10" />
				</div>
				<div className="flex gap-8">
					<span className="font-medium lg:text-base 2xl:text-xl text-medium-gray">
						Projetos {finishedProjects?.length}/{projects?.length}
					</span>
					<Status statusName={usersLevels.status} />
				</div>
			</div>
		</Link>
	);
};
export default Level;
