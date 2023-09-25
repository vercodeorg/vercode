import { use } from "react"
import Level from "~/components/Level"
import { getUser } from "~/fetch/getUser";
import { TUser, } from "~/types/typings.td";

const Levels = () => {
    const user: TUser = use(getUser());
    return (
         <div className="w-full h-screen bg-cleaner-gray lg:px-20 2xl:px-28 py-16">
            <h1 className="font-semibold lg:text-[40px] 2xl:text-5xl tracking-tighter text-dark-gray lg:mb-6 2xl:mb-10">Levels</h1>
            {user.usersLevels.map((ul) => (
                <Level key={ul.id} level={ul.level}/>
            ))}
        </div>
    )
}
export default Levels
