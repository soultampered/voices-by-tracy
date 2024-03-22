"use client"
import React from "react";
import ClientListCard from '@components/ClientListCard.js';

const ClientGrid = () => {
    return (
        <div className='w-2/3 bg-green-700 rounded ml-2 box-border inline-block h-auto p-2'>
            <h3>Clients Portfolio</h3>
            <ClientListCard />

            <div className='w-full bg-purple-700 mt-2 rounded box-border'>
                <p className='text-xl text-center'>This is some text This is some text This is some text This is some text This is some text</p>
                <p className='text-lg text-center'>This is some text This is some text This is some text This is some text</p>
                <p className='text-base text-center'>This is some text This is some text This is some text</p>
                <p className='text-sm text-center'>This is some text</p>
            </div>
        </div>
    );
}

export default ClientGrid;