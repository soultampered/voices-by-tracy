import initTranslations from "../i18n";
import TranslationsProvider from "@components/TranslationsProvider";
import LanguageChanger from "@components/LanguageChanger";
import AnnouncementBanner from "@components/AnnouncementBanner";
import React from "react";
import Image from "next/image";

const i18nNamespaces = ['common','buttons']

export default async function LandingPage({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, i18nNamespaces);

    return (
        <TranslationsProvider resources={resources} locale={locale} namespaces={i18nNamespaces}>
            <div className="h-screen flex items-center justify-center relative enter-card-background">
                <div className="absolute top-2 right-4 lg:top-4"><LanguageChanger /></div>
                <div className="fixed top-16 w-full"><AnnouncementBanner /></div>
                <div className="m-auto">
                    <div>
                        <div className="h-[50vh] sm:h-auto landing-page-background rounded-3xl relative shadow-2xl p-4 border-2 landscape-width w-[90vw] max-w-[1080px] max-h-[720px] flex flex-col items-center justify-center">
                            <div className="w-full max-w-[80%] max-h-[80%] flex flex-col items-center">
                                <Image src="/resources/images/VbT_Logo.svg"
                                   alt="landing page"
                                   className="object-contain"
                                   layout="responsive"
                                   width={750}
                                   height={550}/>
                                <a href="/site"
                                   className="blueBtn sm:mt-0 px-4 py-2 text-xl sm:text-3xl">
                                   {t("buttons:enterButton")}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </TranslationsProvider>
    );
}