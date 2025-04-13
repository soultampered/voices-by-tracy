'use client'

import { useModal } from "../app/[locale]/context/ModalContext";
import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";

export default function ModalContainer() {
	const modalState = useModal();
	if (!modalState) {
		console.error("useModal is not provided properly.");
		return null;
	}

	const { modalIsOpen, modalContent, closeModal } = modalState;

	return (
		<Modal isOpen={modalIsOpen} onClose={closeModal} isCentered closeOnOverlayClick={true}>
			<ModalOverlay />
			<ModalContent bg="transparent" maxW="50%" mx="auto" w="full">
				<ModalBody w="full">{modalContent}</ModalBody>
			</ModalContent>
		</Modal>
	);
};
