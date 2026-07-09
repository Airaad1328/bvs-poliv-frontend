import styles from './EquipmentPage.module.css';

import { Link } from 'react-router';

import heroImage from '@/assets/equipment-page/equipment-hero.png';

import hunterEquipmentImage from '@/assets/equipment-page/equipment-hunter.png';
import pedrolloPlurijetImage from '@/assets/equipment-page/pedrollo-plurijet.png';
import pedrolloJcrImage from '@/assets/equipment-page/pedrollo-jcr.png';
import pedrollo4BlockImage from '@/assets/equipment-page/pedrollo-4block.png';
import hydroAccumulatorsImage from '@/assets/equipment-page/hydro-accumulators.png';

import polyethylenePipesImage from '@/assets/equipment-page/polyethylene-pipes.png';
import compressionFittingsImage from '@/assets/equipment-page/compression-fittings.png';
import clampsImage from '@/assets/equipment-page/clamps.png';
import threadedConnectionsImage from '@/assets/equipment-page/threaded-connections.png';
import plasticWellsImage from '@/assets/equipment-page/plastic-wells.png';

import qualityIcon from '@/assets/equipment-page/quality-icon.png';
import reliabilityIcon from '@/assets/equipment-page/reliability-icon.png';
import durabilityIcon from '@/assets/equipment-page/durability-icon.png';
import installIcon from '@/assets/equipment-page/install-icon.png';
import compatibilityIcon from '@/assets/equipment-page/compatibility-icon.png';

const mainEquipment = [
    {
        title: 'Обладнання HUNTER',
        image: hunterEquipmentImage,
        alt: 'Обладнання Hunter для автоматичного поливу',
    },
    {
        title: 'Насоси PEDROLLO PLURIJET',
        subtitle: 'самовсмоктуючі',
        image: pedrolloPlurijetImage,
        alt: 'Насос Pedrollo Plurijet',
    },
    {
        title: 'Насоси PEDROLLO JCR',
        subtitle: 'самовсмоктуючі',
        image: pedrolloJcrImage,
        alt: 'Насос Pedrollo JCR',
    },
    {
        title: 'Насоси PEDROLLO 4BLOCK',
        subtitle: 'скважинні',
        image: pedrollo4BlockImage,
        alt: 'Насоси Pedrollo 4BLOCK',
    },
    {
        title: 'Гідро-акумулятори',
        subtitle: 'ресивери',
        image: hydroAccumulatorsImage,
        alt: 'Гідроакумулятори та ресивери',
    },
];

const additionalEquipment = [
    {
        title: 'Поліетиленові труби',
        image: polyethylenePipesImage,
        alt: 'Поліетиленові труби',
        text: 'Призначені для водогонів питної та технічної води що транспортується з напором. Виготовлені на сучасному обладнанні з використанням новітніх методів обробки. Легкі в транспортуванні, зручні в монтажі і експлуатації.',
    },
    {
        title: 'Компресійні фітинги',
        image: compressionFittingsImage,
        alt: 'Компресійні фітинги',
        text: 'Механічні затискні фітинги з поліетилену підходять для всіх типів поліетиленових труб. Вони бувають у формі муфт, трійників і колін, що дозволяє створювати розгалужені водопровідні мережі. З’єднання збираються вручну, витримують тиск до 1,6 МПа / 16 бар і підходять для зовнішніх, підземних та внутрішніх мереж d 16–110 мм.',
    },
    {
        title: 'Хомути',
        image: clampsImage,
        alt: 'Хомути для труб',
        text: 'Повний набір простих/подвійних скоб різних розмірів. Монтажна операція дуже проста. Укомплектовані ущільнювачем, резинове кільце, для герметичності. Для надійного кріплення и надійності в комплекті є болти та іноді кільце із нержавіючої сталі.',
    },
    {
        title: 'Різьбові з’єднання',
        image: threadedConnectionsImage,
        alt: 'Різьбові з’єднання',
        text: 'Віднайдений ідеальний компроміс між механічною міцністю та легкістю конструкції. Запропонована повна гамма форм і діаметрів. Висока ступінь герметичності забезпечена точно виконаною різьбою.',
    },
    {
        title: 'Пластикові колодці',
        image: plasticWellsImage,
        alt: 'Пластикові колодці',
        text: 'Пластикові колодці виготовлені зі стійких до непогоди й ударів матеріалів. Використовуються на приватних ділянках, громадських територіях і спортивних полях. Мають круглу або прямокутну форму, легкі, економні та прості в експлуатації. Призначені для підземного розміщення клапанів, редукторів та інших пристроїв із доступом для огляду. Є зручною та практичною альтернативою бетонним колодязям.',
    },
];

const advantages = [
    {
        title: 'Перевірена якість',
        icon: qualityIcon,
        alt: 'Перевірена якість',
    },
    {
        title: 'Надійність',
        icon: reliabilityIcon,
        alt: 'Надійність',
    },
    {
        title: 'Довговічність',
        icon: durabilityIcon,
        alt: 'Довговічність',
    },
    {
        title: 'Професійний монтаж',
        icon: installIcon,
        alt: 'Професійний монтаж',
    },
    {
        title: 'Сумісність компонентів',
        icon: compatibilityIcon,
        alt: 'Сумісність компонентів',
    },
];

export function EquipmentPage() {
    return (
        <main className={styles.equipmentPage}>
            <section
                className={styles.heroSection}
                style={{
                    backgroundImage: `linear-gradient(90deg, rgba(19, 40, 41, 0.64) 0%, rgba(19, 40, 41, 0.34) 39%, rgba(19, 40, 41, 0) 68%), url(${heroImage})`,
                }}
            >
                <h2>Обладнання</h2>
                <p>Надійне обладнання для систем автоматичного поливу</p>
            </section>

            <section className={styles.introSection} aria-labelledby="equipment-title">
                <h3 id="equipment-title">Обладнання для автоматичного поливу</h3>
                <p>
                    Для монтажу систем поливу нашими спеціалістами використовується тільки перевірені на якість,
                    надійність та довго тривалість при експлуатації матеріали та обладнання.
                </p>
            </section>

            <section className={styles.mainEquipmentSection} aria-labelledby="main-equipment-title">
                <h3 id="main-equipment-title">Основне обладнання</h3>

                <ul className={styles.mainEquipmentList}>
                    {mainEquipment.map((item) => (
                        <li className={styles.mainEquipmentCard} key={item.title}>
                            <div className={styles.mainEquipmentImageWrapper}>
                                <img src={item.image} alt={item.alt} />
                            </div>

                            <h4>{item.title}</h4>

                            {item.subtitle && <p>{item.subtitle}</p>}
                        </li>
                    ))}
                </ul>
            </section>

            <div className={styles.catalogButtonWrapper}>
                <Link className={styles.catalogButton} to="/catalog">
                    Каталог
                </Link>
            </div>

            <section
                className={styles.additionalEquipmentSection}
                id="catalog"
                aria-labelledby="additional-equipment-title"
            >
                <h3 id="additional-equipment-title">Допоміжне обладнання</h3>

                <ul className={styles.additionalEquipmentList}>
                    {additionalEquipment.map((item) => (
                        <li className={styles.additionalEquipmentCard} key={item.title}>
                            <h4>{item.title}</h4>

                            <div className={styles.additionalEquipmentImageWrapper}>
                                <img src={item.image} alt={item.alt} />
                            </div>

                            <p>{item.text}</p>
                        </li>
                    ))}
                </ul>
            </section>

            <section className={styles.advantagesSection} aria-label="Переваги обладнання">
                <ul className={styles.advantagesList}>
                    {advantages.map((item) => (
                        <li className={styles.advantagesItem} key={item.title}>
                            <img src={item.icon} alt={item.alt} />
                            <p>{item.title}</p>
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