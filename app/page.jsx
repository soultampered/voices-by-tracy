import Header from '@components/Header.js';
import About from '@components/About.js';
import Demos from '@components/Demos.js';
import Testimonials from "@components/Testimonials";

const Home = () => {
    return (
        <div className="background">
            <div className="bodyContainer">
                <About />
                <Demos />
                <Testimonials />
            </div>
        </div>
    )
}

export default Home