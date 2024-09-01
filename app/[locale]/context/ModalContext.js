'use client'

import React, {createContext, useState, useContext, useEffect } from 'react';
import Modal from 'react-modal';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    useEffect(() => {
        Modal.setAppElement(document.body);
    }, []);


    const openModal = (content) => {
        setModalContent(content);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setModalContent(null);
    };

    return (
        <ModalContext.Provider value={{ modalIsOpen, openModal, closeModal }}>
            { children }
              <Modal
                  isOpen={ modalIsOpen }
                  onRequestClose={ closeModal }
                  contentLabel="Global Modal">
                  { modalContent }
                  <button onClick={ closeModal }>Close</button>
              </Modal>
        </ModalContext.Provider>
    )
};

export const useModal = () => useContext(ModalContext);