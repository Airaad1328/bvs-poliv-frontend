import styles from './Footer.module.css'

type FooterVariant = "home" | "default";

interface FooterProps {
    variant?: FooterVariant;
}

export function Footer( { variant = "default" }:FooterProps ) {

    return (
        <footer className={`${styles.footer} ${styles[variant]}`}>
            <p>© ТОВ БВС-ПОЛИВ</p>
        </footer>
    );
}