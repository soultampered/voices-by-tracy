import '@styles/globals.css';
// import { ModalProvider } from "@app/context/ModalContext";

export const metadata = {
    title: "Voices by Tracy",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className="background">
            {/*<ModalProvider>*/}
                    <div className="main">
                        <main className="app overflow-hidden">
                            { children }
                        </main>
                    </div>
            {/*</ModalProvider>*/}
            </body>
        </html>
    )
}

export default RootLayout;