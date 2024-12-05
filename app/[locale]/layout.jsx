import '@styles/globals.css';
import React from "react";
import CookiePopup from "@components/CookiePopup";
// import { ModalProvider } from "@app/context/ModalContext";

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
            {/*<ModalProvider>*/}
            <div className="main">
                <main className="app overflow-hidden">
                    {children}
                </main>
            </div>
            {/*</ModalProvider>*/}
            <CookiePopup />
            </body>
            </html>
    )
}

export default RootLayout;