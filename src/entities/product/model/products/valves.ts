import pgv100gbImage from '@/assets/catalog-page/products/pgv-100g-b.webp';
import pgv101gbImage from '@/assets/catalog-page/products/pgv-101g-b.webp';
import pgv151bImage from '@/assets/catalog-page/products/pgv-151-b.webp';
import pgv201bImage from '@/assets/catalog-page/products/pgv-201-b.webp';

import type { Product } from '../types';

export const valves: Product[] = [
    {
        id: 8,
        slug: 'pgv-100g-b',
        category: 'valves',
        name: 'Електромагнітний клапан',
        model: 'PGV-100G-B',
        price: 11500,
        image: pgv100gbImage,
        description:
            'Електромагнітний клапан Hunter PGV-100G-B використовується для керування подачею води в системах автоматичного поливу. Має діаметр 1", прямоточну конструкцію, різьбове з’єднання ВР та постачається без регулювання потоку.',
        specifications: [
            { label: 'Виробник', value: 'Hunter' },
            { label: 'Країна-виробник', value: 'США' },
            { label: 'Тип обладнання', value: 'електромагнітний клапан' },
            { label: 'Діаметр', value: '1"' },
            { label: 'Конструкція', value: 'прямоточна' },
            { label: 'З’єднання', value: 'різьбове, ВР' },
            { label: 'Регулювання потоку', value: 'без регулювання' },
            { label: 'Призначення', value: 'керування подачею води в зоні поливу' },
        ],
    },
    {
        id: 9,
        slug: 'pgv-101g-b',
        category: 'valves',
        name: 'Електромагнітний клапан',
        model: 'PGV-101G-B',
        price: 11500,
        image: pgv101gbImage,
        description:
            'Електромагнітний клапан Hunter PGV-101G-B використовується для керування подачею води в системах автоматичного поливу. Має діаметр 1", прямоточну конструкцію, різьбове з’єднання ВР та регулювання потоку.',
        specifications: [
            { label: 'Виробник', value: 'Hunter' },
            { label: 'Країна-виробник', value: 'США' },
            { label: 'Тип обладнання', value: 'електромагнітний клапан' },
            { label: 'Діаметр', value: '1"' },
            { label: 'Конструкція', value: 'прямоточна' },
            { label: 'З’єднання', value: 'різьбове, ВР' },
            { label: 'Регулювання потоку', value: 'є' },
            { label: 'Призначення', value: 'керування подачею води в зоні поливу' },
        ],
    },
    {
        id: 10,
        slug: 'pgv-151-b',
        category: 'valves',
        name: 'Електромагнітний клапан',
        model: 'PGV-151-B',
        price: 11500,
        image: pgv151bImage,
        description:
            'Електромагнітний клапан Hunter PGV-151-B використовується для керування подачею води в системах автоматичного поливу. Має діаметр 1,5", прямоточну конструкцію, різьбове з’єднання ВР та регулювання потоку.',
        specifications: [
            { label: 'Виробник', value: 'Hunter' },
            { label: 'Країна-виробник', value: 'США' },
            { label: 'Тип обладнання', value: 'електромагнітний клапан' },
            { label: 'Діаметр', value: '1,5"' },
            { label: 'Конструкція', value: 'прямоточна' },
            { label: 'З’єднання', value: 'різьбове, ВР' },
            { label: 'Регулювання потоку', value: 'є' },
            { label: 'Призначення', value: 'керування подачею води в зоні поливу' },
        ],
    },
    {
        id: 11,
        slug: 'pgv-201-b',
        category: 'valves',
        name: 'Електромагнітний клапан',
        model: 'PGV-201-B',
        price: 11500,
        image: pgv201bImage,
        description:
            'Електромагнітний клапан Hunter PGV-201-B використовується для керування подачею води в системах автоматичного поливу. Має діаметр 2", прямоточну конструкцію, різьбове з’єднання ВР та регулювання потоку.',
        specifications: [
            { label: 'Виробник', value: 'Hunter' },
            { label: 'Країна-виробник', value: 'США' },
            { label: 'Тип обладнання', value: 'електромагнітний клапан' },
            { label: 'Діаметр', value: '2"' },
            { label: 'Конструкція', value: 'прямоточна' },
            { label: 'З’єднання', value: 'різьбове, ВР' },
            { label: 'Регулювання потоку', value: 'є' },
            { label: 'Призначення', value: 'керування подачею води в зоні поливу' },
        ],
    },
];