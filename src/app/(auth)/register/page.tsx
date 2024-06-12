"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signUp } from "~/fetch/signUp";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Button, Input } from "@nextui-org/react";
import { toast } from "react-toastify";

interface IUserFormData {
  email: string;
  username: string;
  password: string;
}

const Register = () => {
  const [userFormData, setUserFormData] = useState<IUserFormData>({
    email: "",
    username: "",
    password: "",
  });
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const router = useRouter();

  const handleSubmit = async () => {
    const { email, username, password } = userFormData;
    console.log(email, username, password);
    if (userFormData) {
      await signUp(email, username, password);
      router.push("/login");
    } else {
      alert("preencha os dois campos");
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserFormData({ ...userFormData, email: event.target.value });
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserFormData({ ...userFormData, username: event.target.value });
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserFormData({ ...userFormData, password: event.target.value });
  };

  return (
    <div className="flex max-h-screen overflow-y-clip">
      <div className="bg-login-cover w-[1000px] h-screen bg-center"></div>
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col gap-8">
          <h1 className="font-extrabold tracking-tighter text-5xl">
            Registre-se
          </h1>
          <form>
            <div className="flex flex-col gap-4">
              <Input
                onChange={handleEmailChange}
                labelPlacement="inside"
                label="Email"
                variant="bordered"
                value={userFormData.email}
                type="text"
              />
              <Input
                onChange={handleUsernameChange}
                labelPlacement="inside"
                label="Username"
                variant="bordered"
                value={userFormData.username}
                type="email"
              />
              <Input
                onChange={handlePasswordChange}
                labelPlacement="inside"
                label="Senha"
                variant="bordered"
                value={userFormData.password}
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <EyeSlashIcon className="w-5" />
                    ) : (
                      <EyeIcon className="w-5" />
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
                className="max-w-xs"
              />
            </div>
            <div className="flex flex-col mt-5 gap-5">
              <Link href={"/login"} className="font-normal text-base underline">
                Já possui uma conta? Login.
              </Link>
              <Button
                onClick={handleSubmit}
                className="text-base"
                color="primary"
              >
                Registrar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
