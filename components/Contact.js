import React from 'react';

const Contact = ({submitBtn, closeBtn, onData}) => {
    const sendState = () => {
        const state = false;
        onData(state);
    }

    return (
        <section className="bg-white dark:bg-gray-900">
            {closeBtn && (
                <button onClick={sendState} key={closeBtn.id} className={closeBtn.className}>
                    {closeBtn.text}
                </button>
            )}
            <div className="h-screen bg-gray-800">
                <div className="pt-10 md:pt-20">
                    <div className="p-4 md:p-8">
                        <h1 className="text-white text-center pb-8 font-light text-4xl md:text-5xl lg:text-6xl">Contact
                            Me</h1>
                        <form className="flex flex-col items-center">
                            <div className="md:w-3/4 lg:w-2/3 xl:w-1/2">
                                <div className="flex flex-col md:flex-row">
                                    <input id="name" type="text"
                                           className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-blue-600"
                                           placeholder="Name"/>
                                    <input id="email" type="email"
                                           className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600"
                                           placeholder="Email"/>
                                </div>
                                <input id="subject" type="text" placeholder="Subject"
                                       className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"/>
                                <textarea id="message" rows="15" placeholder="Say Something"
                                          className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"></textarea>
                            </div>
                            <button
                                className="mt-5 blueBtn">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;