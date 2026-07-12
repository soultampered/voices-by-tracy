import { Suspense } from "react";
import initTranslations from 'app/i18n';
import TranslationsProvider from "@components/TranslationsProvider";
import Footer from "@components/Footer";
import Header from "@components/Header";
import VideoListSkeleton from "@components/VideoListSkeleton";
import { buttonList } from "@public/demoData";
import { searchMediaCached } from "@/lib/db/queries/media";
import SearchGridClient from "@/components/SearchGridClient";

const i18nNamespaces = ['common','buttons','contact','services'];
const RESULTS_PER_PAGE = 12;

const VALID_TYPES = ["video", "audio"];

async function SearchResults({ searchTerm, type, page }) {
    let results = [];
    let total = 0;
    let error = false;

    try {
        ({ results, total } = await searchMediaCached({
            searchTerm,
            type,
            tags: [],
            categories: [],
            page,
            limit: RESULTS_PER_PAGE
        }));
    } catch (err) {
        console.error("Error fetching search results:", err);
        error = true;
    }

    return (
        <SearchGridClient
            videos={results}
            total={total}
            page={page}
            limit={RESULTS_PER_PAGE}
            type={type}
            error={error}
        />
    );
}

export default async function SearchPage({ params: { locale }, searchParams }) {
    const { t, resources } = await initTranslations(locale, i18nNamespaces);
    const auditionBtn = buttonList.find((button) => button.id === '1');

    const searchTerm = searchParams?.search || "";
    const type = VALID_TYPES.includes(searchParams?.type) ? searchParams.type : null;
    const page = Math.max(1, parseInt(searchParams?.page, 10) || 1);

    return (
        <TranslationsProvider resources={resources} locale={locale} namespaces={i18nNamespaces}>
            <div className='bodyContainer'>
                <Header/>
                <div className="rounded-t-3xl overflow-auto overflow-y-scroll bg-gray-800 p-3">
                    <section>
                        <Suspense key={`${searchTerm}::${type}::${page}`} fallback={<VideoListSkeleton/>}>
                            <SearchResults searchTerm={searchTerm} type={type} page={page} />
                        </Suspense>
                    </section>
                </div>
            </div>
            <Footer auditionBtn={auditionBtn}/>
        </TranslationsProvider>
    );
}
