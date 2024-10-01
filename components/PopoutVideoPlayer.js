"use client";
import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";

const PopoutVideoPlayer = ({ videoSrc, onClose }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient){
        return null;
    }

    return ReactDOM.createPortal(
        <div className='fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50'>
            <div className='relative w-full max-w-3xl'>
                <button onClick={onClose} className='absolute top-2 right-2 text-white'>Close</button>

                <iframe className='w-full h-auto'
                        src={ videoSrc }
                        allowFullScreen=''
                        title='Video Player'>
                </iframe>
            </div>
        </div>,
        document.body
    );
};

export default PopoutVideoPlayer;