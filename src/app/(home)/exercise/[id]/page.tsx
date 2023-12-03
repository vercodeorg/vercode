"use client"
import Image from "next/image"
import InstructionsExerciseTable from "~/components/InstructionsExerciseTable"
import Coin from "~/assets/icons/Moeda.svg"
import SubmitDialog from "~/components/SubmitDialog"
import { useContext, useEffect, useState } from "react"
import { IUser } from "~/types/interfaces/api"
import { AuthContext } from "~/app/contexts/AuthContext"
import Editor from "@monaco-editor/react"
import Technology from "~/components/Technology"
import { Button } from "@nextui-org/react"
import { compileExerciseCode } from "~/fetch/compileExerciseCode"

const Exercise = ({ params }: { params: { id: string } }) => {
    const [exerciseCodeResult, setExerciseCodeResult] = useState<string>()
    const [compileOutput, setCompileOutput] = useState<string>()
    const { user } = useContext(AuthContext)

    function handleEditorChange(value: any) {
        setExerciseCodeResult(value)
    }

    const userExercise = user?.usersExercises.find((ue) => {
        return ue.exercise.id.toString() === params.id
    })

    async function compileCode(){
       try{
            const compileOutput = await compileExerciseCode(userExercise?.id, exerciseCodeResult);
            console.log(compileOutput)
            setCompileOutput(compileOutput.data.stdout)
        }catch(error){
            console.error(error)
        } 
    }

    const exercise = userExercise?.exercise

    return (
        <div className="w-full bg-cleaner-gray lg:px-20 2xl:px-28 2xl:pt-32 lg:pt-24 pb-24">
            <div className="bg-white w-full h-full rounded-3xl 2xl:p-16 lg:p-12">
                <div className="flex gap-16 mb-8">
                    <div className="bg-black rounded-3xl w-fit px-11 py-8 flex flex-col gap-6">
                        <h1 className="font-semibold 2xl:text-5xl lg:text-4xl text-cleaner-gray tracking-tighter">
                            {userExercise?.exercise.name}
                        </h1>
                        <div className="flex flex-col gap-3">
                            <span className="text-light-gray font-normal text-lg">Recompensas:</span>
                            <div className="flex flex-col ml-8">
                                <div className="flex items-center">
                                    <span className="font-semibold text-base text-[#F0B40D]">+ {userExercise?.exercise.coinsToWin}</span>
                                    <div className="w-7">
                                        <Image src={Coin} alt="coin" />
                                    </div>
                                </div>
                                <span className="font-medium text-base text-light-gray">+ {userExercise?.exercise.xpToWin}xp</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 py-4">
                        <h2 className="text-3xl">Tecnologias usadas nesse exercício:</h2>
                        <div className="flex gap-8">
                            <Technology technology={userExercise?.exercise.technologies} xpPoints={userExercise?.exercise.xpToWin} />
                        </div>
                    </div>
                </div>
                <InstructionsExerciseTable
                    title={exercise?.name}
                    dirName={exercise?.turnInDirectory}
                    files={exercise?.filesToTurnIn}
                    allowedFunctions={exercise?.allowedFunctions}
                    example={exercise?.imageInstructions}
                />
                <div className="mt-8 h-[500px] flex flex-col">
                    <Editor
                        height="100%"
                        defaultLanguage="c"
                        defaultValue="// escreva sua resposta aqui!"
                        onChange={handleEditorChange}
                    />
                </div>
                <SubmitDialog codeResult={exerciseCodeResult} userExercise={userExercise} />
            </div>
        </div>
    )
}
export default Exercise
