import styles from './AutoPolivPage.module.css';

import polivSecondImage from '@/assets/poliv-second-image.jpg';
import dropIcon from '@/assets/poliv-page/drop_icon.png';
import plumbingIcon from '@/assets/poliv-page/plumbing_icon.png';
import wrenchIcon from '@/assets/poliv-page/wrench_icon.png';
import sprinlkerIcon from '@/assets/poliv-page/sprinker_icon.png';
import arrowRightIcon from '@/assets/poliv-page/arrow_right_icon.png'
import hunterFourthSectionImage from '@/assets/poliv-page/hunterFourthSectionImage.png';
import fiveSectionImage from '@/assets/poliv-page/five_section_image.png';
import sixthSextionSoplaImage from '@/assets/poliv-page/sopla_image.png';
import sixSectionImage from '@/assets/poliv-page/six_section_image.png';

const firstList = [
    {
        id:1,
        title: "Забір води",
        icon: dropIcon
    },
    {
        id:2,
        title: "Подача по трубах",
        icon: plumbingIcon
    },
    {
        id:3,
        title: "Керування клапанами",
        icon: wrenchIcon
    },
    {
        id:4,
        title: "Полив зон",
        icon: sprinlkerIcon
    },
];

const secondList = [
    {
        id:1,
        title: "Cтанції забору води, насос",
        icon: arrowRightIcon
    },
    {
        id:2,
        title: "Поливальні головки",
        icon: arrowRightIcon
    },
    {
        id:3,
        title: "Трубопроводи",
        icon: arrowRightIcon
    },
    {
        id:4,
        title: "Сопла",
        icon: arrowRightIcon
    },
    {
        id:5,
        title: "Електромагнітні клапани",
        icon: arrowRightIcon
    },
    {
        id:6,
        title: "Пульт керування системи поливу",
        icon: arrowRightIcon
    },
    {
        id:7,
        title: "Вентилі",
        icon: arrowRightIcon
    },
];

const thirdList = [
    {
        id:1,
        title: "Роторні"
    },
    {
        id:3,
        title: "Віялові"
    },
    {
        id:2,
        title: "Ротаторні"
    },
    {
        id:4,
        title: "Крапельні"
    },
];

const fourthList = [
    {
       id: 1,
       title: "Економія трудових затрат та часу"
    },
    {
       id: 2,
       title: "Самостійна робота системи за відсутності господаря"
    },
    {
       id: 3,
       title: "Вибір індивідуального режиму для кожного виду рослин"
    },
    {
       id: 4,
       title: "Не псує зовнішній вигляд ділянки, всі комунікації розміщені під землею"
    },
    {
       id: 5,
       title: "Можливість швидкої зміни налаштування розбризкування води при зміні форсунок"
    },
    {
       id: 6,
       title: "Довготривала робота"
    },
];

export function AutoPolivPage () {
    return (
        <section className = { styles.mainSection }>
            <section className = { styles.firstSectionImage}>
                <h2>Автоматичний полив</h2>
                <p>Система, що самостійно поливає ділянку у потрібний час оптимальною кількістью води.</p>
            </section>
            <section className = {styles.secondSection}>
                <div>
                    <h3>Автоматичний полив — комфорт для вашої ділянки</h3>
                    <p>
                        Якщо вам набридло приїздити на свою ділянку тільки тому, що необхідно полити теплицю,
                        грядку, клумбу або газон, то для вас є гарна новина, сучасні технології та досвідчені
                        фахівці зможуть звільнити від такого обтяження. Кращим варіантом для вас буде система
                        автоматичного поливу – комплекс комунікацій, що працюють за заданою програмою для полива
                        територій в потрібний час оптимальною кількістю води. Автоматичний полив на ділянці 
                        здійснюється самостійно без подальшого втручання людини.
                    </p>
                </div>
                <img src={polivSecondImage} alt='Poliv second image'/>
            </section>
            <section className={styles.thirdSection}>
                <h3>Як працює система</h3>
                <div className={styles.thirdSectionListContaier}>
                    <ol className={styles.thirdSectionList}>
                        { firstList.map((step) => (
                            <li className = {styles.thirdSectionListItem}>
                                <img src={step.icon} alt={step.title}></img>
                                <p> {step.title} </p>                               
                            </li>
                        ))}
                    </ol>
                </div>
                <p>
                    Схематично роботу автоматичного поливу можна уявити наступним чином:
                    за допомогою насосу вода з місця постачання подається по трубах до 
                    відповідних зон ділянки. Контролер, що управляє за встановленою програмою 
                    здійснює пуск води, подача якої здійснюється електромагнітними клапанами та 
                    поливальними головками.
                    Для правильного монтажу системи автоматичного поливу необхідно підготувати 
                    проект. Фахівці врахують розташування джерела постачання води та технічні параметри 
                    насосу. Для розрахунку довжини електрокабеля необхідно визначити місце розміщення 
                    пульта управління контролера, та врахувати технічні вимоги.
                    Детальний план території з зазначенням розміщення зелених насаджень дозволить 
                    підібрати найбільш сприятливий для рослин варіант зволоження. 
                    При монтажі такої системи, як полив автоматичний, спочатку прокладається 
                    магістральний трубопровід, потім лінії що ведуть до кінцевих зон зрошення. 
                    Закінчуються такі лінії поливальними головками.
                </p>
            </section>
            <section className = { styles.fourthSection } >
                <section className = { styles.fourthSectionLeft }>
                    <h3> Елементи системи автоматичного поливу </h3>
                    <div className = { styles.fourthSectionListContainer }>
                        <ol className = { styles.fourthSectionList }>
                            { secondList.map((step) => (
                                <li className = {styles.fourthSectionListItem}> 
                                    <img src={step.icon} />
                                    <p>{step.title}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                    <p>
                        Електромагнітні клапани є дуже відповідальним елементом комплексу автоматичний полив. 
                        Саме вони за встановленою програмою відкривають або закривають  воду що подається 
                        визначену ділянку. Таким чином відбувається регулювання подачі води на відповідну зону 
                        поливу.  Електромагнітні клапани мають низьковольтне живлення (не більше 25 вольт), що робить 
                        автоматичний полив абсолютно безпечним  для людей: нічого страшного не відбудеться навіть 
                        при випадковому пошкодженні комунікацій садовим інструментом.
                        <br/><br/>
                        Зазвичай встановлюється один вентиль, що регулює, на зону. Для спрощення обслуговування 
                        вузли з клапанами розміщують у легкодоступному місці.
                        <br/><br/>
                        Наша компанія рекомендує своїм клієнтам автоматичний полив на базі обладнання 
                        американського виробництва Нunter, якому властиві такі якості, як надійність 
                        та функціональність.
                    </p>
                </section>
                <img src = {hunterFourthSectionImage} alt = "Hunter" className={styles.hunterFourthSectionImage}/>
            </section>
            <section className={styles.fiveSection}>
                <img src={fiveSectionImage} alt='' />
                <section className = {styles.fiveSectionText}>
                    <h3>Які використовують труби</h3>
                    <p>
                        Щоби змонтувати автоматичний полив газонів, використовують багато видів труб, але самий розповсюджений це поліетиленові 
                        труби та компресійний фітинг. Вони мають довгий термін служби, витримують тиск ґрунтів, 
                        стійки до агресивних середовищ. Для виключення впливу на трубопровід гідравлічних перекосів його 
                        прокладають за якнайменш короткою відстанню. Зазвичай для магістральної лінії 
                        використовують труби з більшим, чим на допоміжних лініях, діаметром.
                        <br/><br/>
                        В деяких випадках для з`єднання труб використовують пайка або різьбові 
                        з`єднання. Наші фахівці виберуть оптимальний варіант в залежності 
                        від індивідуальних особливостей вашої ділянки.
                    </p>
                </section>
            </section>
            <section  className = {styles.sixthSection}>
                <section className= {styles.sixthSectionChildFirst}>
                    <section className = {styles.sixthSectionLeft}>
                        <h3>Автоматичний полив передбачає використання головок та труб наступних видів:</h3>
                        <section>
                            <p>
                                В залежності від типу насаджень, розміру площі поливу вибирають різноманітні 
                                автоматичні спринклери (поливальні головки) та сопла до них. Різноманітність 
                                форм та сили водних струменів досягається застосуванням спеціально розроблених 
                                поливальних головок.
                            </p>
                            <div className = {styles.sixthSectionListContainer}>
                                <ol className={styles.sixthSectionList}>
                                    { thirdList.map((step) => (
                                        <li className={styles.sixthSectionListItem}>
                                            <span className={styles.listItemCicle}>{step.id}</span>
                                            <span className={styles.listItemTextContainer}>
                                                <p>{step.title}</p>
                                            </span>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </section>
                    </section>
                    <img className={styles.sixthSextionSoplaImage} src={sixthSextionSoplaImage} alt='Sopla image'/>
                </section>
                <section className={styles.sixthSectionChildSecond}>
                    <img src= {sixSectionImage} alt = "Remote"/>
                    <div>
                        <h3>Можливості програмування системи автоматичного поливу</h3>
                        <p>
                            Пульт управління дозволяє зручно та просто програмувати  автоматичну систему поливу. Встановити 
                            індивідуальний графік та режим можливо для кожної зони, визначивши час, 
                            тривалість та число поливів. На рідкокристалічному екрані пульта 
                            управління, що має вбудований годинник, відображено вибрану програму. 
                            Управляти контролером можна дистанційно з додатковим пультом і модулем та за 
                            допомогою Wi-Fi.
                            <br/><br/>
                            Додатково ви можете замовити датчик вологості і дощу з вбудованою 
                            міні-метеостанцією. За необхідності такий пристрій здатен призупинити 
                            програму поливу та відновити її роботу після зміни кліматичних умов. Це 
                            гарантує рослинам тільки необхідний полив та забезпечить економію води та 
                            електроенергії.
                        </p>
                    </div>
                </section>
            </section> 
            <section className={styles.seventhSection}>
                <h3>Переваги автоматичного полива на ділянці</h3>
                <div className={styles.seventhSectionListContainer}>
                    <ol className={styles.seventhSectionList}>
                        { fourthList.map( (step) => (
                            <li className={styles.sevenSectionListItem} key={step.id}>
                                <p>{step.title}</p>
                            </li>
                        ))}
                    </ol>
                </div>
                <h3 className={styles.seventhSectionEndingText}>
                    <strong>Системи автоматичного поливу –</strong> це чудове сучасне технічне рішення 
                    що не псує ландшафт та здатне утворити комфорт для власників 
                    заміських будинків та садових ділянок.
                </h3>
            </section>
         </section>
    );
}