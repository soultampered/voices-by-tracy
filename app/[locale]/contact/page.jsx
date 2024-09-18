import React from "react";
import Header from '@components/Header.js';
import dynamic from "next/dynamic";
const NoSSRContact = dynamic(() => import('@components/Contact.js'), { ssr: false });
import Footer from '@components/Footer.js';
import {buttonList} from "@public/demoData.js";
import initTranslations from 'app/i18n';
import TranslationsProvider from "@components/TranslationsProvider";
import {ChakraProvider} from "@chakra-ui/react";

const i18nNamespaces = ['common','buttons','contact','services']

export default async function ContactPage({ params: { locale }}){
    const { t, resources } = await initTranslations(locale, i18nNamespaces);
    const auditionBtn = buttonList.find(button => button.id === '1');

    return (
        <TranslationsProvider resources={resources} locale={locale} namespaces={i18nNamespaces}>
            <ChakraProvider>
                <div>
                    <Header/>
                    <div className="bodyContainer">
                        <NoSSRContact/>
                    </div>
                    <Footer auditionBtn={auditionBtn}/>
                </div>
            </ChakraProvider>
        </TranslationsProvider>
    );
}
