import Project from "../components/Project"

const Projects = () => {
    return (
        <div className="w-full h-screen bg-gray-background lg:px-20 2xl:px-28 py-16">
            <h1 className="font-semibold lg:text-[40px] 2xl:text-5xl tracking-tighter text-dark-gray lg:mb-6 2xl:mb-10">My Projects</h1>
            <Project />
        </div>
    )
}
export default Projects