import React from "react";

const Header = () => {
    return (
        <header className="bg-slate-100">
            <div className="inline">
                <div className="logo">
                    <img src="/resources/images/VbT_Logo.svg" alt="siteLogo"/>
                </div>
                <nav className="mr-8">
                    <ul className="flex justify-end">
                        <li className="headerBtn"><a href="@/components/Header#about">About</a></li>
                        <li className="headerBtn"><a href="@/components/Header#demos">Demos</a></li>
                        <li className="headerBtn"><a href="@/components/Header#clients">Clients</a></li>
                        <li className="headerBtn"><a href='@/components/Header#testimonials'>Testimonials</a></li>
                        <li className="headerBtn"><a href='@/components/Header#contact'>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;