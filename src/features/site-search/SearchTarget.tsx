import { useEffect } from 'react';
import { useLocation } from 'react-router';

interface SearchNavigationState {
    searchTarget?: string;
    searchId?: number;
}

export function SearchTarget() {
    const { pathname, state } = useLocation();
    const searchState = state as SearchNavigationState | null;

    useEffect(() => {
        if (!searchState?.searchTarget) return;

        const targetText = searchState.searchTarget.toLocaleLowerCase('uk-UA');
        const timer = window.setTimeout(() => {
            const candidates = document.querySelectorAll<HTMLElement>('main h1, main h2, main h3, main h4, main p, main li');
            const target = Array.from(candidates).find((element) =>
                element.textContent?.toLocaleLowerCase('uk-UA').includes(targetText),
            );

            if (!target) return;
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            target.classList.add('site-search-highlight');
            window.setTimeout(() => target.classList.remove('site-search-highlight'), 3000);
        }, 120);

        return () => window.clearTimeout(timer);
    }, [pathname, searchState?.searchId, searchState?.searchTarget]);

    return null;
}
