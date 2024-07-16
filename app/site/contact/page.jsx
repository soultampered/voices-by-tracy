import Header from '@components/Header.js';
import Contact from '@components/Contact.js';
import Footer from '@components/Footer.js';
import {buttonList} from "@public/demoData.js";

const ContactPage = () => {
    const auditionBtn = buttonList.find(button => button.id === '1');
    const submitBtn = buttonList.find((button) => button.id === '3');
    const closeBtn = buttonList.find((button) => button.id === '4');

    return (
        <div>
            <Header />
            <div className="bodyContainer">
                <Contact />
            </div>
            <Footer auditionBtn={auditionBtn} />
        </div>
    )
}

export default ContactPage;