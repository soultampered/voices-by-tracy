"use client"
import React from "react";

const ClientListCard = () => {

    const number = 10;
    const clientArray = [];

    for (let i = 0; i < number; i++) {
        clientArray.push(
            <div key={i} className="m-2 max-w-s rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform hover:scale-105 transition-transform duration-100">
                <div className="flex justify-center">
                    <img className="w-32 h-32 m-3 rounded-full shadow-lg" src="/resources/images/leithBust.jpg"
                         alt="Client logo"/>
                </div>
            </div>
        );
    }

    return (
        <div className='flex'>
            {clientArray}
        </div>
    );
}

export default ClientListCard;