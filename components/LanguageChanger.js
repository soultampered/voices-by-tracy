'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from 'i18nConfig';

export default function LanguageChanger() {
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();

    const setLocale = newLocale => {
        if (newLocale === currentLocale) return;

        // set cookie for next-i18n-router
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

        // redirect to the new locale path
        if (
            currentLocale === i18nConfig.defaultLocale &&
            !i18nConfig.prefixDefault
        ) {
            router.push('/' + newLocale + currentPathname);
        } else {
            router.push(
                currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
            );
        }

        router.refresh();
    };

    return (
        <div className="inline-flex items-center gap-1 rounded-full border border-neutral-700 p-0.5" role="group" aria-label="Language selection">
            <button
                type="button"
                onClick={() => setLocale('en')}
                aria-pressed={currentLocale === 'en'}
                className={`px-2.5 py-1 rounded-full text-xs font-mono font-semibold transition-colors ${
                    currentLocale === 'en' ? 'bg-white text-black' : 'text-neutral-400 hover:text-white'
                }`}>
                EN
            </button>
            <button
                type="button"
                onClick={() => setLocale('fr')}
                aria-pressed={currentLocale === 'fr'}
                className={`px-2.5 py-1 rounded-full text-xs font-mono font-semibold transition-colors ${
                    currentLocale === 'fr' ? 'bg-white text-black' : 'text-neutral-400 hover:text-white'
                }`}>
                FR
            </button>
        </div>
    );
}
