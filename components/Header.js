import React from "react";

const Header = () => {
    return (
        <header>
            <div className="headerContainer">
                <div className="logo">
                    <img src="/resources/images/VbT_Logo.jpg" alt="siteLogo"/>
                </div>
                <nav>
                    <ul className="navList">
                        <li><a href="@/components/Header#about">About</a></li>
                        <li><a href="@/components/Header#demos">Demos</a></li>
                        <li><a href="@/components/Header#clients">Clients</a></li>
                        <li><a href='@/components/Header#testimonials'>Testimonials</a></li>
                        <li><a href='@/components/Header#contact'>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;