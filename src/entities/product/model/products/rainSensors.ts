import miniClikImage from '@/assets/catalog-page/products/mini-clik.webp';
import rainClikImage from '@/assets/catalog-page/products/rain-clik.webp';

import type { Product } from '../types';

export const rainSensors: Product[] = [
    {
        id: 1,
        slug: 'mini-clik',
        category: 'rain-sensors',
        name: 'Датчик дощу',
        model: 'MINI-CLIK',
        price: 11500,
        image: miniClikImage,
        description:
            'Датчик дощу Hunter MINI-CLIK призначений для автоматичного вимкнення системи поливу під час опадів. Має діапазон регулювання спрацювання від 3 до 25 мм, допомагає економити воду та запобігає надмірному зволоженню ділянки.',
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
                value: 'датчик дощу',
            },
            {
                label: 'Діапазон регулювання',
                value: '3–25 мм опадів',
            },
            {
                label: 'Призначення',
                value: 'автоматичне вимкнення поливу під час дощу',
            },
        ],
    },
    {
        id: 2,
        slug: 'rain-clik',
        category: 'rain-sensors',
        name: 'Датчик дощу',
        model: 'RAIN-CLIK',
        price: 11500,
        image: rainClikImage,
        description:
            'Датчик дощу Hunter RAIN-CLIK автоматично вимикає систему поливу під час дощу. Має регулювання спрацювання від 3 до 25 мм опадів, допомагає економити воду та захищає ділянку від надмірного зволоження.',
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
                value: 'датчик дощу',
            },
            {
                label: 'Діапазон регулювання',
                value: '3–25 мм опадів',
            },
            {
                label: 'Призначення',
                value: 'автоматичне вимкнення поливу під час дощу',
            },
        ],
    },
];