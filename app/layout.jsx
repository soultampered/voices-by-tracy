import '@styles/globals.css';

export const metadata = {
    title: "Voices by Tracy",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}

const Rootlayout = ({children}) => {
    return (
        <html lang="en">
            <body>
                <div className="main">
                    <div className="gradient" />

                    <main className="app">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    )
}

export default Rootlayout