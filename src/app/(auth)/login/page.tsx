"use client"
import Link from "next/link"
import { Button } from "@nextui-org/react";
import { useContext, useState } from "react"
import { Input } from "@nextui-org/react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
import { AuthContext } from "~/app/contexts/AuthContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const { signIn } = useContext(AuthContext)
    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleSubmit = async () => {
        if (email && password) {
            try {
                await signIn({ email, password });
            } catch (err) {
                return toast("Email ou senha inválidos")
            }
        }
    }

    return (
        <div className="flex max-h-screen overflow-y-clip">
            <div className="bg-login-cover w-[1000px] h-screen bg-center">
            </div>
            <div className="w-full flex justify-center items-center">
                <div className="flex flex-col gap-8">
                    <h1 className="font-extrabold tracking-tighter text-5xl">login</h1>
                    <form>
                        <div className="flex flex-col gap-4">
                            <Input
                                onChange={e => setEmail(e.target.value)}
                                labelPlacement="inside"
                                label="Email"
                                variant="bordered"
                                value={email} type="email" />
                            <Input
                                onChange={e => setPassword(e.target.value)}
                                labelPlacement="inside"
                                label="Senha"
                                variant="bordered"
                                value={password}
                                endContent={
                                    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                        {isVisible ? (
                                            <EyeSlashIcon className="w-5" />
                                        ) : (
                                            <EyeIcon className="w-5" />
                                        )}
                                    </button>
                                }
                                type={isVisible ? "text" : "password"}
                                className="max-w-xs" />
                        </div>
                        <div className="flex flex-col mt-5 gap-5">
                            <Link href={"/register"} className="font-normal text-base underline">
                                Não tem uma conta? Registre-se.
                            </Link>
                            <Button color="primary" className="text-base" onClick={handleSubmit}>
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
