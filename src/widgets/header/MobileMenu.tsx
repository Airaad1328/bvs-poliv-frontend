import { Link, NavLink } from "react-router";

import styles from './Header.module.css';

interface MobileMenuProps {
    isOpen: boolean;
    variant: String;
    onClose: () => void;
}

export function MobileMenu({
    isOpen,
    variant,
    onClose,
}: MobileMenuProps) {
    return (
        <div
            className={`${styles.mobileMenuWrapper} ${
                isOpen ? styles.mobileMenuWrapperOpen : ''
            }`}
            aria-hidden={!isOpen}
        >
            <button
                type="button"
                className={styles.mobileMenuOverlay}
                onClick={onClose}
                aria-label="Закрити меню"
                tabIndex={isOpen ? 0 : -1}
            />

            <aside
                id="mobile-navigation"
                className={`${styles.mobileMenu} ${
                    isOpen ? styles.mobileMenuOpen : ''
                } ${
                    variant === 'home'
                        ? styles.mobileMenuHome
                        : styles.mobileMenuDefault
                }`}
            >
                <div className={styles.mobileMenuHeader}>
                    <Link
                        to="/home"
                        className={styles.mobileLogo}
                        onClick={onClose}
                    >
                        ТОВ БВС-ПОЛИВ
                    </Link>

                    <button
                        type="button"
                        className={styles.closeButton}
                        onClick={onClose}
                        aria-label="Закрыть меню"
                    >
                        ×
                    </button>
                </div>

                <nav className={styles.mobileNavigation}>
                    <NavLink to="/home" onClick={onClose}>
                        Про нас
                    </NavLink>

                    <NavLink to="/auto-poliv" onClick={onClose}>
                        Авто полив
                    </NavLink>

                    <NavLink to="/tools" onClick={onClose}>
                       Обладнання
                    </NavLink>

                    <NavLink to="/services" onClick={onClose}>
                        Послуги
                    </NavLink>

                    <NavLink to="/price" onClick={onClose}>
                        Прайс
                    </NavLink>

                    <NavLink to="/complete-jobs" onClick={onClose}>
                        Виконані роботи
                    </NavLink>

                    <NavLink to="/contacts" onClick={onClose}>
                        Контакти
                    </NavLink>
                </nav>
            </aside>
        </div>
    );
}