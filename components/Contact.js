'use client'
import { useState, useEffect } from "react";
import {useTranslation} from "react-i18next";
const initValues = { name: "", email: "", subject: "", message: "" }
const initState = { values: initValues };

const Contact = () => {
    const { t } = useTranslation();
    const [rows, setRows] = useState(15);
    const [state, setState] = useState(initState);

    const { values, isLoading } = state;

    const handleChange = ({target}) => setState((prev) => ({
        ...prev,
        values: {
            ...prev.values,
            [target.name]: target.value,
        },
    }));

    const onSubmit = async (event) => {
        event.preventDefault();
        setState((prev) => ({
            ...prev,
            isLoading: true
        }));
        await sendContactForm(values);
    };

    useEffect(() => {
        const updateRows = () => {
            setRows(window.innerWidth >= 768 ? 15 : 8);
        };
        updateRows();
        window.addEventListener('resize', updateRows);
        return () => {
            window.removeEventListener('resize', updateRows);
        };
    }, []);

    const sendContactForm = async (data) => {
        try {
            const response = await fetch('/api/mailroute', {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Network response was not ok: ${errorText}`);
            }

            const result = await response.json();
            console.log("Success", result);
        } catch (error) {
            console.error('Error', error);
        }
    };

    //add form validation
    return (
        <div className="bg-white dark:bg-gray-900">
            <div className="h-screen overflow-auto overflow-y-scroll bg-gray-800">
                <div className="pt-10 md:pt-20">
                    <div className="p-4 md:p-8">
                        <h2 className="text-white text-center pb-8 font-light text-4xl md:text-5xl lg:text-6xl">{t('contact:contact-Header')}</h2>

                        <form onSubmit={onSubmit} className="flex flex-col items-center">
                            <div className="md:w-3/4 lg:w-2/3 xl:w-1/2">
                                <div className="flex flex-col md:flex-row">
                                    <input name='name' id="name" type="text" value={values.name} className="formInput md:mr-2 md:w-1/2" onChange={handleChange}
                                           placeholder={t('contact:contactPlaceholder-Name')} />

                                    <input name='email' id="email" type="email" value={values.email} className="formInput md:ml-2 md:w-1/2" onChange={handleChange}
                                           placeholder={t('contact:contactPlaceholder-Email')} />
                                </div>

                                <input name='subject' id="subject" type="text" value={values.subject} className="formInput" onChange={handleChange}
                                       placeholder={t('contact:contactPlaceholder-Subject')}/>

                                <textarea name='message' id="message" rows={rows} value={values.message} className="formInput" onChange={handleChange}
                                          placeholder={t('contact:contactPlaceholder-Message')}/></div>

                            <button type='submit' className="mt-5 blueBtn"
                                    disabled={ !values.name || !values.email || !values.subject || !values.message }
                            >{t('buttons:button-Send')}</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;