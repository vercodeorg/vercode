import Image from "next/image";
import Trophy from "../../assets/icons/Trophy.svg";
import DefaultProgressBar from "../DefaultProgressBar";
import { IUsersTechProgress } from "~/types/interfaces/api";

const RankProgress = ({
	usersTechProgress,
}: { usersTechProgress: IUsersTechProgress[] | undefined }) => {
	return (
		<div className="lg:col-span-4 2xl:col-span-2 bg-cleaner-gray relative rounded-3xl lg:px-6 2xl:px-8 py-2">
			<div className="flex items-center gap-3">
				<h2 className="font-semibold xl:text-2xl text-dark-gray tracking-tight">
					Progresso de Ranking
				</h2>
				<div className="lg:w-14 2xl:w-16">
					<Image src={Trophy} alt="trophy-icon" />
				</div>
			</div>
			<div className="pt-10">
				<DefaultProgressBar usersTechProgress={usersTechProgress} />
			</div>
		</div>
	);
};

export default RankProgress;
