import '@styles/globals.css';

export const metadata = {
    title: "Voices by Tracy",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <div className="main">
                    <main className="app">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    )
}

export default RootLayout