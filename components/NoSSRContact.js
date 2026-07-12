'use client'
import dynamic from "next/dynamic";

const NoSSRContact = dynamic(() => import('./Contact.js'), { ssr: false });

export default NoSSRContact;
