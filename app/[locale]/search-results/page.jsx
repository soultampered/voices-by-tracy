import { Suspense } from "react";
import VideoResults from "@/components/VideoResults";
import VideoListSkeleton from "@/components/VideoListSkeleton";
import { getVideos } from "@/lib/db/videos";
import initTranslations from 'app/i18n';
import TranslationsProvider from "@components/TranslationsProvider";
import Footer from "@components/Footer";
import Header from "@components/Header";
import {buttonList} from "@public/demoData";

const i18nNamespaces = ['common','buttons','contact','services']


export default async function SearchPage({ params: {searchParams, locale }}) {
    const { t, resources } = await initTranslations(locale, i18nNamespaces);
    const auditionBtn = buttonList.find((button) => button.id === '1');
    const videos = await getVideos(searchParams?.q);

    return (
        <TranslationsProvider resources={resources} locale={locale} namespaces={i18nNamespaces}>
            <div className='bodyContainer'>
                <Header/>
                <section className="rounded-t-3xl overflow-auto overflow-y-scroll bg-gray-800 p-3">
                    <Suspense fallback={<VideoListSkeleton/>}>
                        {videos.length === 0 ? (
                            <p className="text-neutral-400">No results found</p>
                        ) : (
                            <VideoResults videos={videos}/>
                        )}
                    </Suspense>
                </section>
            </div>
                <Footer auditionBtn={auditionBtn}/>
        </TranslationsProvider>
);
}
