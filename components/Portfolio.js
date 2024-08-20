import React from "react";
// import DemosPage from "@app/site/demos/page";
import { aboutInfo} from "@public/demoData";
import about from "@components/About";

const Portfolio = () => {
    return (
            <div className="w-full bg-white text-black overflow-hiddden">
                <div className="absolute hidden sm:block md:top-20 sm:top-[8%] xs:top-[10%] xxl:left-[30%] lg:left-[35%] md:right-[20%] sm:left-[18%] xs:left-[10%]">
                    <img className="xxl:h-[880px] xl:h-[500px] md:h-[450px] sm:h-[480px]"
                         src="/resources/images/VbT_Logo.svg" alt="Incognito Image"/>
                </div>
                <div className="lg:px-16 xs:px-4 px-8 pb-4 h-full flex xs:flex-col sm:flex-row sm:items-center xs:mt-10 sm:mt-0 text-black">

                    <div className="w-full flex flex-col z-10 text-black">
                        <h1 className="xl:text-8xl sm:text-6xl xs:text-3xl font-semibold font-serif mt-2">Tracy-Ann</h1>
                        <h1 className="sm:text-6xl xs:text-3xl font-semibold font-serif">Leith</h1>

                        <div className=' flex flex-wrap items-center text-base'>
                            <a className="m-2.5 blueBtn cursor-pointer" href="site/demos">Demos</a>
                            <a className="m-2.5 blueBtn cursor-pointer" href="site/contact">Contact Me</a>
                        </div>
                    </div>


                    <div
                        className="w-full flex sm:flex-col xs:justify-center xs:mt-4 sm:mt-0 sm:gap-8 xs:gap-2 xs:bg-gray-700/60 sm:bg-transparent p-4 rounded-lg z-10">
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
                            <h4 className="xs:text-sm sm:text-lg xl:text-xl xs:text-center">Clients</h4>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default Portfolio;