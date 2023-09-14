import Project from "../components/Project"
import { STATUS } from "../types/status"

const Projects = () => {
    return (
        <div className="w-full h-screen bg-cleaner-gray lg:px-20 2xl:px-28 py-16">
            <h1 className="font-semibold lg:text-[40px] 2xl:text-5xl tracking-tighter text-dark-gray lg:mb-6 2xl:mb-10">Meus Projetos</h1>
            <Project status={STATUS.BLOCKED}/>
        </div>
    )
}
export default Projects