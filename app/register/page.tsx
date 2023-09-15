import Image from "next/image"
import Input from "../components/Input"
import banner from "../assets/img/login-banner.svg"
import Link from "next/link"
import Button from "../components/Button"

const Register = () => {
    return (
        <div className="flex max-h-screen overflow-y-clip">
            <div>
                <Image src={banner} alt="login-banner-image" className="lg:bg-cover lg:bg-center" />
            </div>
            <div className="w-full flex justify-center items-center">
                <div className="flex flex-col gap-8">
                    <h1 className="font-extrabold tracking-tighter text-5xl">Sign Up</h1>
                    <form>
                        <div className="flex flex-col gap-4">
                            <Input type="text" placeholder="Email Address" />
                            <Input type="password" placeholder="Password" />
                            <Input type="password" placeholder="Confirm password" />
                        </div>
                        <div className="flex flex-col mt-5 gap-5">
                            <Link href={"/login"} className="font-normal text-base underline">
                                Already have an account? Log in.
                            </Link>
                            <Button>
                                Register
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Register