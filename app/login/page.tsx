import Image from "next/image"
import banner from "../assets/img/login-banner.svg"
import Input from "../components/Input"
import Button from "../components/Button"
import Link from "next/link"

const Login = () => {
    return (
        <div className="flex max-h-screen overflow-y-clip">
            <div>
                <Image src={banner} alt="login-banner-image" className="lg:bg-cover lg:bg-center" />
            </div>
            <div className="w-full flex justify-center items-center">
                <div className="flex flex-col gap-8">
                    <h1 className="font-extrabold tracking-tighter text-5xl">Log in</h1>
                    <form>
                        <div className="flex flex-col gap-4">
                            <Input type="text" placeholder="Email Address" />
                            <Input type="password" placeholder="Password" />
                        </div>
                        <div className="flex flex-col mt-5 gap-5">
                            <Link href={"/register"} className="font-normal text-base underline">
                                Don't have an account? Sign up.
                            </Link>
                            <Button>
                                Log In
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login