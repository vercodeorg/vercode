import Link from "next/link"
import Button from "../components/Button"
import Input from "../components/Input"

const Login = () => {
    return (
        <div className="flex max-h-screen overflow-y-clip">
            <div className="bg-login-cover w-[1000px] h-screen">
            </div>
            <div className="w-full flex justify-center items-center">
                <div className="flex flex-col gap-8">
                    <h1 className="font-extrabold tracking-tighter text-5xl">Login</h1>
                    <form>
                        <div className="flex flex-col gap-4">
                            <Input type="text" placeholder="Endereço de Email" />
                            <Input type="password" placeholder="Senha" />
                        </div>
                        <div className="flex flex-col mt-5 gap-5">
                            <Link href={"/register"} className="font-normal text-base underline">
                                Não tem uma conta? Registre-se.
                            </Link>
                            <Button>
                                Login
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login