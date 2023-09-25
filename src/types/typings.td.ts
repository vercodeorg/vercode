import { STATUS } from "./status";

export type TUser = {
    id: number;
    username: string,
    coins: number,
    xpPoints: number,
    usersBadges: TUsersBadges,
    usersPoints: TUsersPoints,
    usersTechProgress: TUsersTechProgress
    usersExercises: TUsersExercises
    usersProjects: TUsersProjects
    usersLevels: TUsersLevels
}

export type TUsersBadges = [
    {
        id: number,
        badge: TBadge
    }
]

export type TBadge = {
    id: number,
    name: string,
    imageUrl: string
}

export type TUsersTechProgress = [
    {
        id: number,
        xpPoints: number,
        techProgress: TTechProgress
    }
]

export type TUsersPoints = [
    {
        id: number,
        xpPoints: number,
        rankProgress: TRankProgress
    }
]

export type TTechProgress = {
    id: number,
    name: string,
    level: number,
    xpToUpgrade: number
}

export type TRankProgress = {
    id: number,
    level: number,
    requiredXpToUpdate: number
}

export type TLevel = {
    id: number,
    name: string,
    unlock_cost: number,
    xp_required: number,
}

export type TProject = {
    id: number,
    name: string,
    difficulty: string,
    unlockCost: number,
}

export type TExercise = {
    id: number,
    name: string,
    coinsToWin: number,
    xpToWin: number,
    technologies: string[],
    turnInDirectory: string,
    filesToTurnIn: string[],
    allowedFunctions: string[],
    imageInstructions: string,
    codeResult: string
}

export type TUsersLevels = [
    {
        id: number,
        status: STATUS,
        user: TUser,
        level: TLevel
    }
]

export type TUsersProjects = [
    {
        id: number,
        projectStatus: STATUS,
        ifUnlockedWithCoins: boolean,
        project: TProject 
    }
]  


export type TUsersExercises = [
    {
        id: number,
        exerciseStatus: string,
        dateLastTry: string,
        exercise: TExercise
    }
]  



