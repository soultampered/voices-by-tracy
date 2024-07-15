'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function LandingPage() {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div>
            <h1>Welcome to Our Site</h1>
            <p>This is the landing page.</p>
            <button><a href='/site'>Enter</a></button>
        </div>
    );
}