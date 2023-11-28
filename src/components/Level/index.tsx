"use client"
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Status from "../Status";
import { IUser, IUsersLevels } from "~/types/interfaces/api";
import { STATUS } from "~/types/enums/status";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "~/app/contexts/AuthContext";

const Level = ({ usersLevels}: { usersLevels: IUsersLevels}) => {
    const [data, setData] = useState<IUser>()
    const { getUser } = useContext(AuthContext)

    const projects = data?.usersProjects.filter((up) => {
        return up.project.level.name.toLowerCase() === usersLevels.level.name.toLowerCase()
    })

    const finishedProjects = data?.usersProjects.filter((up) => {
        return up.projectStatus === STATUS.COMPLETED
    })
        
    useEffect(() => {
        getUser().then((res) => setData(res))
    }, [getUser])
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
