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
                        <div
                            className="bg-gradient rounded-3xl relative inline-block shadow-2xl p-4 border-2 w-[90vw] h-[90vh] max-w-[1080px] max-h-[720px] flex flex-col items-center justify-center">
                            <img src="/resources/images/VbT_Logo.svg"
                                 alt="landing page"
                                 className="w-full h-auto"
                                 style={{
                                     maxWidth: '80%',
                                     height: 'auto',
                                 }}
                            />
                            <a href="/site"
                               className="blueBtn w-3/4 md:w-1/4 h-20 text-5xl flex items-center justify-center">
                                {t("enterButton")}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </TranslationsProvider>
    );
}