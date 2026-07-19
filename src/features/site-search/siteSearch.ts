import { products } from '@/entities/product/model/products';

export interface SearchItem {
    title: string;
    path: string;
    text: string;
    keywords?: string;
}

const sections: SearchItem[] = [
    { title: 'Система автоматичного поливу', path: '/home', text: 'Система автоматичного поливу', keywords: 'головна автополив' },
    { title: 'Автоматичний полив ділянки', path: '/home', text: 'Автоматичний полив ділянки', keywords: 'сад газон' },
    { title: 'Пріоритети нашої компанії', path: '/home', text: 'Пріоритети нашої компанії', keywords: 'про нас компанія' },
    { title: 'Автополив для газонів, садів і квітників', path: '/home', text: 'Автополив для газонів, садів і квітників' },
    { title: 'Що враховує система', path: '/home', text: 'Що враховує система' },
    { title: 'Обладнання для системи поливу', path: '/home', text: 'Обладнання для системи поливу' },
    { title: 'Переваги автоматичного поливу на дачі', path: '/home', text: 'Переваги автоматичного поливу на дачі' },
    { title: 'Монтаж системи поливу', path: '/home', text: 'Монтаж системи поливу' },
    { title: 'Автоматичний полив — комфорт для вашої ділянки', path: '/auto-poliv', text: 'Автоматичний полив — комфорт для вашої ділянки' },
    { title: 'Як працює система', path: '/auto-poliv', text: 'Як працює система', keywords: 'забір води труби клапани зони' },
    { title: 'Елементи системи автоматичного поливу', path: '/auto-poliv', text: 'Елементи системи автоматичного поливу', keywords: 'насос головки трубопроводи сопла клапани пульт вентилі' },
    { title: 'Які використовують труби', path: '/auto-poliv', text: 'Які використовують труби' },
    { title: 'Можливості програмування системи', path: '/auto-poliv', text: 'Можливості програмування системи автоматичного поливу' },
    { title: 'Переваги автоматичного поливу', path: '/auto-poliv', text: 'Переваги автоматичного полива на ділянці' },
    { title: 'Обладнання для автоматичного поливу', path: '/tools', text: 'Обладнання для автоматичного поливу' },
    { title: 'Основне обладнання', path: '/tools', text: 'Основне обладнання' },
    { title: 'Допоміжне обладнання', path: '/tools', text: 'Допоміжне обладнання' },
    { title: 'Наші послуги', path: '/services', text: 'Наші послуги', keywords: 'проектування монтаж систем поливу водойми газони' },
    { title: 'Про штучні водойми', path: '/services', text: 'Про штучні водойми' },
    { title: 'Комплекс робіт з укладання рулонних газонів', path: '/services', text: 'Комплекс робіт з укладання рулонних газонів' },
    { title: 'Етапи укладання газону', path: '/services', text: 'Етапи укладання газону' },
    { title: 'Стрижка газонів', path: '/services', text: 'Стрижка газонів' },
    { title: 'Прайс на обладнання для поливу газонів', path: '/price', text: 'Прайс на обладнання для поливу газонів', keywords: 'ціни вартість' },
    { title: 'Каталог товарів', path: '/catalog', text: 'Каталог', keywords: 'обладнання купити ціна' },
    { title: 'Виконані роботи', path: '/complete-jobs', text: 'Виконані роботи', keywords: 'портфоліо проекти об’єкти' },
    { title: 'Контакти', path: '/contacts', text: 'Контакти', keywords: 'телефон адреса пошта офіс' },
    { title: 'Зв’яжіться з нами', path: '/contacts', text: 'Зв’яжіться з нами', keywords: 'телефон email пошта' },
    { title: 'Наш офіс на мапі', path: '/contacts', text: 'Наш офіс на мапі', keywords: 'адреса карта' },
];

const productItems: SearchItem[] = products.map((product) => ({
    title: `${product.name} ${product.model}`,
    path: `/catalog/${product.slug}`,
    text: product.model,
    keywords: `${product.description} ${product.specifications.map(({ label, value }) => `${label} ${value}`).join(' ')}`,
}));

export const siteSearchItems = [...sections, ...productItems];

const normalize = (value: string) => value.toLocaleLowerCase('uk-UA').replace(/[’'`]/g, '').trim();

export function searchSite(query: string, limit = 8) {
    const words = normalize(query).split(/\s+/).filter(Boolean);
    if (!words.length) return [];

    return siteSearchItems
        .map((item) => {
            const title = normalize(item.title);
            const searchable = normalize(`${item.title} ${item.keywords ?? ''}`);
            if (!words.every((word) => searchable.includes(word))) return null;
            const score = words.reduce((total, word) => total + (title.startsWith(word) ? 4 : title.includes(word) ? 2 : 1), 0);
            return { item, score };
        })
        .filter((result): result is { item: SearchItem; score: number } => result !== null)
        .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title, 'uk'))
        .slice(0, limit)
        .map(({ item }) => item);
}
