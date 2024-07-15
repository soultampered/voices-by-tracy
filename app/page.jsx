'use client';

export default function LandingPage() {

    return (
            <div className="bg-white h-screen flex items-center justify-center">
                <div className="m-auto">
                    <div>
                        <div className="relative inline-block">
                            <img src="/resources/images/VbT_Logo.svg"  alt="landing page"
                                className="w-full h-auto"
                                style={{
                                    width: 1520,
                                    height: 1059
                                }}/>
                            <div className="absolute inset-0 flex items-center justify-center"></div>
                            <div className="relative inset-0 flex items-center justify-center">
                                <a href="/site" className="blueBtn w-1/4 h-20 text-5xl flex items-center justify-center">
                                    Enter
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    );
}