import Image from "next/image";
import DefaultProgressBar from "../DefaultProgressBar";
import CIcon from "~/assets/icons/C.svg";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { IUser } from "~/types/interfaces/api";

const TechProgress = ({ user }: { user: IUser | undefined }) => {
	return (
		<div className="col-span-6 row-span-1 bg-cleaner-gray relative rounded-3xl px-8 pt-6 pb-3">
			<h2 className="font-semibold xl:text-2xl text-dark-gray tracking-tight">
				Progresso Tech
			</h2>
			<div>
				<div className="lg:pt-2 2xl:pt-5">
					<Image src={CIcon} alt="tech-icon" />
				</div>
				<DefaultProgressBar usersTechProgress={user?.usersTechProgress} />
				<div className="lg:pt-2 2xl:pt-5">
					<Image src={CIcon} alt="tech-icon" />
				</div>
				<DefaultProgressBar usersTechProgress={user?.usersTechProgress} />
			</div>
			<Link href={`user/${user?.username}/techprogress`}>
				<div className="lg:w-8 2xl:w-10 bg-strong-gray rounded-full float-right mt-4">
					<ChevronRightIcon className="text-cleaner-gray translate-x-[2px]" />
				</div>
			</Link>
		</div>
	);
};

export default TechProgress;
