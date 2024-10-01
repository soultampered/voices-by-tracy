import initTranslations from "../i18n";
import TranslationsProvider from "@components/TranslationsProvider";

const i18nNamespaces = ['buttons']

export default async function LandingPage({ params: { locale }}) {
    const { t, resources } = await initTranslations(locale, i18nNamespaces);

    return (
        <TranslationsProvider resources={resources} locale={locale} namespaces={i18nNamespaces}>
            <div className="bg-whiteWash h-screen flex items-center justify-center">
                <div className="m-auto">
                    <div>
                        <div className="bg-gradient rounded-3xl relative inline-block shadow-2xl p-4 border-2">
                            <img src="/resources/images/VbT_Logo.svg" alt="landing page"
                                 className="w-full h-auto"
                                 style={{
                                     width: 1080,
                                     height: 720
                                 }}/>
                            <div className="absolute inset-0 flex items-center justify-center"></div>
                            <div className="relative inset-0 flex items-center justify-center">
                                <a href="/site"
                                   className="blueBtn w-1/4 h-20 text-5xl flex items-center justify-center">{t("enterButton")}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </TranslationsProvider>
    );
}