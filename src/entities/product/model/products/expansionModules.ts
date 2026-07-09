import pcm300Image from '@/assets/catalog-page/products/pcm-300.webp';
import pcm900Image from '@/assets/catalog-page/products/pcm-900.webp';

import type { Product } from '../types';

export const expansionModules: Product[] = [
    {
        id: 24,
        slug: 'pcm-300',
        category: 'expansion-modules',
        name: 'Модуль розширення',
        model: 'PCM-300',
        price: 11500,
        image: pcm300Image,
        description:
            'Модуль Hunter PCM-300 додає 3 зони до системи автоматичного поливу та дозволяє розширити можливості сумісного контролера без заміни основного обладнання.',
        specifications: [
            { label: 'Виробник', value: 'Hunter' },
            { label: 'Країна-виробник', value: 'США' },
            { label: 'Тип обладнання', value: 'модуль розширення' },
            { label: 'Кількість зон', value: '3' },
            { label: 'Призначення', value: 'розширення системи керування поливом' },
        ],
    },
    {
        id: 25,
        slug: 'pcm-900',
        category: 'expansion-modules',
        name: 'Модуль розширення',
        model: 'PCM-900',
        price: 11500,
        image: pcm900Image,
        description:
            'Модуль Hunter PCM-900 додає 9 зон до системи автоматичного поливу та дозволяє розширити можливості сумісного контролера без заміни основного обладнання.',
        specifications: [
            { label: 'Виробник', value: 'Hunter' },
            { label: 'Країна-виробник', value: 'США' },
            { label: 'Тип обладнання', value: 'модуль розширення' },
            { label: 'Кількість зон', value: '9' },
            { label: 'Призначення', value: 'розширення системи керування поливом' },
        ],
    },
];