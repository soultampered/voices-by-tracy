export const metadata = {
    title: "Search Results page",
    description: "Search results page that lists the work Tracy has worked on",
};

import React from "react";
import Header from "@components/Header";
import VideoListSkeleton from "@components/VideoListSkeleton"
import Footer from "@components/Footer";
import initTranslations from "../../i18n";
import TranslationsProvider from "@components/TranslationsProvider";
import {buttonList} from "@public/demoData";

const i18nNamespaces = ["common", "buttons", "contact", "services"]

export default async function SearchResults({ params: { locale }}){
    const { t, resources } = await initTranslations(locale, i18nNamespaces);
    const auditionBtn = buttonList.find(button => button.id === '1');

    return (
        <TranslationsProvider resources={resources} locale={locale} namespaces={i18nNamespaces}>
            <div className='background'>
                <Header/>
                    <div className='flex flex-col lg:flex-row h-full w-full px-4 md:px-5'>
                        <div className="w-full">
                            <VideoListSkeleton/>
                        </div>
                    </div>
            </div>
            <Footer/>
        </TranslationsProvider>
    );
}