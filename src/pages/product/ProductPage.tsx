import { Link, useParams } from 'react-router';

import priceIcon from '@/assets/catalog-page/price-icon.webp';

import {
    formatProductPrice,
    getProductBySlug,
} from '@/entities/product';

import styles from './ProductPage.module.css';

export function ProductPage() {
    const { slug } = useParams<{ slug: string }>();

    const product = slug
        ? getProductBySlug(slug)
        : undefined;

    if (!product) {
        return (
            <main className={styles.notFoundPage}>
                <h1>Товар не знайдено</h1>

                <p>
                    Перевірте адресу сторінки або поверніться до каталогу.
                </p>

                <Link to="/catalog">
                    Повернутися до каталогу
                </Link>
            </main>
        );
    }

    return (
        <main className={styles.productPage}>
            <section className={styles.productSection}>
                <div className={styles.imageCard}>
                    <img
                        src={product.image}
                        alt={`${product.name} ${product.model}`}
                        decoding="async"
                    />
                </div>

                <article className={styles.productInfo}>
                    <h1 className={styles.productTitle}>
                        <span>{product.name}</span>
                        <strong>{product.model}</strong>
                    </h1>

                    <div className={styles.price}>
                        <img src={priceIcon} alt="" />

                        <span>
                            {formatProductPrice(product.price)}
                        </span>
                    </div>

                    <p className={styles.description}>
                        {product.description}
                    </p>

                    <h2 className={styles.specificationsTitle}>
                        Основні характеристики:
                    </h2>

                    <dl className={styles.specificationsList}>
                        {product.specifications.map((specification) => (
                            <div
                                className={styles.specificationRow}
                                key={specification.label}
                            >
                                <dt>
                                    {specification.label}:
                                </dt>

                                <dd>
                                    {specification.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </article>
            </section>
        </main>
    );
}