import styles from './ServicesPage.module.css';

import servicesHeroImage from '@/assets/services-page/services-hero.webp';

import serviceIrrigationImage from '@/assets/services-page/service-irrigation.webp';
import servicePondImage from '@/assets/services-page/service-pond.webp';
import serviceRolledLawnImage from '@/assets/services-page/service-rolled-lawn.webp';
import serviceMowingImage from '@/assets/services-page/service-mowing.webp';

import pondFishImage from '@/assets/services-page/pond-fish.webp';
import pondSchemeImage from '@/assets/services-page/pond-scheme.webp';

import lawnInstallationImage from '@/assets/services-page/lawn-installation.webp';
import lawnRollsImage from '@/assets/services-page/lawn-rolls.webp';
import lawnLayingWorkImage from '@/assets/services-page/lawn-laying-work.webp';

import wheelbarrowIcon from '@/assets/services-page/wheelbarrow-icon.webp';
import handPlantIcon from '@/assets/services-page/hand-plant-icon.webp';
import grassIcon from '@/assets/services-page/grass-icon.webp';
import wateringIcon from '@/assets/services-page/watering-icon.webp';
import stepArrowIcon from '@/assets/services-page/step-arrow-icon.webp';
import stepCheckIcon from '@/assets/services-page/step-check-icon.webp';

import lawnTextureImage from '@/assets/services-page/lawn-texture.webp';

const services = [
    {
        title: 'Проектування і монтаж систем поливу',
        image: serviceIrrigationImage,
        alt: 'Проектування і монтаж систем поливу',
    },
    {
        title: 'Створення штучних водойм',
        image: servicePondImage,
        alt: 'Створення штучних водойм',
    },
    {
        title: 'Укладання рулонних газонів',
        image: serviceRolledLawnImage,
        alt: 'Укладання рулонних газонів',
    },
    {
        title: 'Стрижка газонів',
        image: serviceMowingImage,
        alt: 'Стрижка газонів',
    },
];

const lawnSteps = [
    {
        title: 'Підготовка ділянки',
        icon: wheelbarrowIcon,
        statusIcon: stepArrowIcon,
        alt: 'Підготовка ділянки',
    },
    {
        title: 'Підготовка ґрунту',
        icon: handPlantIcon,
        statusIcon: stepArrowIcon,
        alt: 'Підготовка ґрунту',
    },
    {
        title: 'Укладання газону',
        icon: grassIcon,
        statusIcon: stepArrowIcon,
        alt: 'Укладання газону',
    },
    {
        title: 'Полив і підгодівля',
        icon: wateringIcon,
        statusIcon: stepCheckIcon,
        alt: 'Полив і підгодівля',
    },
];

export function ServicesPage() {
    return (
        <main className={styles.servicesPage}>
            <section
                className={styles.heroSection}
                style={{
                    backgroundImage: `linear-gradient(90deg, rgba(19, 40, 41, 0.62) 0%, rgba(19, 40, 41, 0.36) 34%, rgba(19, 40, 41, 0) 68%), url(${servicesHeroImage})`,
                }}
            >
                <h2>Послуги</h2>
                <p>
                    Наша компанія виконує послуги з проєктування, монтажу та обслуговування систем поливу,
                    облаштування газонів, створення водойм і догляду за зеленими зонами.
                </p>
            </section>

            <section className={styles.servicesSection} aria-labelledby="services-title">
                <h3 id="services-title">Наші послуги</h3>

                <ul className={styles.servicesList}>
                    {services.map((service) => (
                        <li className={styles.serviceCard} key={service.title}>
                            <h4>{service.title}</h4>
                            <img src={service.image} alt={service.alt} />
                        </li>
                    ))}
                </ul>
            </section>

            <section className={styles.pondSection} aria-labelledby="pond-title">
                <div className={styles.pondContent}>
                    <div className={styles.pondTopRow}>
                        <img
                            className={styles.pondFishImage}
                            src={pondFishImage}
                            alt="Штучна водойма з декоративною рибою"
                        />

                        <article className={styles.pondInfoCard}>
                            <h3 id="pond-title">Про штучні водойми</h3>
                            <p>
                                Якщо перед Вами постало питання наявності на ділянці водойми, а природного озера,
                                ставка, струмка або заболоченого ділянки, який можна перетворити у водойму немає –
                                це не проблема. Ми за допомогою сучасних матеріалів можемо створити штучну водойму
                                практично в будь-якому місці і будь-якої форми.
                            </p>
                        </article>
                    </div>

                    <div className={styles.pondMiddleRow}>
                        <article className={styles.pondTextBlock}>
                            <h3>Що таке штучна водойма</h3>
                            <p>
                                Штучна водойма є гідроспоруда – система. Вона може бути простою або складною,
                                маленькою або великою, з використанням фонтанів, струмків, каскадів, на різних
                                рівнях і т.п., але його форма і розміщення будуть такими, які Вас найбільш
                                задовольнять. Спорудження починається з котловану під майбутню чашу водойми,
                                потім з використанням технології гідроізоляції (спец. плівка, пластикова ємність,
                                інше) зміцнюються берега, можливо посилення кладкою з декоративного каменю.
                                Закінчується спорудження благоустроєм зовнішньої частини так, щоб вона гармонійно
                                вписалася в загальний дизайн ділянки.
                            </p>
                        </article>

                        <img
                            className={styles.pondSchemeImage}
                            src={pondSchemeImage}
                            alt="Схема створення штучної водойми"
                        />
                    </div>

                    <h3 className={styles.pondConsultationText}>
                        Виїзд наших фахівців для виміру, консультації та складання кошторису – безкоштовно.
                    </h3>
                </div>
            </section>

            <section className={styles.lawnIntroSection} aria-labelledby="lawn-title">
                <article className={styles.lawnIntroCard}>
                    <h3 id="lawn-title">Комплекс робіт з укладання рулонних газонів</h3>
                    <p>
                        Після монтажу обладнання для поливу ми пропонуємо послуги з укладання рулонного газону.
                        Багаторічний газон з кращих сортів голландських трав швидко перетворить Ваш ділянку і
                        додасть садибі закінченого вигляду.
                    </p>
                </article>

                <img src={lawnInstallationImage} alt="Укладання рулонного газону" />
            </section>

            <section className={styles.lawnStepsSection} aria-labelledby="lawn-steps-title">
                <h3 id="lawn-steps-title">Етапи укладання газону</h3>

                <ol className={styles.lawnStepsList}>
                    {lawnSteps.map((step) => (
                        <li className={styles.lawnStepCard} key={step.title}>
                            <img className={styles.lawnStepIcon} src={step.icon} alt={step.alt} />
                            <p>{step.title}</p>
                            <img className={styles.lawnStepStatusIcon} src={step.statusIcon} alt="" />
                        </li>
                    ))}
                </ol>
            </section>

            <section className={styles.lawnGallerySection} aria-label="Приклади укладання рулонного газону">
                <img src={lawnRollsImage} alt="Рулони газону перед укладанням" />
                <img src={lawnLayingWorkImage} alt="Процес укладання газону" />
            </section>

            <section className={styles.mowingSection} aria-labelledby="mowing-title">
                <div className={styles.mowingContent}>
                    <div className={styles.mowingTopRow}>
                        <img src={lawnTextureImage} alt="Газон після стрижки" />

                        <article className={styles.mowingCard}>
                            <h3 id="mowing-title">Стрижка газонів</h3>
                            <p>
                                Регулярна стрижка допомагає підтримувати газон охайним, густим і здоровим.
                                Ми виконуємо разову та сезонну стрижку газонів, вирівнюємо покриття та надаємо
                                ділянці доглянутого вигляду.
                            </p>
                        </article>
                    </div>

                    <article className={styles.mowingImportance}>
                        <h3>Чому це важливо</h3>
                        <p>
                            Якщо перед Вами постало питання наявності на ділянці водойми, а природного озера,
                            ставка, струмка або заболоченого ділянки, який можна перетворити у водойму немає –
                            це не проблема. Ми за допомогою сучасних матеріалів можемо створити штучну водойму
                            практично в будь-якому місці і будь-якої форми.
                        </p>
                    </article>
                </div>
            </section>
        </main>
    );
}