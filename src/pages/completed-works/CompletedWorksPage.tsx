import styles from './CompletedWorksPage.module.css';

import completedHeroImage from '@/assets/completed-works-page/completed-hero.webp';

import workSprinklerLawnImage from '@/assets/completed-works-page/work-sprinkler-lawn.webp';
import workSprinklerGardenImage from '@/assets/completed-works-page/work-sprinkler-garden.webp';
import workPondConstructionImage from '@/assets/completed-works-page/work-pond-construction.webp';
import workLawnMowingWideImage from '@/assets/completed-works-page/work-lawn-mowing-wide.webp';
import workLandscapePathImage from '@/assets/completed-works-page/work-landscape-path.webp';
import workGardenRocksImage from '@/assets/completed-works-page/work-garden-rocks.webp';
import workRainbowYardImage from '@/assets/completed-works-page/work-rainbow-yard.webp';
import workCommercialIrrigationImage from '@/assets/completed-works-page/work-commercial-irrigation.webp';
import workSprinklerCloseWideImage from '@/assets/completed-works-page/work-sprinkler-close-wide.webp';
import workSprinklerFlowerbedImage from '@/assets/completed-works-page/work-sprinkler-flowerbed.webp';
import workLawnRollsImage from '@/assets/completed-works-page/work-lawn-rolls.webp';
import workPondWaterfallImage from '@/assets/completed-works-page/work-pond-waterfall.webp';
import workPondFountainImage from '@/assets/completed-works-page/work-pond-fountain.webp';
import workGardenWalkwayWideImage from '@/assets/completed-works-page/work-garden-walkway-wide.webp';
import workTrenchPipesImage from '@/assets/completed-works-page/work-trench-pipes.webp';

const works = [
    {
        image: workSprinklerLawnImage,
        alt: 'Автоматичний полив газону на приватній ділянці',
    },
    {
        image: workSprinklerGardenImage,
        alt: 'Система автоматичного поливу вздовж зеленої ділянки',
    },
    {
        image: workPondConstructionImage,
        alt: 'Підготовка декоративної водойми на ділянці',
    },
    {
        image: workLawnMowingWideImage,
        alt: 'Доглянутий газон після стрижки',
        isWide: true,
    },
    {
        image: workLandscapePathImage,
        alt: 'Ландшафтна доріжка та газон біля будинку',
    },
    {
        image: workGardenRocksImage,
        alt: 'Озеленення ділянки з декоративними рослинами та камінням',
    },
    {
        image: workRainbowYardImage,
        alt: 'Робота системи поливу на подвір’ї',
    },
    {
        image: workCommercialIrrigationImage,
        alt: 'Монтаж системи поливу на комерційному об’єкті',
    },
    {
        image: workSprinklerCloseWideImage,
        alt: 'Спринклер для поливу газону біля доріжки',
        isWide: true,
    },
    {
        image: workSprinklerFlowerbedImage,
        alt: 'Полив газону біля декоративної клумби',
    },
    {
        image: workLawnRollsImage,
        alt: 'Укладання рулонного газону',
    },
    {
        image: workPondWaterfallImage,
        alt: 'Декоративна водойма з водоспадом',
    },
    {
        image: workPondFountainImage,
        alt: 'Декоративна водойма з фонтаном',
    },
    {
        image: workGardenWalkwayWideImage,
        alt: 'Озеленена ділянка з садовою доріжкою',
        isWide: true,
    },
    {
        image: workTrenchPipesImage,
        alt: 'Монтаж труб системи автоматичного поливу',
    },
];

export function CompletedWorksPage() {
    return (
        <main className={styles.completedWorksPage}>
            <section
                className={styles.heroSection}
                style={{
                    backgroundImage: `linear-gradient(90deg, rgba(19, 40, 41, 0.62) 0%, rgba(19, 40, 41, 0.36) 36%, rgba(19, 40, 41, 0) 70%), url(${completedHeroImage})`,
                }}
            >
                <h2>Виконані роботи</h2>
                <p>Реалізовані системи автоматичного поливу для приватних та комерційних об’єктів</p>
            </section>

            <section className={styles.gallerySection} aria-label="Галерея виконаних робіт">
                <ul className={styles.galleryList}>
                    {works.map((work) => (
                        <li
                            className={`${styles.galleryItem} ${work.isWide ? styles.galleryItemWide : ''}`}
                            key={work.alt}
                        >
                            <img src={work.image} alt={work.alt} />
                        </li>
                    ))}
                </ul>
            </section>

            <section className={styles.consultationSection}>
                <div className={styles.consultationText}>
                    <h3>Підберемо обладнання для вашої системи поливу</h3>
                    <p>Індивідуальний підхід та професійні рішення для вашої ділянки.</p>
                </div>

                <a className={styles.consultationButton} href="/contacts">
                    Замовити консультацію
                </a>
            </section>
        </main>
    );
}