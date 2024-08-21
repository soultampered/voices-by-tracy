import Header from '@components/Header.js';
import About from '@components/About.js';
import WhyChoose from '@components/WhyChoose.js';
import Demos from '@components/Demos.js';
import Testimonials from "@components/Testimonials";
import Portfolio from "@components/Portfolio";
import Footer from '@components/Footer.js';
import {buttonList} from "@public/demoData.js";

const Home = () => {
    const auditionBtn = buttonList.find(button => button.id === '1');
    const submitBtn = buttonList.find((button) => button.id === '3');
    const closeBtn = buttonList.find((button) => button.id === '4');

    return (
        <div>
            <Header />
            <Portfolio />
            <div className="bodyContainer">
            {/*<div className="bodyContainer" style={{*/}
            {/*    backgroundImage: `url('/resources/images/aurora.jpg')`*/}
            {/*}}>*/}
                <About auditionBtn={auditionBtn} closeBtn={closeBtn} submitBtn={submitBtn}/>
                <Demos auditionBtn={auditionBtn} />
                <Testimonials />
            </div>
            <Footer auditionBtn={auditionBtn} />
        </div>
    )
}

export default Home;