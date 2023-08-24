
const ProgressBar = ({children}: {children: React.ReactNode | null}) => {
    return (
        <div className="grid bg-light-gray w-full lg:h-4 2xl:h-6 rounded-xl">
            <div className="bg-gradient-to-r from-dark-purple to-light-purple relative w-2/3 lg:h-4 2xl:h-6 rounded-xl" />
            {children}
        </div>
    )
}
export default ProgressBar