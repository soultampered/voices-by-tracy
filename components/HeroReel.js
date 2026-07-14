'use client'
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import DemoPlayer from '@components/DemoPlayer';
import ContactModal from '@components/ContactModal';
import { useModal } from '../app/[locale]/context/ModalContext';
import { audioSample, clientList } from '@public/demoData';

const TRUST_STRIP_COUNT = 6;
const ROTATION_STORAGE_KEY = 'heroReelIndex';

const HeroReel = () => {
    const { t } = useTranslation();
    const { openModal } = useModal();
    const [index, setIndex] = useState(0);

    // Advances through the real audioSample list from demoData.js once per visit
    // — not on a timer, so it never interrupts audio someone's listening to.
    // Persisted in localStorage so it keeps moving through the list across visits
    // instead of always opening on the same track.
    useEffect(() => {
        const stored = parseInt(window.localStorage.getItem(ROTATION_STORAGE_KEY), 10);
        const next = (Number.isFinite(stored) ? stored + 1 : 0) % audioSample.length;
        setIndex(next);
        window.localStorage.setItem(ROTATION_STORAGE_KEY, String(next));
    }, []);

    const current = audioSample[index];
    const trustBrands = useMemo(() => clientList.slice(0, TRUST_STRIP_COUNT), []);

    const handleOpenModal = () => {
        openModal(<ContactModal />);
    };

    return (
        <section className="px-4 md:px-8 pt-6 pb-10">
            <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
                <div>
                    <p className="text-sm text-blue-600 font-semibold mb-2">
                        {t('common:bio-language')} Voice Talent · 15+ {t('common:bio-experience')}
                    </p>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
                        <span className="text-blue-600">English</span>. <span className="text-violet-600">Français</span>.
                        <br />
                        {t('common:hero-tagline')}
                    </h1>
                    <p className="text-stone-100 text-base lg:text-lg mb-6">{t('common:bio-short')}</p>
                    <div className="flex flex-col sm:flex-row gap-3 mb-8">
                        <Link
                            href="/search-results"
                            className="w-full text-center rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-3 transition-colors sm:w-auto">
                            {t('buttons:button-HearMoreDemos', 'Hear More Demos')}
                        </Link>
                        <button
                            onClick={handleOpenModal}
                            className="w-full text-center rounded-lg border border-neutral-700 text-white text-sm font-semibold px-5 py-3 hover:border-neutral-500 transition-colors sm:w-auto">
                            {t('buttons:button-Contact')}
                        </button>
                    </div>
                    <div id="clientSection" className="border-t border-neutral-800 pt-6">
                        <p className="text-xs uppercase tracking-wide text-neutral-400 mb-3">
                            {t('common:trust-eyebrow', 'Trusted by brands including')}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {trustBrands.map((brand) => (
                                <span
                                    key={brand.id}
                                    className="text-xs rounded-full border border-neutral-700 bg-neutral-900/60 px-3 py-1 text-neutral-300">
                                    {brand.name}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-x-6 gap-y-1 mt-4 text-xs font-mono text-neutral-400">
                            <span>15+ {t('common:bio-experience')}</span>
                            <span>{t('common:bio-langList')}</span>
                            <span>200+ {t('common:bio-projects')}</span>
                        </div>
                    </div>
                </div>

                <div className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-6">
                    <p className="text-xs uppercase tracking-wide text-neutral-400 mb-3">
                        {t('buttons:label-Preview', 'Preview')} — {current.title}
                    </p>
                    <DemoPlayer
                        key={current.id}
                        audioSample={current.path}
                        title={current.title}
                        hideDownload
                        showTime
                        waveformHeight={48}
                    />
                    <div className="flex gap-3 mt-4">
                        <a
                            href={current.path}
                            download
                            className="flex-1 text-center rounded-lg border border-neutral-700 text-white text-sm font-semibold px-4 py-2.5 hover:border-neutral-500 transition-colors">
                            {t('buttons:button-Download', 'Download')}
                        </a>
                        <Link
                            href={`/demos/${current.slug}`}
                            className="flex-1 text-center rounded-lg border border-neutral-700 text-white text-sm font-semibold px-4 py-2.5 hover:border-neutral-500 transition-colors">
                            {t('buttons:button-FullReel', 'Full Reel')} →
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroReel;
