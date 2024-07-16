import React from "react";

const Header = () => {
    return (
        <>
            <header className="bg-zinc-900 text-white body-font">
                <div className="lg:px-16 xs:px-4 px-8 h-full flex xs:flex-col sm:flex-row sm:items-center xs:mt-10 sm:mt-0 text-white">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/site">
                        <img src="/resources/images/VbT_Logo_Inverted.svg" alt="siteLogo" className="h-32"/>
                    </a>
                    <nav
                        className="md:ml-auto md:mr-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-gray-400 cursor-pointer" href="#aboutSection">About</a>
                        <a className="mr-5 hover:text-gray-400 cursor-pointer" href="#demosSection">Demos</a>
                        <a className="mr-5 hover:text-gray-400 cursor-pointer" href="#serviceSection">Services</a>
                        <a className="mr-5 hover:text-gray-400 cursor-pointer" href="#clientSection">Clients</a>
                        <a className="mr-5 hover:text-gray-400 cursor-pointer" href="/site/contact">Contact</a>
                    </nav>
                    <button
                        className="frenchBtn">
                    Français
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header;