import '@styles/globals.css';
import React from "react";
// import { ModalProvider } from "@app/context/ModalContext";

export const metadata = {
    title: "Voices by Tracy",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
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
            </body>
            </html>
    )
}

export default RootLayout;