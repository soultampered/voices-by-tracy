import Header from '@components/Header.js';
import About from '@components/About.js';
import WhyChoose from '@components/WhyChoose.js';
import Demos from '@components/Demos.js';
import Testimonials from "@components/Testimonials";
import Contact from "@components/Contact.js"
import Footer from '@components/Footer.js';
import {buttonList} from "@public/demoData.js";

const Home = () => {
    const auditionBtn = buttonList.find(button => button.id === '1');
    const submitBtn = buttonList.find((button) => button.id === '3');

    return (
        <div className="background">
            <Header />
            <div className="bodyContainer">
                <About auditionBtn={auditionBtn} />
                <WhyChoose />
                <Demos auditionBtn={auditionBtn} />
                <Testimonials />

                <Contact submitBtn={submitBtn}/>
            </div>
            <Footer auditionBtn={auditionBtn} />
        </div>
    )
}

export default Home;