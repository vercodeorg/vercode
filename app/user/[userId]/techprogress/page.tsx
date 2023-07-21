import TechProgressBar from "@/app/components/TechProgressBar"

const TechProgress = () => {
    return (
        <div className="w-full bg-cleaner-gray lg:px-20 2xl:px-28 py-16">
            <h1 className="font-semibold lg:text-[40px] 2xl:text-5xl tracking-tighter text-dark-gray lg:mb-6 2xl:mb-10">
                Tech Progress
            </h1>
            <div className="w-full bg-white rounded-3xl p-8 flex flex-col gap-2e">
                <TechProgressBar/>
                <TechProgressBar/>
                <TechProgressBar/>
                <TechProgressBar/>
            </div>
        </div>
    )
}
export default TechProgress