"use client";
import Difficulty from "../Difficulty";
import Status from "../Status";
import ProjectProgressBar from "../ProjectProgressBar";
import Link from "next/link";
import {
	Button,
	Modal,
	ModalContent,
	ModalFooter,
	ModalHeader,
	useDisclosure,
} from "@nextui-org/react";
import { STATUS } from "~/types/enums/status";
import { DIFFICULTY } from "~/types/enums/difficulty";

type TypeProps = {
	name: string;
	description: "Resolver exercícios em C";
	status: STATUS;
};

const LevelProject = (props: TypeProps) => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	if (props.status === "Bloqueado") {
		return (
			<>
				<div
					onClick={onOpen}
					className="w-full rounded-3xl border-2 border-light-gray flex justify-between cursor-pointer"
				>
					<div className="bg-dark-gray rounded-3xl w-1/3 py-4 px-10 flex flex-col justify-between gap-3">
						<h2 className="font-bold text-white text-4xl">{props.name}</h2>
						<h3 className="project-description">Resolver exercícios em C</h3>
						<Difficulty level={DIFFICULTY.EASY} />
					</div>
					<div className="w-1/3 px-4 py-4 flex flex-col gap-2">
						<div className="self-end">
							<Status statusName={props.status} />
						</div>
						<ProjectProgressBar color="text-dark-gray" />
					</div>
				</div>
				<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
					<ModalContent>
						{(onClose) => (
							<>
								<ModalHeader className="dialog-title">
									Do you want unlock this project for 25 Vcoins?
								</ModalHeader>
								<ModalFooter>
									<Button color="danger" variant="light" onPress={onClose}>
										Cancel
									</Button>
									<Link href={`/projects/${props.name}`}>
										<Button color="primary" variant="light" onPress={onClose}>
											Yes
										</Button>
									</Link>
								</ModalFooter>
							</>
						)}
					</ModalContent>
				</Modal>
			</>
		);
	}
	return (
		<Link href={`/projects/${props.name}`}>
			<div className="w-full rounded-3xl border-2 border-light-gray flex justify-between">
				<div className="bg-dark-gray rounded-3xl w-1/3 py-4 px-10 flex flex-col justify-between gap-3">
					<h2 className="font-bold text-white text-4xl">{props.name}</h2>
					<h3 className="project-description">solve c language exercises</h3>
					<Difficulty level={DIFFICULTY.EASY} />
				</div>
				<div className="w-1/3 px-4 py-4 flex flex-col gap-2">
					<div className="self-end">
						<Status statusName={props.status} />
					</div>
					<ProjectProgressBar color="text-dark-gray" />
				</div>
			</div>
		</Link>
	);
};
export default LevelProject;
