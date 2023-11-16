import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerContent">
                <div className="footContentContainer">
                    <div id="copyrightTextWrap">
                        <p className="text-footer">© 2023 Voices by Tracy. All rights reserved</p>
                    </div>
                </div>
                <img src="/resources/images/logoMark.png" alt="logoMark"/>
                <div className="footContentContainer">
                    <div id="socialWrap">
                        <ul id="socialsList">
                            <li><a href="https://www.facebook.com/voicesbytracy">
                                <img src="/resources/images/facebookLogo.png" alt="FacebookLogo"/>
                            </a>
                            </li>
                            <li><a href="@/components/Footer">
                                <img src="/resources/images/linkedInLogo.png" alt="LinkedInLogo"/>
                            </a>
                            </li>
                            <li><a href="@/components/Footer">
                                <img src="/resources/images/instagramLogo.png" alt="InstagramLogo"/>
                            </a>
                            </li>
                        </ul>
                        <div>
                            <span><strong>Email:&nbsp;</strong></span>
                            <a href="mailto:voicesbytracy@gmail.com?subject=Request for Quote"><strong>voicesbytracy@gmail.com</strong></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;