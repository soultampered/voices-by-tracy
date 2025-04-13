import '@styles/globals.css';
import React from "react";
import CookiePopup from "@components/CookiePopup";
import { VideoProvider } from "app/[locale]/context/VideoContext.js";
import { ModalProvider } from "./context/ModalContext";
import LargePlayer from "@components/LargePlayer";
import ModalContainer from "@components/ModalContainer";
import {ChakraProvider} from "@chakra-ui/react";

export const metadata = {
    title: "Voices by Tracy",
    description: "The portfolio site of Tracy-Ann Leith to showcase her work and connect with people",
    icons: {
        icon: '/favicon.ico',
    }
}

const RootLayout = ({ children }) => {
    return (
            <html lang="en">
            <body className="enter-card-background">
            <ChakraProvider>
                <ModalProvider>
                    <VideoProvider>
                        <div className="main">
                            <main className="app overflow-hidden">
                                {children}
                            </main>
                        </div>
                        <LargePlayer />
                        <ModalContainer />
                    </VideoProvider>
                </ModalProvider>
                <CookiePopup />
            </ChakraProvider>
            </body>
            </html>
    )
}

export default RootLayout;