export { formatProductPrice } from './lib/formatProductPrice';

export { productCategories } from './model/categories.ts';

export {
    getProductBySlug,
    products,
} from './model/products';

export type {
    Product,
    ProductCategory,
    ProductCategoryId,
    ProductSpecification,
} from './model/types';

export { ProductCard } from './ui/ProductCard';