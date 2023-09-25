import Image from 'next/image';
import Badge from "~/assets/icons/Badge.png"
import SimpleProgressBar from '~/components/SimpleProgressBar';
import LevelProject from '~/components/LevelProject';
import { STATUS } from '~/types/status';
import { use } from 'react';
import { getUser } from '~/fetch/getUser';
import { TUser } from '~/types/typings.td';

const Level = ({params}: {params: {levelId: number}}) => {
    const user: TUser = use(getUser());
    const levelId = Number(params.levelId);
    const userLevel = user.usersLevels.find(ul => {
        return ul.level.id === levelId
        })
    return (
        <div className="w-full bg-cleaner-gray px-28 py-16">
            <div className='flex items-center gap-6 lg:mb-6 2xl:mb-10'>
                <h1 className="font-semibold lg:text-4xl 2xl:text-5xl tracking-tighter text-dark-gray">
                    {userLevel?.level.name}
                </h1>
                <div className='lg:w-16 2xl:w-20'>
                    <Image src={Badge} alt='badge-icon'/>
                </div>
            </div>
            <SimpleProgressBar/>
            <div className='w-full bg-white rounded-3xl mt-10 h-full px-14 py-10 flex flex-col gap-8'>
                <LevelProject status={STATUS.BLOCKED}/>
                <LevelProject status={STATUS.IN_PROGRESS}/>
                <LevelProject status={STATUS.IN_PROGRESS}/>
                <LevelProject status={STATUS.BLOCKED}/>
            </div>
        </div>
    )
}
export default Level
