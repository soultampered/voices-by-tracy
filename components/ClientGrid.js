"use client"
import React from "react";
import ClientListCard from '@components/ClientListCard.js';

const ClientGrid = () => {
    return (
        <div className='w-full bg-green-700 rounded box-border inline-block p-2 mt-2'>
            <h3>Clients Portfolio</h3>
            <ClientListCard />
        </div>
    );
}

export default ClientGrid;