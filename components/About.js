'use client'
import React from "react";
import {aboutInfo, whyChooseData} from "@public/demoData";
import {useTranslation} from "react-i18next";
/*import { useModal } from "@app/context/ModalContext";*/

const About = ({auditionBtn}) => {
    const { t } = useTranslation();
    // const { openModal } = useModal();
    // const handleOpenModal = () => {
    //     openModal(
    //         <Contact />
    //     );
    // };

    return (
        <section id="aboutSection" className="rounded-t-3xl lg:py-6 lg:px-8 bg-gray-900">
            <div className="flex flex-col-reverse lg:flex-row h-full w-full items-center">
                <div className='w-full md:w-3/5 pr-0 md:pr-5'>
                    <div className="lg:px-8">
                        <div id="features" className="relative lg:px-4 md:px-6 py-6">
                            <div className="mx-auto w-full max-w-3xl sm:max-w-5xl lg:max-w-6xl text-center">
                                <h2 id="serviceSection"
                                    className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-4 lg:mb-8">
                                    {t('services:marketing-slogan')}
                                </h2>
                                <p className="text-stone-100 text-sm sm:text-base md:text-lg lg:text-xl my-4 lg:mb-6">
                                    {t('services:marketing-message')}
                                </p>
                            </div>

                            <div className="max-w-4xl mx-auto px-5 mt-16">
                                <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-8">
                                    {whyChooseData[0].reason.map((reason) => (
                                        <div key={reason.id} className="flex gap-4 items-start rounded-md border border-neutral-800 bg-neutral-900/50 p-3 shadow">
                                            <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5 md:w-6 md:h-6">
                                            <path d="M0.849976 1.74998C0.849976 1.25292 1.25292 0.849976 1.74998 0.849976H3.24998C3.74703 0.849976 4.14998 1.25292 4.14998 1.74998V2.04998H10.85V1.74998C10.85 1.25292 11.2529 0.849976 11.75 0.849976H13.25C13.747 0.849976 14.15 1.25292 14.15 1.74998V3.24998C14.15 3.74703 13.747 4.14998 13.25 4.14998H12.95V10.85H13.25C13.747 10.85 14.15 11.2529 14.15 11.75V13.25C14.15 13.747 13.747 14.15 13.25 14.15H11.75C11.2529 14.15 10.85 13.747 10.85 13.25V12.95H4.14998V13.25C4.14998 13.747 3.74703 14.15 3.24998 14.15H1.74998C1.25292 14.15 0.849976 13.747 0.849976 13.25V11.75C0.849976 11.2529 1.25292 10.85 1.74998 10.85H2.04998V4.14998H1.74998C1.25292 4.14998 0.849976 3.74703 0.849976 3.24998V1.74998ZM2.94998 4.14998V10.85H3.24998C3.74703 10.85 4.14998 11.2529 4.14998 11.75V12.05H10.85V11.75C10.85 11.2529 11.2529 10.85 11.75 10.85H12.05V4.14998H11.75C11.2529 4.14998 10.85 3.74703 10.85 3.24998V2.94998H4.14998V3.24998C4.14998 3.74703 3.74703 4.14998 3.24998 4.14998H2.94998ZM2.34998 1.74998H1.74998V2.34998V2.64998V3.24998H2.34998H2.64998H3.24998V2.64998V2.34998V1.74998H2.64998H2.34998ZM5.09998 5.99998C5.09998 5.50292 5.50292 5.09998 5.99998 5.09998H6.99998C7.49703 5.09998 7.89998 5.50292 7.89998 5.99998V6.99998C7.89998 7.03591 7.89787 7.07134 7.89378 7.10618C7.92861 7.10208 7.96405 7.09998 7.99998 7.09998H8.99998C9.49703 7.09998 9.89998 7.50292 9.89998 7.99998V8.99998C9.89998 9.49703 9.49703 9.89998 8.99998 9.89998H7.99998C7.50292 9.89998 7.09998 9.49703 7.09998 8.99998V7.99998C7.09998 7.96405 7.10208 7.92861 7.10618 7.89378C7.07134 7.89787 7.03591 7.89998 6.99998 7.89998H5.99998C5.50292 7.89998 5.09998 7.49703 5.09998 6.99998V5.99998ZM6.09998 5.99998H5.99998V6.09998V6.89998V6.99998H6.09998H6.89998H6.99998V6.89998V6.09998V5.99998H6.89998H6.09998ZM7.99998 7.99998H8.09998H8.89998H8.99998V8.09998V8.89998V8.99998H8.89998H8.09998H7.99998V8.89998V8.09998V7.99998ZM2.64998 11.75H2.34998H1.74998V12.35V12.65V13.25H2.34998H2.64998H3.24998V12.65V12.35V11.75H2.64998ZM11.75 1.74998H12.35H12.65H13.25V2.34998V2.64998V3.24998H12.65H12.35H11.75V2.64998V2.34998V1.74998ZM12.65 11.75H12.35H11.75V12.35V12.65V13.25H12.35H12.65H13.25V12.65V12.35V11.75H12.65Z"
                                                  fill="currentColor" fillRule="evenodd"
                                                  clipRule="evenodd"></path></svg></span>
                                            <div>
                                                <h3 className="font-semibold text-xl">{t(`services:${reason.title}`)}</h3>
                                                <p className="mt-1 text-slate-400 text-sm sm:text-base">{t(`services:${reason.desc}`)}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-2">
                                {whyChooseData[0].feature.map((feature) => (
                                    <div key={feature.id} className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
                                        <div className="button-text mx-auto flex h-10 w-10 md:h-12 md:w-12 items-center justify-center text-violet-600 bg-violet-500/10 p-3 rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 className="icon icon-tabler icon-tabler-tools" width="24"
                                                 height="24" viewBox="0 0 24 24" strokeWidth="2"
                                                 stroke="currentColor"
                                                 fill="none"
                                                 strokeLinecap="round" strokeLinejoin="round">

                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"></path>
                                                <line x1="14.5" y1="5.5" x2="18.5" y2="9.5"></line>
                                                <polyline points="12 8 7 3 3 7 8 12"></polyline>
                                                <line x1="7" y1="8" x2="5.5" y2="9.5"></line>
                                                <polyline points="16 12 21 17 17 21 12 16"></polyline>
                                                <line x1="16" y1="17" x2="14.5" y2="18.5"></line>
                                            </svg>
                                        </div>
                                        <h3 className="mt-6">{t(`services:${feature.title}`)}</h3>
                                        <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-slate-200">{t(`services:${feature.desc}`)}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-2/5 justify-center items-center'>
                    <img className='rounded-3xl w-full lg:max-w-md object-cover'
                         src="/resources/images/leithBust.jpg"
                         alt="Tracy Photo"
                         style={{maxWidth: '100vw', objectFit: 'cover' }}/>
                </div>
            </div>
        </section>
    );
}

export default About;