import Header from '@components/Header.js';
import About from '@components/About.js';
import Demos from '@components/Demos.js';
import Clients from '@components/Clients.js';
import Testimonials from "@components/Testimonials";
import Footer from '@components/Footer.js';

const Home = () => {
    return (
        <div className="background">
            <Header />
            <div className="bodyContainer">
                <About />
                <Demos />
                {/*<Clients />*/}
                {/*<Testimonials />*/}
            </div>
            {/*<Footer />*/}
        </div>
    )
}

export default Home