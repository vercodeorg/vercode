import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import ButtonSubmit from '../Button';
import { useState } from "react";
import confetti from "canvas-confetti"
import Lottie from "lottie-react"
import successAnimation from "~/../public/animation_correct.json"
import failureAnimation from "~/../public/animation_failure.json"
import { submitExercise } from "~/fetch/submitExercise";
import Coin from "~/assets/icons/Moeda.svg"
import Image from "next/image";
import { IUsersExercises } from "~/types/interfaces/api";
import Technology from "../Technology";

type TypeProps = {
    codeResult?: string,
    userExercise?: IUsersExercises,
}

const SubmitDialog = (props: TypeProps) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [success, setSuccess] = useState<boolean | null>(true);
    const [showResultModal, setShowResultModal] = useState<boolean>(false);

    async function handleSubmit() {
        try {
            const data = await submitExercise(props?.userExercise?.id, props?.codeResult);

            if (data.success) {
                confetti({})
                setSuccess(true)
            } else {
                setSuccess(false)
            }
            setShowResultModal(true)
        } catch (error) {
            setSuccess(false)
            setShowResultModal(true)
            console.error(error)
        }
    }

    function tryAgain() {
        setShowResultModal(false)
        setSuccess(null)
    }

    return (
        <>
            <div onClick={onOpen} className="w-48 mt-8">
                <ButtonSubmit>Enviar</ButtonSubmit>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Confirmação</ModalHeader>
                            <ModalBody>
                                Você tem certeza que quer enviar essa resposta ?
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cancelar
                                </Button>
                                <Button
                                    color="primary"
                                    onPress={handleSubmit}
                                    onClick={onClose}
                                    spinner={
                                        <svg
                                            className="animate-spin h-5 w-5 text-current"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            />
                                            <path
                                                className="opacity-75"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                fill="currentColor"
                                            />
                                        </svg>}
                                >
                                    Enviar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
            {showResultModal && (
                <Modal isOpen={true} onOpenChange={() => setShowResultModal(false)}>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                {success === true && (
                                    <>
                                        <ModalHeader className="flex flex-col gap-1">Parabéns!</ModalHeader>
                                        <ModalBody>
                                            <Lottie animationData={successAnimation} loop={false} />
                                            <h2>Você ganhou:</h2>
                                            <div className="flex flex-col ml-8">
                                                <div className="flex items-center">
                                                    <span className="font-semibold text-base text-[#F0B40D]">+ {props.userExercise?.exercise.coinsToWin}</span>
                                                    <div className="w-7">
                                                        <Image src={Coin} alt="coin" />
                                                    </div>
                                                </div>
                                                <span className="font-medium text-base text-dark-gray">+ {props?.userExercise?.exercise.xpToWin}xp</span>
                                                <Technology technology={props?.userExercise?.exercise.technologies} xpPoints={props?.userExercise?.exercise.xpToWin} />
                                            </div>
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button color="primary" variant="light" onPress={onClose}>
                                                Confirmar
                                            </Button>
                                        </ModalFooter>
                                    </>
                                )}
                                {success === false && (
                                    <>
                                        <ModalHeader className="flex flex-col gap-1">Ops! Sua resposta não está correta.</ModalHeader>
                                        <ModalBody>
                                            <div className="w-full">
                                                <div className="w-56 mx-auto">
                                                    <Lottie animationData={failureAnimation} />
                                                </div>
                                                <h2 className="text-lg text-blue-800">Não desanime, você consegue! Tente novamente</h2>
                                            </div>
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button color="danger" onClick={tryAgain} variant="light" onPress={onClose}>
                                                Tentar novamente
                                            </Button>
                                        </ModalFooter>
                                    </>
                                )}
                            </>
                        )}
                    </ModalContent>
                </Modal>
            )}
        </>
    )
}
export default SubmitDialog
