"use client"
import React, { useRef, useEffect } from "react";
import { clientList } from '@public/demoData.js';

const ClientGrid = () => {

        const scrollerRef = useRef(null);

        useEffect(() => {
            const scroller = scrollerRef.current;
            if (!scroller) return;

            if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) { //add animation if user not opted in for reduced motion
                addAnimation(scroller);
            }
        }, []);

        const addAnimation = (scroller) => {
            scroller.setAttribute("data-animated", true); //add data-animated="true" to '.scroller'

            const scrollerInner = scroller.querySelector(".scroller__inner"); //get elements within 'scroller-inner'
            const scrollerContent = Array.from(scrollerInner.children);

            scrollerContent.forEach((item) => { //clone and append each item
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute("aria-hidden", true);
                scrollerInner.appendChild(duplicatedItem);
            });
        };




    return (
        <div className='rounded box-border inline-block p-2 mt-2'>
            <h3 className='hidden'>Clients</h3>
            <div className='scroller max-w-[600px]' data-animated='true' data-direction='right 'data-speed='fast'>
                <div className='scroller__inner py-4 flex-flex-wrap gap-4'>
                    {clientList.map((clientList, id) => (
                        <div key={clientList.id} className="m-2 max-w-s rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform hover:scale-105 transition-transform duration-100">
                            <div className="flex justify-center">
                                <img className="w-32 h-32 m-3 rounded-full shadow-lg" src={clientList.source} alt={clientList.alt} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClientGrid;