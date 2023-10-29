"use client";
import Image from "next/image";
import bgCover from "~/assets/img/bg-cover.png";
import UserInfoCard from "~/components/UserInfoCard";
import Badges from "~/components/Badges";
import RankProgress from "~/components/RankProgress";
import TechProgress from "~/components/TechProgress";
import Achievements from "~/components/Achievements";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "~/app/contexts/AuthContext";
import { IUser } from "~/types/interfaces/api";

const User = () => {
	const [data, setData] = useState<IUser>();
	const { getUser } = useContext(AuthContext);
	useEffect(() => {
		getUser().then((res) => setData(res));
	}, [getUser]);
	return (
		<>
			<div className="w-full xl:h-48">
				<Image src={bgCover} alt="background-colorful" className="w-full" />
			</div>
			<div className="2xl:px-48 xl:px-28 lg:px-24 2xl:py-16 lg:pb-10">
				<UserInfoCard user={data} />
				<div className="w-full grid lg:grid-cols-11 2xl:grid-cols-5 grid-rows-1 gap-16 lg:gap-10">
					<div className="lg:col-span-3 2xl:col-span-1" />
					<Badges user={data} />
					<RankProgress usersTechProgress={data?.usersTechProgress} />
				</div>
				<div className="w-full grid grid-cols-11 grid-rows-1 gap-16 lg:gap-10 mt-10">
					<TechProgress user={data} />
					<Achievements />
				</div>
			</div>
		</>
	);
};

export default User;
