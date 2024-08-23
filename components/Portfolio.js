import React from "react";
// import DemosPage from "@app/site/demos/page";
import { aboutInfo } from "@public/demoData";
import about from "@components/About";

const Portfolio = () => {
    return (
        <div className="flex justify-center w-screen h-850 overflow-hidden relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:opacity-30">
            <img src="/resources/images/aurora2.jpg" className="absolute top-0 left-0 min-h-full ob"
                 alt=""/>
            <div className="relative z-20 flex px-5 h-full items-center justify-center min-w-1059 max-w-1520">
                <div className="w-1/3">
                    <h1 className='hidden'>Tracy-Ann Leith</h1>
                    <h2 className="text-white font-extrabold text-5xl mb-8">{aboutInfo.catchPhraseEN}</h2>
                    <p className="text-stone-100 text-base">{aboutInfo.bioExpandedEN}</p>
                    <div className=' flex flex-wrap items-center text-base'>
                        <a className="m-2.5 blueBtn cursor-pointer" href="site/demos">Demos</a>
                        <a className="m-2.5 blueBtn cursor-pointer" href="site/contact">Contact Me</a>
                    </div>
                </div>
                <div className="w-2/3 flex sm:flex-col xs:justify-center xs:mt-4 sm:mt-0 sm:gap-8 xs:gap-2 p-4 rounded-lg z-10">

                    <div className="flex flex-col sm:items-end xs:items-center">
                        <div className="inline-flex gap-1 items-center">
                            <h2 className="xl:text-8xl md:text-7xl sm:text-6xl xs:text-3xl font-semibold">15</h2>
                            <h2 className="text-blue-500 xl:text-8xl md:text-7xl sm:text-6xl xs:text-3xl font-extrabold">+</h2>
                        </div>
                        <h4 className="xs:text-sm sm:text-lg xl:text-xl xs:text-center">Years of Experience</h4>
                    </div>

                    <div className="flex flex-col sm:items-end xs:items-center">
                        <div className="inline-flex gap-1 items-center">
                            <h2 className="xl:text-8xl md:text-7xl sm:text-6xl xs:text-3xl font-semibold">Bilingual</h2>
                        </div>
                    </div>

                    <div className="flex flex-col sm:items-end xs:items-center">
                        <div className="inline-flex gap-1 items-center">
                            <h2 className="xl:text-8xl md:text-7xl sm:text-6xl xs:text-3xl font-semibold">20</h2>
                            <h2 className="text-blue-500 xl:text-8xl md:text-7xl sm:text-6xl xs:text-3xl font-extrabold">+</h2>
                        </div>
                        <h4 className="xs:text-sm sm:text-lg xl:text-xl xs:text-center">Projects Launched</h4>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Portfolio;