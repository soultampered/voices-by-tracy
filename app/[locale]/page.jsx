import initTranslations from "../i18n";
import TranslationsProvider from "@components/TranslationsProvider";
import LanguageChanger from "@components/LanguageChanger";
import React from "react";

const i18nNamespaces = ['buttons']

export default async function LandingPage({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, i18nNamespaces);

    return (
        <TranslationsProvider resources={resources} locale={locale} namespaces={i18nNamespaces}>
            <div className="h-screen flex items-center justify-center relative enter-card-background">
                <div className="absolute top-2 right-4 lg:top-4"><LanguageChanger /></div>
                <div className="m-auto">
                    <div>
                        <div className="landing-page-background enter-card-background rounded-3xl relative shadow-2xl p-4 border-2 landscape-width w-[90vw] h-[90vh] max-w-[1080px] max-h-[720px] flex flex-col items-center justify-center">
                            <img src="/resources/images/VbT_Logo.svg"
                                 alt="landing page"
                                 className="w-full max-w-[80%] max-h-[80%] object-contain"/>
                            <a href="/site"
                               className="blueBtn mt-52 sm:mt-0 inline-flex items-center justify-center px-4 py-2 text-xl sm:text-3xl">
                                {t("enterButton")}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </TranslationsProvider>
    );
}