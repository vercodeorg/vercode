"use client";
import Status from "../Status";
import Difficulty from "../Difficulty";
import ProjectProgressBar from "../ProjectProgressBar";
import Link from "next/link";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { STATUS } from "~/types/enums/status";
import { DIFFICULTY } from "~/types/enums/difficulty";
import { useContext, useEffect, useState } from "react";
import { IUser } from "~/types/interfaces/api";
import { AuthContext } from "~/app/contexts/AuthContext";
import { EXERCISE_STATUS } from "~/types/enums/exerciseStatus";
import { formatPathname } from "~/utils/formatPathname";
import { unlockProject } from "~/fetch/unlockProject";

interface TypeProps {
  status: STATUS;
  name: string;
  difficulty: DIFFICULTY;
  projectId: number;
  usersProjectId: number;
  unlockCost: number;
}

const Project = (props: TypeProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [unlocked, setUnlocked] = useState<boolean>(false);
  const [showResultModal, setShowResultModal] = useState<boolean>(false);
  const { user } = useContext(AuthContext);

  const handleUnlockProject = async () => {
    const unlockResult = await unlockProject(
      props.usersProjectId,
      props.projectId,
    );
    if (unlockResult.success) {
      setUnlocked(true);
    } else {
      setUnlocked(false);
    }
    setShowResultModal(true);
  };

  const currentUsersExercises = user?.usersExercises.filter((ue) => {
    return ue.exercise.project.name.toLowerCase() === props.name.toLowerCase();
  });

  const exercisesFinished = currentUsersExercises?.filter((ue) => {
    return ue.exerciseStatus === EXERCISE_STATUS.SUCCESSFUL;
  });

  const totalCoinsByProject = currentUsersExercises?.reduce(
    (total, ue) => total + ue.exercise.coinsToWin,
    0,
  );

  const totalXpPoints = currentUsersExercises?.reduce(
    (total, ue) => total + ue.exercise.xpToWin,
    0,
  );

  const currentXpPoints = exercisesFinished?.reduce(
    (total, ue) => total + ue.exercise.xpToWin,
    0,
  );

  const projectProgressBarProps = {
    color: "text-light-gray",
    min: exercisesFinished?.length,
    max: currentUsersExercises?.length,
    totalCoins: totalCoinsByProject,
    totalXpPoints: totalXpPoints,
    currentXpPoints: currentXpPoints,
  };

  const url = "projects/" + formatPathname(props.name);

  return (
    <>
      {props.status === STATUS.BLOCKED && (
        <>
          <div
            className="2xl:w-72 lg:w-64 2xl:h-96 lg:h-[330px] bg-white rounded-3xl flex flex-col justify-between cursor-pointer"
            onClick={onOpen}
          >
            <div className="mr-3 mt-3 self-end">
              <Status statusName={props.status} />
            </div>
            <div className="mx-auto">
              <h2 className="font-bold text-dark-gray text-4xl text-center">
                {props.name}
              </h2>
            </div>
            <div className="w-full h-44 bg-[#202020] rounded-3xl 2xl:px-8 lg:px-6 2xl:pt-8 lg:py-6 flex flex-col gap-3 justify-around">
              <Difficulty level={DIFFICULTY.MEDIUM} />
              <ProjectProgressBar {...projectProgressBarProps} />
            </div>
          </div>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Confirmação
                  </ModalHeader>
                  <ModalBody>
                    Você tem certeza que deseja desbloquear esse projeto por{" "}
                    {props.unlockCost} coins ?
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Cancelar
                    </Button>
                    <Button
                      color="primary"
                      onPress={onClose}
                      onClick={handleUnlockProject}
                    >
                      <Link href={url}>Desbloquear</Link>
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </>
      )}
      {showResultModal && (
        <Modal isOpen={true} onOpenChange={() => setShowResultModal(false)}>
          <ModalContent>
            {(onClose) => (
              <>
                {unlocked === true && (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      Projeto desbloqueado com sucesso!
                    </ModalHeader>
                    <ModalBody>
                      O custo para o desbloqueio foi diminuido dos seus coins!
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" variant="light" onPress={onClose}>
                        Fechar
                      </Button>
                    </ModalFooter>
                  </>
                )}
                {unlocked === false && (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      Não é possível realizar essa operação!
                    </ModalHeader>
                    <ModalBody>
                      Você não tem coins sulficientes para desbloquear o
                      projeto!
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        <Link href={url}>Fechar</Link>
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </>
            )}
          </ModalContent>
        </Modal>
      )}
      {props.status !== STATUS.BLOCKED && (
        <Link href={url}>
          <div className="2xl:w-72 lg:w-64 2xl:h-96 lg:h-[330px] bg-white rounded-3xl flex flex-col justify-between cursor-pointer">
            <div className="mr-3 mt-3 self-end">
              <Status statusName={props.status} />
            </div>
            <div className="mx-auto">
              <h2 className="font-bold text-dark-gray text-4xl text-center">
                {props.name}
              </h2>
            </div>
            <div className="w-full h-44 bg-[#202020] rounded-3xl 2xl:px-8 lg:px-6 2xl:pt-8 lg:py-6 flex flex-col gap-3 justify-around">
              <Difficulty level={props.difficulty} />
              <ProjectProgressBar {...projectProgressBarProps} />
            </div>
          </div>
        </Link>
      )}
    </>
  );
};
export default Project;
