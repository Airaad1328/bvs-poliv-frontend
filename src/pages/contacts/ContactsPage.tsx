import styles from './ContactsPage.module.css';

import contactHeroImage from '@/assets/contacts-page/contact-hero.jpg';

import companyIcon from '@/assets/contacts-page/company-icon.png';
import addressIcon from '@/assets/contacts-page/address-icon.png';
import phoneIcon from '@/assets/contacts-page/phone-icon.png';
import mailIcon from '@/assets/contacts-page/mail-icon.png';
import supportIcon from '@/assets/contacts-page/support-icon.png';

const contacts = [
    {
        title: 'Компанія',
        text: 'ТОВ БВС-ПОЛИВ',
        icon: companyIcon,
        alt: 'Компанія',
    },
    {
        title: 'Адреса',
        text: 'Україна, Київ 04114, вул. Автозаводська, 99/4',
        icon: addressIcon,
        alt: 'Адреса',
    },
    {
        title: 'Телефони',
        text: '(044) 360 71 51;  (097) 033 89 64;  (050) 902 20 76',
        icon: phoneIcon,
        alt: 'Телефони',
    },
    {
        title: 'Пошта',
        text: 'watering@meta.ua',
        icon: mailIcon,
        alt: 'Пошта',
    },
    {
        title: '',
        text: 'Допоможемо підібрати обладнання, прорахуємо проєкт і запропонуємо оптимальне рішення.',
        icon: supportIcon,
        alt: 'Консультація',
    },
];

const mapSrc =
    'https://www.google.com/maps?q=%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0,%20%D0%9A%D0%B8%D1%97%D0%B2,%20%D0%B2%D1%83%D0%BB.%20%D0%90%D0%B2%D1%82%D0%BE%D0%B7%D0%B0%D0%B2%D0%BE%D0%B4%D1%81%D1%8C%D0%BA%D0%B0,%2099%2F4&output=embed';

export function ContactsPage() {
    return (
        <main className={styles.contactsPage}>
            <section
                className={styles.heroSection}
                style={{
                    backgroundImage: `linear-gradient(90deg, rgba(19, 40, 41, 0.68) 0%, rgba(19, 40, 41, 0.42) 36%, rgba(19, 40, 41, 0) 70%), url(${contactHeroImage})`,
                }}
            >
                <h2>Контакти</h2>
                <p>
                    Ми завжди на зв’язку — допоможемо з вибором, прорахунком і монтажем систем автоматичного поливу.
                </p>
            </section>

            <section className={styles.contactsSection}>
                <div className={styles.contactsColumn}>
                    <h3>Зв’яжіться з нами</h3>

                    <ul className={styles.contactsList}>
                        {contacts.map((contact) => (
                            <li className={styles.contactCard} key={contact.alt}>
                                <img src={contact.icon} alt={contact.alt} />

                                <div className={styles.contactText}>
                                    {contact.title && <h4>{contact.title}</h4>}
                                    <p>{contact.text}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.mapColumn}>
                    <h3>Наш офіс на мапі</h3>

                    <div className={styles.mapWrapper}>
                        <iframe
                            title="Офіс ТОВ БВС-ПОЛИВ на Google Maps"
                            src={mapSrc}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}