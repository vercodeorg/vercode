import Image from "next/image";
import userPic from "../../../public/user-default-photo.png";
import Coin from "../../assets/icons/Moeda.svg";
import { IUser } from "~/types/interfaces/api";

const UserInfoCard = ({ user }: { user: IUser | undefined }) => {
	const level = user?.usersPoints[0].rankProgress.level;
	return (
		<div className="2xl:w-64 lg:w-64  2xl:h-[396px] rounded-3xl pt-10 pb-20 bg-[#F5F5F7] flex flex-col justify-between items-center absolute top-14 lg:mt-16 2xl:mt-24">
			<div className="lg:w-28 lg:h-28 2xl:w-32 2xl:h-32 mb-4">
				<Image src={userPic} alt="user-photo" className="rounded-full w-full" />
			</div>
			<h2 className="font-semibold text-[#1A1A1A] xl:text-2xl">
			    {user?.username}	
			</h2>
			<div className="flex flex-col items-center gap-1">
				<span className="font-semibold text-medium-gray lg:text-lg 2xl:text-xl">
					{user?.username}
				</span>
				<div className="flex gap-2 items-center">
					<span className="font-semibold text-amber-500 text-sm">{user?.coins}</span>
					<Image src={Coin} alt="coin-icon" width={25} />
				</div>
				<span className="font-semibold text-medium-gray 2xl:text-sm lg:text-xs">
					RANK - LV {level}
				</span>
			</div>
		</div>
	);
};

export default UserInfoCard;
