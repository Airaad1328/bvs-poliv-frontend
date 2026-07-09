import catalogHeroImage from '@/assets/catalog-page/catalog-hero.webp';

import {
    ProductCard,
    productCategories,
    products,
} from '@/entities/product';

import styles from './CatalogPage.module.css';

export function CatalogPage() {
    return (
        <main className={styles.catalogPage}>
            <section
                className={styles.heroSection}
                style={{
                    backgroundImage: `
                        linear-gradient(
                            90deg,
                            rgba(19, 40, 41, 0.64) 0%,
                            rgba(19, 40, 41, 0.36) 38%,
                            rgba(19, 40, 41, 0) 70%
                        ),
                        url(${catalogHeroImage})
                    `,
                }}
            >
                <h2>Каталог</h2>

                <p>
                    Каталог обладнання для автоматичного поливу:
                    датчики, контролери, клапани, дощувачі,
                    модулі та форсунки для ефективної роботи системи.
                </p>
            </section>

            <div className={styles.categoriesList}>
                {productCategories.map((category) => {
                    const categoryProducts = products.filter(
                        (product) => product.category === category.id,
                    );

                    return (
                        <section
                            className={styles.categorySection}
                            key={category.id}
                            aria-labelledby={`category-${category.id}`}
                        >
                            <h3 id={`category-${category.id}`}>
                                {category.title}
                            </h3>

                            <div className={styles.productsGrid}>
                                {categoryProducts.map((product) => (
                                    <ProductCard
                                        product={product}
                                        key={product.id}
                                    />
                                ))}
                            </div>
                        </section>
                    );
                })}
            </div>
        </main>
    );
}