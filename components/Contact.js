import React from 'react';

const Contact = ({submitBtn}) => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight text-center text-gray-900 dark:text-white">Contact Me</h2>
                <p className="mb-8 lg:mb-16 text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                <form action="#" className="space-y-8">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm text-gray-900 dark:text-gray-300">Your name</label>
                        <input type="name" id="name"
                               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                               placeholder="First, Last" required/>
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm text-gray-900 dark:text-gray-300">Your email</label>
                        <input type="email" id="email"
                               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                               placeholder="name@flowbite.com" required/>
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm text-gray-900 dark:text-gray-300">Subject</label>
                        <input type="text" id="subject"
                               className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                               placeholder="Let us know how we can help you" required/>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm text-gray-900 dark:text-gray-400">Your
                            message</label>
                        <textarea id="message" rows="6"
                                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                  placeholder="Leave a message..."></textarea>
                    </div>
                    {submitBtn && (
                        <button key={submitBtn.id} type={submitBtn.type} className={submitBtn.className}>
                            {submitBtn.text}
                        </button>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;