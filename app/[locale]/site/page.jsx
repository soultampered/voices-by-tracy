import Header from '@components/Header.js';
import About from '@components/About.js';
import Demos from '@components/Demos.js';
import Testimonials from "@components/Testimonials";
import Portfolio from "@components/Portfolio";
import Footer from '@components/Footer.js';
import {buttonList} from "@public/demoData.js";
import initTranslations from 'app/i18n';
import TranslationsProvider from "@components/TranslationsProvider";

const i18nNamespaces = ['common','buttons','contact','services']


export default async function Home({ params: { locale }}){
    const { t, resources } = await initTranslations(locale, i18nNamespaces);

    const auditionBtn = buttonList.find((button) => button.id === '1');
    const submitBtn = buttonList.find((button) => button.id === '3');
    const closeBtn = buttonList.find((button) => button.id === '4');

    return (
        <TranslationsProvider resources={resources} locale={locale} namespaces={i18nNamespaces}>
            <div>
                <Header/>
                <Portfolio/>
                <div className="bodyContainer">
                    <About auditionBtn={auditionBtn} closeBtn={closeBtn} submitBtn={submitBtn}/>
                    <Demos auditionBtn={auditionBtn}/>
                    <Testimonials/>
                </div>
                <Footer auditionBtn={auditionBtn}/>
            </div>
        </TranslationsProvider>
    );
}