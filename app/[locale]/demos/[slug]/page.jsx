import React from 'react';
import { notFound } from 'next/navigation';
import initTranslations from "app/i18n";
import TranslationsProvider from "@components/TranslationsProvider";
import Header from "@components/Header";
import Footer from "@components/Footer";
import DemoPlayer from "@components/DemoPlayer";
import AudioMetaDuration from "@components/AudioMetaDuration";
import { buttonList, audioSample } from "@public/demoData";

const i18nNamespaces = ['common','buttons','contact','services'];

function getDemoBySlug(slug) {
    return audioSample.find((item) => item.slug === slug) || null;
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const demo = getDemoBySlug(slug);

    if (!demo) {
        return {
            title: "Demo not found",
            description: "The demo you are looking for does not exist.",
        };
    }

    return {
        title: demo.title,
        description: demo.description || `Listen to ${demo.title} on Voices by Tracy.`,
    };
}

export default async function DemoWatchPage({ params }) {
    const { locale, slug } = await params;
    const { resources } = await initTranslations(locale, i18nNamespaces);
    const auditionBtn = buttonList.find((button) => button.id === '1');
    const demo = getDemoBySlug(slug);

    if (!demo) {
        notFound();
    }

    return (
        <TranslationsProvider resources={resources} locale={locale} namespaces={i18nNamespaces}>
            <div className="enter-card-background">
                <Header />
                <div className="bodyContainer">
                    <div className="font-Poppins">
                        <div className="max-w-5xl mx-auto px-4 md:px-8 py-10">
                            <div className="max-w-5xl mx-auto">
                                <div className="rounded-xl border border-neutral-700 bg-neutral-900/70 p-6 mb-6">
                                    <DemoPlayer
                                        audioSample={demo.path}
                                        title={demo.title}
                                        showTime
                                    />
                                </div>

                                <h1 className="text-3xl font-bold text-white mb-3">
                                    {demo.title}
                                </h1>

                                {demo.description && (
                                    <p className="text-neutral-300 mb-4">
                                        {demo.description}
                                    </p>
                                )}

                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="rounded-full bg-neutral-700 px-3 py-1 text-xs text-neutral-200">
                                        {demo.domain}
                                    </span>
                                    <span className="rounded-full bg-neutral-600 px-3 py-1 text-xs text-neutral-100">
                                        {demo.lang === 'En' ? 'English' : 'Français'}
                                    </span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-neutral-300 rounded-md border border-neutral-800 bg-neutral-900/50 p-4">
                                    <div>
                                        <p className="font-semibold text-white mb-1">Duration</p>
                                        <AudioMetaDuration src={demo.path} />
                                    </div>

                                    <div>
                                        <p className="font-semibold text-white mb-1">Format</p>
                                        <p>MP3</p>
                                    </div>

                                    <div>
                                        <p className="font-semibold text-white mb-1">Type</p>
                                        <p>Audio</p>
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
