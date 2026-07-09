import mp100090Image from '@/assets/catalog-page/products/mp-100090.webp';
import mp1000210Image from '@/assets/catalog-page/products/mp-1000210.webp';
import mp1000360Image from '@/assets/catalog-page/products/mp-1000360.webp';
import mp200090Image from '@/assets/catalog-page/products/mp-200090.webp';
import mp2000210Image from '@/assets/catalog-page/products/mp-2000210.webp';
import mp300090Image from '@/assets/catalog-page/products/mp-300090.webp';

import type { Product } from '../types';

export const rotatorNozzles: Product[] = [
    {
        id: 26,
        slug: 'mp-100090',
        category: 'rotator-nozzles',
        name: 'Форсунка ротатор',
        model: 'MP 100090',
        price: 11500,
        image: mp100090Image,
        description:
            'Форсунка-ротатор Hunter MP 100090 використовується для економного та рівномірного поливу. Має сектор поливу 90–210° і підходить для газонів, клумб та інших зелених зон.',
        specifications: [
            { label: 'Виробник', value: 'Hunter' },
            { label: 'Країна-виробник', value: 'США' },
            { label: 'Тип обладнання', value: 'форсунка-ротатор' },
            { label: 'Сектор поливу', value: '90–210°' },
            { label: 'Призначення', value: 'рівномірний полив газонів, клумб та зелених зон' },
        ],
    },
    {
        id: 27,
        slug: 'mp-1000210',
        category: 'rotator-nozzles',
        name: 'Форсунка ротатор',
        model: 'MP 1000210',
        price: 11500,
        image: mp1000210Image,
        description:
            'Форсунка-ротатор Hunter MP 1000210 використовується для економного та рівномірного поливу. Має сектор поливу 210–270° і підходить для газонів, клумб та інших зелених зон.',
        specifications: [
            { label: 'Виробник', value: 'Hunter' },
            { label: 'Країна-виробник', value: 'США' },
            { label: 'Тип обладнання', value: 'форсунка-ротатор' },
            { label: 'Сектор поливу', value: '210–270°' },
            { label: 'Призначення', value: 'рівномірний полив газонів, клумб та зелених зон' },
        ],
    },
    {
        id: 28,
        slug: 'mp-1000360',
        category: 'rotator-nozzles',
        name: 'Форсунка ротатор',
        model: 'MP 1000360',
        price: 11500,
        image: mp1000360Image,
        description:
            'Форсунка-ротатор Hunter MP 1000360 використовується для економного кругового поливу. Має сектор поливу 360° і підходить для газонів, клумб та інших зелених зон.',
        specifications: [
            { label: 'Виробник', value: 'Hunter' },
            { label: 'Країна-виробник', value: 'США' },
            { label: 'Тип обладнання', value: 'форсунка-ротатор' },
            { label: 'Сектор поливу', value: '360°' },
            { label: 'Призначення', value: 'рівномірний круговий полив газонів, клумб та зелених зон' },
        ],
    },
    {
        id: 29,
        slug: 'mp-200090',
        category: 'rotator-nozzles',
        name: 'Форсунка ротатор',
        model: 'MP 200090',
        price: 11500,
        image: mp200090Image,
        description:
            'Форсунка-ротатор Hunter MP 200090 використовується для економного та рівномірного поливу. Має сектор поливу 90–210°, радіус 4–6,4 м і працює при тиску 2–3,75 бар.',
        specifications: [
            { label: 'Виробник', value: 'Hunter' },
            { label: 'Країна-виробник', value: 'США' },
            { label: 'Тип обладнання', value: 'форсунка-ротатор' },
            { label: 'Сектор поливу', value: '90–210°' },
            { label: 'Радіус поливу', value: '4–6,4 м' },
            { label: 'Робочий тиск', value: '2–3,75 бар' },
            { label: 'Призначення', value: 'рівномірний полив газонів, клумб та зелених зон' },
        ],
    },
    {
        id: 30,
        slug: 'mp-2000210',
        category: 'rotator-nozzles',
        name: 'Форсунка ротатор',
        model: 'MP 2000210',
        price: 11500,
        image: mp2000210Image,
        description:
            'Форсунка-ротатор Hunter MP 2000210 використовується для економного та рівномірного поливу. Має сектор поливу 210–270°, радіус 4–6,4 м і працює при тиску 2–3,75 бар.',
        specifications: [
            { label: 'Виробник', value: 'Hunter' },
            { label: 'Країна-виробник', value: 'США' },
            { label: 'Тип обладнання', value: 'форсунка-ротатор' },
            { label: 'Сектор поливу', value: '210–270°' },
            { label: 'Радіус поливу', value: '4–6,4 м' },
            { label: 'Робочий тиск', value: '2–3,75 бар' },
            { label: 'Призначення', value: 'рівномірний полив газонів, клумб та зелених зон' },
        ],
    },
    {
        id: 31,
        slug: 'mp-300090',
        category: 'rotator-nozzles',
        name: 'Форсунка ротатор',
        model: 'MP 300090',
        price: 11500,
        image: mp300090Image,
        description:
            'Форсунка-ротатор Hunter MP 300090 використовується для економного та рівномірного поливу. Має сектор поливу 360°, радіус 4–6,4 м і працює при тиску 2–3,75 бар.',
        specifications: [
            { label: 'Виробник', value: 'Hunter' },
            { label: 'Країна-виробник', value: 'США' },
            { label: 'Тип обладнання', value: 'форсунка-ротатор' },
            { label: 'Сектор поливу', value: '360°' },
            { label: 'Радіус поливу', value: '4–6,4 м' },
            { label: 'Робочий тиск', value: '2–3,75 бар' },
            { label: 'Призначення', value: 'рівномірний полив газонів, клумб та зелених зон' },
        ],
    },
];