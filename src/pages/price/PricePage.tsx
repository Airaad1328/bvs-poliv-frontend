import styles from './PricePage.module.css';

import priceHeroImage from '@/assets/price-page/price-hero.png';

const priceItems = [
    {
        category: 'Обладнання для автополиву',
        brands: ['HUNTER (США)'],
    },
    {
        category: 'Обладнання для крапельного поливу',
        brands: ['Metzerplas (Ізраїль)'],
    },
    {
        category: 'Фітинг затискний',
        brands: ['Unidelta (Італія)', 'SantehPlast (Україна)'],
    },
    {
        category: 'Труби',
        brands: ['ПЕ (Україна)'],
    },
    {
        category: 'Допоміжне обладнання',
        brands: ['Irritec (Італія)', 'PlasticaAlfa (Італія)'],
    },
    {
        category: 'Насоси',
        brands: ['Calpeda (Італія)', 'Speroni (Італія)', 'Pedrollo (Італія)'],
    },
    {
        category: 'Автоматика, насосне обладнання',
        brands: ['GB avtomatika'],
    },
];

export function PricePage() {
    return (
        <main className={styles.pricePage}>
            <section
                className={styles.heroSection}
                style={{
                    backgroundImage: `linear-gradient(90deg, rgba(19, 40, 41, 0.62) 0%, rgba(19, 40, 41, 0.34) 35%, rgba(19, 40, 41, 0) 70%), url(${priceHeroImage})`,
                }}
            >
                <h2>Прайс</h2>
                <p>Обладнання для систем автоматичного поливу</p>
            </section>

            <section className={styles.priceListSection} aria-labelledby="price-title">
                <h3 id="price-title">Прайс на обладнання для поливу газонів</h3>

                <ul className={styles.priceList}>
                    {priceItems.map((item) => (
                        <li className={styles.priceItem} key={item.category}>
                            <h4>{item.category}</h4>

                            <div className={styles.brandsList}>
                                {item.brands.map((brand) => (
                                    <span key={brand}>{brand}</span>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}