import React from "react";
import initTranslations from 'app/i18n';
import TranslationsProvider from "@components/TranslationsProvider";
import Header from "@components/Header";
import Footer from "@components/Footer";
import {buttonList} from "@public/demoData";

const i18nNamespaces = ['common','buttons','contact','services']

export const metadata = {
	title: "Cookie Policy",
	description: "Learn about how we use cookies on our website.",
};

export default async function CookiePolicyPage({ params: { locale }}) {
	const { t, resources } = await initTranslations(locale, i18nNamespaces);
	const auditionBtn = buttonList.find(button => button.id === '1');

	return (
		<TranslationsProvider resources={resources} locale={locale} namespaces={i18nNamespaces}>
			<div className='enter-card-background'>
				<Header/>
				<div className="bodyContainer">
					<div className="dark:bg-gray-900 font-Poppins">
						<div className="rounded-t-3xl overflow-auto overflow-y-scroll bg-gray-800 p-20">
							<h1 className="text-3xl font-bold mb-4 capitalize">{t('common:cookie-policy')}</h1>
							<h2 className="text-2xl font-bold mb-2 capitalize">{t('common:what-cookies-title')}</h2>
							<p className="mb-4 border-b border-gray-300 pb-2">{t('common:what-cookies-info')}</p>

							<h2 className="text-2xl font-bold mb-2 capitalize">{t('common:cookie-use-title')}</h2>
							<p className="mb-4 border-b border-gray-300 pb-2">{t('common:cookie-use-info')}</p>

							<ul className="list-disc list-inside mb-4 border-b border-gray-300 pb-2">
								<li>{t('common:cookie-use-type')}</li>
								<li>{t('common:cookie-use-purpose')}</li>
								<li>{t('common:cookie-use-data')}</li>
							</ul>

							<h2 className="text-2xl font-bold mb-2 capitalize">{t('common:cookie-consent-title')}</h2>
							<p className="mb-4 border-b border-gray-300 pb-2">{t('common:cookie-consent-info')}</p>

							<h2 className="text-2xl font-bold mb-2 capitalize">{t('common:cookie-manage-title')}</h2>
							<p className="mb-4 border-b border-gray-300 pb-2">{t('common:cookie-manage-info')}</p>

							<h2 className="text-2xl font-bold mb-2 capitalize">{t('common:cookie-contact-title')}</h2>
							<p className="mb-4">{t('common:cookie-contact-string')}</p>
							<p>{t('common:cookie-company-name')}</p>
							<p className="mb-4 border-b border-gray-300 pb-2">info@voicesbytracy.com</p>
						</div>
					</div>
				</div>
				<Footer auditionBtn={auditionBtn}/>
			</div>
		</TranslationsProvider>
	)
}