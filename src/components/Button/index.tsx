type TypeProps = {
    children: string
}

const Button = ({children}: TypeProps) => {
    return (
        <button className="w-full bg-black font-semibold text-xl text-white rounded-lg py-3">
            {children}
        </button>
    )
}
export default Button