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

export default async function SearchPage({ params, searchParams: searchParamsPromise }) {
    const { locale } = await params;
    const searchParams = await searchParamsPromise;
    const { t, resources } = await initTranslations(locale, i18nNamespaces);
    const auditionBtn = buttonList.find((button) => button.id === '1');

    const searchTerm = searchParams?.search || "";
    const type = VALID_TYPES.includes(searchParams?.type) ? searchParams.type : null;
    const page = Math.max(1, parseInt(searchParams?.page, 10) || 1);

    return (
        <TranslationsProvider resources={resources} locale={locale} namespaces={i18nNamespaces}>
            <Header/>
            <div className='bodyContainer'>
                <div className="max-w-6xl mx-auto w-full px-4 md:px-8 py-6">
                    {searchTerm && (
                        <p className="text-sm text-neutral-400 mb-4">
                            Showing results for <span className="text-white font-semibold">&quot;{searchTerm}&quot;</span>
                        </p>
                    )}
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
