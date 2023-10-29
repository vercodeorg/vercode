import { DIFFICULTY } from "../enums/difficulty";
import { EXERCISE_STATUS } from "../enums/exerciseStatus";
import { STATUS } from "../enums/status";

export interface IUser {
	id: number;
	username: string;
	coins: number;
	xpPoints: number;
	usersBadges: IUsersBadges[];
	usersPoints: IUsersPoints[];
	usersTechProgress: IUsersTechProgress[];
	usersExercises: IUsersExercises[];
	usersProjects: IUsersProjects[];
	usersLevels: IUsersLevels[];
}

export interface IUsersBadges {
	id: number;
	badge: IBadge;
}

export interface IBadge {
	id: number;
	name: string;
	imageUrl: string;
}

export interface IUsersTechProgress {
	id: number;
	xpPoints: number;
	techProgress: ITechProgress;
}

export interface IUsersPoints {
	id: number;
	xpPoints: number;
	rankProgress: IRankProgress;
}

export interface ITechProgress {
	id: number;
	name: string;
	level: number;
	xpToUpgrade: number;
}

export interface IRankProgress {
	id: number;
	level: number;
	requiredXpToUpdate: number;
}

export interface ILevel {
	id: number;
	name: string;
	unlock_cost: number;
	xp_required: number;
}

export interface IProject {
	id: number;
	name: string;
	difficulty: string;
	unlockCost: number;
}

export interface IExercise {
	id: number;
	name: string;
	coinsToWin: number;
	xpToWin: number;
	technologies: string[];
	turnInDirectory: string;
	filesToTurnIn: string[];
	allowedFunctions: string[];
	imageInstructions: string;
	codeResult: string;
	project: IProject;
}

export interface IUsersLevels {
	id: number;
	status: STATUS;
	user: IUser;
	level: ILevel;
}

export interface IUsersProjects {
	id: number;
	projectStatus: STATUS;
	ifUnlockedWithCoins: boolean;
	project: {
		id: number;
		name: string;
		difficulty: DIFFICULTY;
		unlockCost: number;
		level: ILevel;
	};
}

export interface IUsersExercises {
	id: number;
	exerciseStatus: EXERCISE_STATUS;
	dateLastTry: string;
	exercise: IExercise;
}

export interface IUserExerciseById {
	id: number;
	username: string;
	coins: number;
	xpPoints: number;
	usersExercises: IUsersExercises;
}
