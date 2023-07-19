import Image from 'next/image';
import Badge from "../../assets/icons/Badge.png"
import SimpleProgressBar from '@/app/components/SimpleProgressBar';
import LevelProject from '@/app/components/LevelProject';

const Level = ({params}: {params: {level: string}}) => {
    return (
        <div className="w-full bg-cleaner-gray px-28 py-16">
            <div className='flex items-center gap-6 lg:mb-6 2xl:mb-10'>
                <h1 className="font-semibold lg:text-4xl 2xl:text-5xl tracking-tighter text-dark-gray">{params.level}</h1>
                <div className='lg:w-16 2xl:w-20'>
                    <Image src={Badge} alt='badge-icon'/>
                </div>
            </div>
            <SimpleProgressBar/>
            <div className='w-full bg-white rounded-3xl mt-10 h-full px-14 py-10 flex flex-col gap-8'>
                <LevelProject/>
                <LevelProject/>
                <LevelProject/>
                <LevelProject/>
            </div>
        </div>
    )
}
export default Level