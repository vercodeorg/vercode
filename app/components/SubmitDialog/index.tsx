import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, DividerProps } from "@nextui-org/react";
import ButtonSubmit from '../Button';
import { useState } from "react";
import confetti from "canvas-confetti"
import Lottie from "lottie-react"
import successAnimation from "../../../public/animation_correct.json"
import failureAnimation from "../../../public/animation_failure.json"
import { useStudentStore } from "@/app/store/store";

const SubmitDialog = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [failure, setFailure] = useState(false);
    const increaseCoins = useStudentStore(state => state.increaseCoins)

    function handleSubmit() {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            confetti({});
            setSuccess(true)
            increaseCoins(25);
        }, 1000)
    }

    if (success) return (
        <>
            <div onClick={onOpen} className="w-48 mt-8">
                <ButtonSubmit>Submit</ButtonSubmit>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Congratulations</ModalHeader>
                            <ModalBody>
                                <Lottie animationData={successAnimation} loop={false} />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" variant="light" onPress={onClose}>
                                    Confirm
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal >
        </>
    )
    if (failure) return (
        <>
            <div onClick={onOpen} className="w-48 mt-8">
                <ButtonSubmit>Submit</ButtonSubmit>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Ops! Your answer is not correct.</ModalHeader>
                            <ModalBody>
                                <div className="w-full">
                                    <div className="w-56 mx-auto">
                                        <Lottie animationData={failureAnimation} loop={false} />
                                    </div>
                                    <h2 className="text-lg text-blue-800">Don't get discouraged, you can do it! Try again</h2>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal >
        </>
    )

    return (
        <>
            <div onClick={onOpen} className="w-48 mt-8">
                <ButtonSubmit>Submit</ButtonSubmit>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Confirmation</ModalHeader>
                            <ModalBody>
                                Are you want to submit this exercise ?
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cancel
                                </Button>
                                <Button
                                    color="primary"
                                    onPress={handleSubmit}
                                    onClick={onClose}
                                    isLoading={isLoading}
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
                                    Submit
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal >
        </>
    )
}
export default SubmitDialog