import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, DividerProps } from "@nextui-org/react";
import ButtonSubmit from '../Button';
import { useState } from "react";
import confetti from "canvas-confetti"
import Lottie from "lottie-react"
import successAnimation from "~/../public/animation_correct.json"
import failureAnimation from "~/../public/animation_failure.json"

const SubmitDialog = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  function handleSubmit() {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      // confetti({});
      setFailure(true)
    }, 1000)
  }

  if (success) return (
    <>
      <div onClick={onOpen} className="w-48 mt-8">
        <ButtonSubmit>Enviar</ButtonSubmit>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Parabéns!</ModalHeader>
              <ModalBody>
                <Lottie animationData={successAnimation} loop={false} />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" variant="light" onPress={onClose}>
                  Confirmar
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
        <ButtonSubmit>Enviar</ButtonSubmit>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
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
                <Button color="danger" variant="light" onPress={onClose}>
                  Fechar
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
                  Enviar
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
