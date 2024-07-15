import '@styles/globals.css';
import {ModalProvider} from "@app/context/ModalContext";

export const metadata = {
    title: "Voices by Tracy",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className="background">
                <div className="main">
                    <main className="app">
                        <ModalProvider>
                            {children}
                        </ModalProvider>
                    </main>
                </div>
            </body>
        </html>
    )
}

export default RootLayout