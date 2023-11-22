import Header from '@components/Header.js';
import About from '@components/About.js';
import Demos from '@components/Demos.js';

const Home = () => {
    return (
        <div className="background">
            <div className="bodyContainer">
                <About />
                <Demos />
            </div>
        </div>
    )
}

export default Home