import React from 'react';
import { notFound } from 'next/navigation';
import initTranslations from "app/i18n";
import TranslationsProvider from "@components/TranslationsProvider";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { buttonList } from "@public/demoData";
import { getMediaBySlugCached } from "@/lib/db/queries/media";

const i18nNamespaces = ['common','buttons','contact','services'];

export async function generateMetadata({ params }) {
    const media = await getMediaBySlugCached(params.slug);

    if (!media) {
        return {
            title: "Video not found",
            description: "The video you are looking for does not exist.",
        };
    }

    return {
        title: media.title,
        description: media.description || `Watch ${media.title} on Voices by Tracy.`
    };
}

export default async function VideoPage({ params }) {
    const { locale, slug } = params;
    const { resources } = await initTranslations(locale, i18nNamespaces);
    const auditionBtn = buttonList.find((button) => button.id === '1');
    const media = await getMediaBySlugCached(slug);

    if (!media) {
        notFound();
    }

    return (
        <TranslationsProvider resources={resources} locale={locale} namespaces={i18nNamespaces}>
            <div className="enter-card-background">
                <Header />
                <div className="bodyContainer">
                    <div className="dark:bg-gray-900 font-Poppins">
                        <div className="rounded-t-3xl overflow-auto overflow-y-scroll bg-gray-800 p-6 md:p-10">
                            <div className="max-w-5xl mx-auto">
                                <div className="aspect-video w-full overflow-hidden rounded-xl bg-black mb-6">
                                    <video className="h-full w-full"
                                        controls
                                        playsInline
                                        preload="metadata"
                                        poster={media.thumbnailUrl || ""}
                                        src={media.sourceUrl}/>
                                </div>

                                <h1 className="text-3xl font-bold text-white mb-3">
                                    {media.title}
                                </h1>

                                {media.description && (
                                    <p className="text-neutral-300 mb-4">
                                        {media.description}
                                    </p>
                                )}

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {media.categories?.map((category) => (
                                        <span key={category}
                                            className="rounded-full bg-neutral-700 px-3 py-1 text-xs text-neutral-200">
                                            {category}
                                        </span>
                                    ))}
                                    {media.tags?.map((tag) => (
                                        <span key={tag}
                                            className="rounded-full bg-neutral-600 px-3 py-1 text-xs text-neutral-100">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-neutral-300">
                                    <div>
                                        <p className="font-semibold text-white mb-1">Duration</p>
                                        <p>{media.duration ? `${media.duration} seconds` : "Unknown"}</p>
                                    </div>

                                    <div>
                                        <p className="font-semibold text-white mb-1">Format</p>
                                        <p>{media.metadata?.format || "Unknown"}</p>
                                    </div>

                                    <div>
                                        <p className="font-semibold text-white mb-1">Uploaded</p>
                                        <p>{media.uploadedAt
                                                ? new Date(media.uploadedAt).toLocaleDateString()
                                                : "Unknown"}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="font-semibold text-white mb-1">Type</p>
                                        <p>{media.type || "Unknown"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer auditionBtn={auditionBtn} />
            </div>
        </TranslationsProvider>
    );
}