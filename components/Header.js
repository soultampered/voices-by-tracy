import React from "react";

const Header = () => {
    return (
        <>
            <header className="auroraBackground text-white body-font">
                <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src="/resources/images/VbT_Logo.svg" alt="siteLogo" className="h-32" />
                    </a>
                    <nav className="md:ml-auto md:mr-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-gray-900 cursor-pointer">About</a>
                        <a className="mr-5 hover:text-gray-900 cursor-pointer">Demos</a>
                        <a className="mr-5 hover:text-gray-900 cursor-pointer">Clients</a>
                        <a className="mr-5 hover:text-gray-900 cursor-pointer">Contact</a>
                    </nav>
                    <button className="inline-flex items-center bg-blue-700 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                        Français
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header;