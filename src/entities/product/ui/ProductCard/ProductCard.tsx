import { Link } from 'react-router';

import priceIcon from '@/assets/catalog-page/price-icon.webp';

import { formatProductPrice } from '../../lib/formatProductPrice';
import type { Product } from '../../model/types';

import styles from './ProductCard.module.css';

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <article className={styles.productCard}>
            <Link
                className={styles.productLink}
                to={`/catalog/${product.slug}`}
                aria-label={`Переглянути ${product.name} ${product.model}`}
            >
                <div className={styles.productPreview}>
                    <div className={styles.imageWrapper}>
                        <img
                            src={product.image}
                            alt={`${product.name} ${product.model}`}
                            loading="lazy"
                            decoding="async"
                        />
                    </div>

                    <h4>{product.model}</h4>
                </div>

                <div className={styles.priceBadge}>
                    <img src={priceIcon} alt="" />
                    <span>{formatProductPrice(product.price)}</span>
                </div>
            </Link>
        </article>
    );
}