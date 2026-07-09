import solarSyncImage from '@/assets/catalog-page/products/solar-sync.webp';
import solarSyncSenImage from '@/assets/catalog-page/products/solar-sync-sen.webp';

import type { Product } from '../types';

export const solarSensors: Product[] = [
    {
        id: 3,
        slug: 'solar-sync',
        category: 'solar-sensors',
        name: 'Датчик сонячної синхронізації',
        model: 'SOLAR SYNC',
        price: 11500,
        image: solarSyncImage,
        description:
            'Датчик Hunter SOLAR SYNC автоматично коригує роботу системи поливу відповідно до погодних умов. Сумісний з пультами PC, PCC, I-CORE, ICC та допомагає економити воду без втрати якості зволоження ділянки.',
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
                value: 'датчик сонячної синхронізації',
            },
            {
                label: 'Сумісність',
                value: 'PC, PCC, I-CORE, ICC',
            },
            {
                label: 'Діапазон регулювання',
                value: '3–25 мм опадів',
            },
            {
                label: 'Призначення',
                value: 'автоматичне коригування поливу залежно від погодних умов',
            },
        ],
    },
    {
        id: 4,
        slug: 'solar-sync-sen',
        category: 'solar-sensors',
        name: 'Датчик сонячної синхронізації',
        model: 'SOLAR SYNC-SEN',
        price: 11500,
        image: solarSyncSenImage,
        description:
            'Датчик Hunter SOLAR SYNC-SEN автоматично коригує роботу системи поливу з урахуванням погодних умов. Сумісний з пультами X-CORE, допомагає економити воду та забезпечує правильний режим зволоження ділянки.',
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
                value: 'датчик сонячної синхронізації',
            },
            {
                label: 'Сумісність',
                value: 'X-CORE',
            },
            {
                label: 'Діапазон регулювання',
                value: '3–25 мм опадів',
            },
            {
                label: 'Призначення',
                value: 'автоматичне коригування поливу залежно від погодних умов',
            },
        ],
    },
];