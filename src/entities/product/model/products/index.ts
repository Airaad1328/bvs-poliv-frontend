import { controllers } from './controllers';
import { expansionModules } from './expansionModules';
import { rainSensors } from './rainSensors';
import { rotatorNozzles } from './rotatorNozzles';
import { solarSensors } from './solarSensors';
import { sprinklers } from './sprinklers';
import { valves } from './valves';

import type { Product } from '../types';

export const products: Product[] = [
    ...rainSensors,
    ...solarSensors,
    ...sprinklers,
    ...valves,
    ...controllers,
    ...expansionModules,
    ...rotatorNozzles,
];

export function getProductBySlug(slug: string) {
    return products.find((product) => product.slug === slug);
}