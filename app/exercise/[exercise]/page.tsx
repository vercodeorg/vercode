"use client"
import Image from "next/image"
import Coin from "../../assets/icons/Moeda.svg"
import terminalIcon from "../../assets/icons/terminal.png"
import { LinkIcon } from "@heroicons/react/24/outline"
import dynamic from "next/dynamic"
import SubmitDialog from "@/app/components/SubmitDialog"

const CodeEditor = dynamic(
    () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
    { ssr: false }
);
const Exercise = ({ params }: { params: { exercise: string } }) => {
    return (
        <div className="w-full bg-cleaner-gray lg:px-20 2xl:px-28 2xl:pt-32 lg:pt-24 pb-24">
            <div className="bg-white w-full h-full rounded-3xl 2xl:p-16 lg:p-12">
                <div className="flex gap-10">
                    <div className="bg-black rounded-3xl w-fit px-11 py-8 flex flex-col items-center gap-4">
                        <h1 className="font-semibold 2xl:text-5xl lg:text-4xl text-white tracking-tighter">
                            {params.exercise.replace("%3A", " : ")}
                        </h1>
                        <div className="flex items-center">
                            <span className="font-semibold text-base text-[#F0B40D]">25</span>
                            <div className="w-7">
                                <Image src={Coin} alt="coin" />
                            </div>
                        </div>
                        <span className="font-medium text-base text-light-gray">230 Exp</span>
                    </div>
                    <div className="flex flex-col gap-4 py-4">
                        <div className="2xl:w-14 lg:w-10">
                            <Image src={terminalIcon} alt="icon" />
                        </div>
                        <div className="flex gap-2">
                            <a href="" className="font-regular 2xl:text-2xl lg:text-lg underline">Instructions.pdf</a>
                            <LinkIcon className="2xl:w-7 lg:w-5" />
                        </div>
                    </div>
                </div>
                <div className="mt-8 h-80">
                    <CodeEditor
                        language="shell"
                        className="bg-light-gray p-4 rounded-lg font-normal text-sm h-full"
                        placeholder="Please enter answer here."
                        padding={15}
                        style={{
                            fontFamily:
                                "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace"
                        }}
                    />
                </div>
                <SubmitDialog/>
            </div>
        </div>
    )
}
export default Exercise