import React from "react";

const About = () => {
    return (
        <section className="section">
            <div className="boxMain">
                <div className="card">
                    <div className="bioDiv">
                        <h1>Tracy-Ann Leith</h1>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>

                        <button className="bookAudition">Book an Audition</button>

                        <p>Tracy-Ann Leith is THE voice to use for your next project.</p>
                        <p>Based in Montreal, Quebec, Canada; Tracy is a bilingual voice actor with a life-long love of all things music and movies, trivia buff, and fan of stand-up comedy.</p>
                        <p>She will dazzle with her quick wit and inspire you with her wisdom, and overall insight on life with her goofy pug, Gizmo.</p>
                        <p>When she is not on the search for the best Greek-style pizza in Montreal, she loves to rock the mic during karaoke night!</p>
                    </div>
                    <div className="bioDiv">
                        <img src="/resources/images/leithBust.jpg" alt="TracyPhoto"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;