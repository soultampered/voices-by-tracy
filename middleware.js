import { i18nRouter } from "next-i18n-router";
import i18nConfig from './i18nConfig';
import { rateLimit } from "@/lib/rateLimit";

const SEARCH_RESULTS_PATH = /^\/(?:(en|fr)\/)?search-results\/?$/;

export async function middleware(request) {
    if (SEARCH_RESULTS_PATH.test(request.nextUrl.pathname)) {
        const rateLimitResponse = await rateLimit(30, 60000)(request);
        if (rateLimitResponse) {
            return rateLimitResponse;
        }
    }

    return i18nRouter(request, i18nConfig);
}

export const config = {
    matcher: '/((?!api|static|.*\\..*|_next).*)'
};
