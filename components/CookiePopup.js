"use client";

import { useState, useEffect } from 'react';

const CookiePopup = () => {
	const [showPopup, setShowPopup] = useState(false);

	useEffect(() => {
		const consent= localStorage.getItem('cookieConsent');
		if (!consent) {
			setShowPopup(true);
		}
	}, []);

	const handleAccept = () => {
		localStorage.setItem('cookieConsent', 'true');
		setShowPopup(false);
	};

	return (
		showPopup && (
			<div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white text-center p-4 z-50">
				<p className="inline">
					This website uses cookies to enhance your experieince.  By continuing, you agree to our {''}
					<a href="/cookie-policy" className="text-blue-400 underline">cookie policy</a>.
				</p>
				<button onClick={handleAccept}
						className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 ml-4 rounded">
					Accept
				</button>
			</div>
		)
	);
};

export default CookiePopup;