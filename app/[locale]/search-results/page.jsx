import { Suspense } from "react";
import initTranslations from 'app/i18n';
import TranslationsProvider from "@components/TranslationsProvider";
import Footer from "@components/Footer";
import Header from "@components/Header";
import VideoListSkeleton from "@components/VideoListSkeleton";
import { buttonList } from "@public/demoData";
import { getVideos } from "@/lib/db/videos";
import SearchGridClient from "@/components/SearchGridClient";

const i18nNamespaces = ['common','buttons','contact','services'];

export default async function SearchPage({ params: { searchParams, locale } }) {
    const { t, resources } = await initTranslations(locale, i18nNamespaces);
    const auditionBtn = buttonList.find((button) => button.id === '1');
    const videos = await getVideos(searchParams?.q);

    return (
        <TranslationsProvider resources={resources} locale={locale} namespaces={i18nNamespaces}>
            <div className='bodyContainer'>
                <Header/>
                <div className="rounded-t-3xl overflow-auto overflow-y-scroll bg-gray-800 p-3">
                    <section>
                        <Suspense fallback={<VideoListSkeleton/>}>
                            <SearchGridClient videos={videos}/>
                        </Suspense>
                    </section>
                </div>
            </div>
            <Footer auditionBtn={auditionBtn}/>
        </TranslationsProvider>
    );
}
