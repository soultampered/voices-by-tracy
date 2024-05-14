"use client"
import React from "react";
import ClientListCard from '@components/ClientListCard.js';

const ClientGrid = () => {
    return (
        <div className='rounded box-border inline-block p-2 mt-2'>
            <h3 className='hidden'>Clients</h3>
            <ClientListCard />
        </div>
    );
}

export default ClientGrid;