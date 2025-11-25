"use client";

import { useTranslation } from "react-i18next";

const AnnouncementBanner = () => {
	const { t } = useTranslation();

	return (
		<div className="w-full bg-gray-800 text-white text-center p-4 z-50">
			<p className="inline">
				<a href="https://fusionmagazine.jp/magazine-posts/tracy-ann-leith" className="text-gray-100 underline">{t('common:announcement-text-fusion')} {''}</a>
			</p>
		</div>
	);
};

export default AnnouncementBanner;