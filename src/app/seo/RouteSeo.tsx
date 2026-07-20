import { useEffect } from 'react';
import { useLocation } from 'react-router';

import { getProductBySlug } from '@/entities/product';

interface SeoData {
    title: string;
    description: string;
    canonicalPath: string;
    noIndex?: boolean;
}

const pageSeo: Record<string, SeoData> = {
    '/': {
        title: 'Системи автоматичного поливу в Києві | БВС-ПОЛИВ',
        description: 'Проєктування, монтаж і обслуговування систем автоматичного поливу в Києві та області. Обладнання Hunter, професійний монтаж і гарантія.',
        canonicalPath: '/',
    },
    '/home': {
        title: 'Системи автоматичного поливу в Києві | БВС-ПОЛИВ',
        description: 'Проєктування, монтаж і обслуговування систем автоматичного поливу в Києві та області. Обладнання Hunter, професійний монтаж і гарантія.',
        canonicalPath: '/',
    },
    '/about': {
        title: 'Про компанію БВС-ПОЛИВ | Системи поливу в Києві',
        description: 'Дізнайтеся про компанію БВС-ПОЛИВ: досвід у проєктуванні, монтажі та сервісному обслуговуванні автоматичних систем поливу.',
        canonicalPath: '/about',
    },
    '/auto-poliv': {
        title: 'Автоматичний полив під ключ у Києві | БВС-ПОЛИВ',
        description: 'Проєктування та монтаж автоматичного поливу під ключ. Розрахунок системи, підбір обладнання Hunter, налаштування і сервіс.',
        canonicalPath: '/auto-poliv',
    },
    '/tools': {
        title: 'Обладнання для систем поливу та водопостачання | БВС-ПОЛИВ',
        description: 'Обладнання для поливу та водопостачання: Hunter, Pedrollo, труби, фітинги, насоси й автоматика. Професійний підбір комплектуючих.',
        canonicalPath: '/tools',
    },
    '/services': {
        title: 'Послуги з поливу та благоустрою | БВС-ПОЛИВ',
        description: 'Монтаж і сервіс систем поливу, укладання рулонного газону, догляд за ділянкою та облаштування декоративних водойм у Києві й області.',
        canonicalPath: '/services',
    },
    '/price': {
        title: 'Ціни на монтаж автоматичного поливу | БВС-ПОЛИВ',
        description: 'Вартість проєктування, монтажу та обслуговування автоматичного поливу. Замовте індивідуальний розрахунок системи для вашої ділянки.',
        canonicalPath: '/price',
    },
    '/complete-jobs': {
        title: 'Виконані роботи з поливу та благоустрою | БВС-ПОЛИВ',
        description: 'Приклади реалізованих систем автоматичного поливу, газонів, водойм і ландшафтних робіт від компанії БВС-ПОЛИВ.',
        canonicalPath: '/complete-jobs',
    },
    '/contacts': {
        title: 'Контакти БВС-ПОЛИВ | Автоматичний полив у Києві',
        description: 'Контакти компанії БВС-ПОЛИВ у Києві. Зателефонуйте або напишіть нам для консультації та розрахунку системи автоматичного поливу.',
        canonicalPath: '/contacts',
    },
    '/catalog': {
        title: 'Каталог обладнання Hunter для поливу | БВС-ПОЛИВ',
        description: 'Каталог обладнання Hunter для автоматичного поливу: контролери, датчики, клапани, форсунки та зрошувачі з цінами й характеристиками.',
        canonicalPath: '/catalog',
    },
};

const fallbackSeo: SeoData = {
    title: 'Сторінку не знайдено | БВС-ПОЛИВ',
    description: 'Запитану сторінку не знайдено. Перейдіть на головну сторінку компанії БВС-ПОЛИВ або відкрийте каталог обладнання.',
    canonicalPath: '/',
    noIndex: true,
};

function getSeoData(pathname: string): SeoData {
    const staticPage = pageSeo[pathname];

    if (staticPage) return staticPage;

    const productSlug = pathname.match(/^\/catalog\/([^/]+)\/?$/)?.[1];
    const product = productSlug
        ? getProductBySlug(decodeURIComponent(productSlug))
        : undefined;

    if (!product) return fallbackSeo;

    const productName = `${product.name} ${product.model}`.trim();

    return {
        title: `${productName} — купити в Києві | БВС-ПОЛИВ`,
        description: `${productName}: ${product.description}`.slice(0, 160),
        canonicalPath: `/catalog/${encodeURIComponent(product.slug)}`,
    };
}

function setMeta(selector: string, attributes: Record<string, string>) {
    let element = document.head.querySelector<HTMLMetaElement>(selector);

    if (!element) {
        element = document.createElement('meta');
        document.head.append(element);
    }

    Object.entries(attributes).forEach(([name, value]) => {
        element.setAttribute(name, value);
    });
}

export function RouteSeo() {
    const { pathname } = useLocation();

    useEffect(() => {
        const seo = getSeoData(pathname.replace(/\/$/, '') || '/');
        const canonicalUrl = new URL(seo.canonicalPath, window.location.origin).href;

        document.title = seo.title;
        setMeta('meta[name="description"]', { name: 'description', content: seo.description });
        setMeta('meta[name="robots"]', {
            name: 'robots',
            content: seo.noIndex ? 'noindex, nofollow' : 'index, follow',
        });
        setMeta('meta[property="og:title"]', { property: 'og:title', content: seo.title });
        setMeta('meta[property="og:description"]', { property: 'og:description', content: seo.description });
        setMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
        setMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });

        let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            document.head.append(canonical);
        }

        canonical.href = canonicalUrl;
    }, [pathname]);

    return null;
}
