export type ProductCategoryId =
    | 'rain-sensors'
    | 'solar-sensors'
    | 'sprinklers'
    | 'valves'
    | 'controllers'
    | 'expansion-modules'
    | 'rotator-nozzles';

export interface ProductCategory {
    id: ProductCategoryId;
    title: string;
}

export interface ProductSpecification {
    label: string;
    value: string;
}

export interface Product {
    id: number;
    slug: string;
    category: ProductCategoryId;
    name: string;
    model: string;
    price: number;
    image: string;
    description: string;
    specifications: ProductSpecification[];
}