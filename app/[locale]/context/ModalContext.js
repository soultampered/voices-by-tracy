'use client';

import { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export function ModalProvider({ children }) {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [modalContent, setModalContent] = useState(null);

	const openModal = (content) => {
		setModalContent(content);
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setModalIsOpen(false);
		setModalContent(null);
	};

	return (
		<ModalContext.Provider value={{ modalIsOpen, modalContent, openModal, closeModal }}>
			{children}
		</ModalContext.Provider>
	);
}

export function useModal() {
	const context = useContext(ModalContext);
	if (!context) {
		console.error('useModal() called outside of ModalProvider!');
		return null;
	}
	return context;
}
