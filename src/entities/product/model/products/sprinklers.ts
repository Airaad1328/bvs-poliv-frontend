import psu04Image from '@/assets/catalog-page/products/psu-04.webp';
import pros04Image from '@/assets/catalog-page/products/pros-04.webp';
import pgj04Image from '@/assets/catalog-page/products/pgj-04.webp';

import type { Product } from '../types';

export const sprinklers: Product[] = [
    {
        id: 5,
        slug: 'psu-04',
        category: 'sprinklers',
        name: 'Дощовик типу “спрей”',
        model: 'PSU-04',
        price: 11500,
        image: psu04Image,
        description:
            'Дощовик Hunter PSU-04 використовується для рівномірного поливу невеликих ділянок, газонів і клумб. Має висувну частину висотою 10 см, працює при тиску 1,4–2,8 бар та постачається без форсунки.',
        specifications: [
            {
                label: 'Виробник',
                value: 'Hunter',
            },
            {
                label: 'Країна-виробник',
                value: 'США',
            },
            {
                label: 'Тип обладнання',
                value: 'дощовик типу “спрей”',
            },
            {
                label: 'Висота висувної частини',
                value: '10 см',
            },
            {
                label: 'Робочий тиск',
                value: '1,4–2,8 бар',
            },
            {
                label: 'Призначення',
                value: 'рівномірний полив газонів, клумб та зелених зон',
            },
        ],
    },
    {
        id: 6,
        slug: 'pros-04',
        category: 'sprinklers',
        name: 'Дощовик типу “спрей”',
        model: 'PROS-04',
        price: 11500,
        image: pros04Image,
        description:
            'Дощовик Hunter PROS-04 використовується для рівномірного поливу газонів, клумб і невеликих зелених зон. Має висувну частину висотою 10 см, працює при тиску 1,4–2,8 бар та постачається без форсунки.',
        specifications: [
            {
                label: 'Виробник',
                value: 'Hunter',
            },
            {
                label: 'Країна-виробник',
                value: 'США',
            },
            {
                label: 'Тип обладнання',
                value: 'дощовик типу “спрей”',
            },
            {
                label: 'Висота висувної частини',
                value: '10 см',
            },
            {
                label: 'Робочий тиск',
                value: '1,4–2,8 бар',
            },
            {
                label: 'Призначення',
                value: 'рівномірний полив газонів, клумб та зелених зон',
            },
        ],
    },
    {
        id: 7,
        slug: 'pgj-04',
        category: 'sprinklers',
        name: 'Роторний дощовик',
        model: 'PGJ-04',
        price: 11500,
        image: pgj04Image,
        description:
            'Роторний дощовик Hunter PGJ-04 підходить для рівномірного поливу газонів і зелених зон. Має регульований сектор поливу 40–360°, радіус 4,6–11,3 м, висувну частину 10 см і працює при тиску 2,1–3,4 бар.',
        specifications: [
            {
                label: 'Виробник',
                value: 'Hunter',
            },
            {
                label: 'Країна-виробник',
                value: 'США',
            },
            {
                label: 'Тип обладнання',
                value: 'роторний дощовик',
            },
            {
                label: 'Сектор поливу',
                value: '40–360°',
            },
            {
                label: 'Висота висувної частини',
                value: '10 см',
            },
            {
                label: 'Радіус поливу',
                value: '4,6–11,3 м',
            },
            {
                label: 'Робочий тиск',
                value: '2,1–3,4 бар',
            },
            {
                label: 'Призначення',
                value: 'рівномірний полив газонів, клумб та зелених зон',
            },
        ],
    },
];