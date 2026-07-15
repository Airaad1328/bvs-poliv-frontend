import { NavLink,Link } from "react-router";
import {useState, useEffect } from "react"

import { MobileMenu } from "./MobileMenu";

import styles from "./Header.module.css";

import search_icon from "@/assets/search_icon.png"

type HeaderVariant = "home" | "default";

interface HeaderProps {
  variant?: HeaderVariant;
}

export function Header({ variant = "default" }: HeaderProps) {

  const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false);

  const openMobileMenu = () => {
      setIsMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
      setIsMobileMenuOpen(false);
  };

  useEffect(() => {
      const html = document.documentElement;
      const body = document.body;

      const previousHtmlOverflow = html.style.overflow;
      const previousBodyOverflow = body.style.overflow;

      if (isMobileMenuOpen) {
          html.style.overflow = "hidden";
          body.style.overflow = "hidden";
      }

      return () => {
          html.style.overflow = previousHtmlOverflow;
          body.style.overflow = previousBodyOverflow;
      };
  }, [isMobileMenuOpen]);




  return (
    <>
      <header className={`${styles.header} ${styles[variant]}`}>

        <button
          type="button"
          className={styles.burgerButton}
          onClick={openMobileMenu}
          aria-label="Открыть меню"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation">
            <span />
            <span />
            <span />
          </button>

        <Link className={styles.logoLink} to="/home">ТОВ БВС-ПОЛИВ</Link>

        <nav className={styles.nav}>

          <NavLink to="/about">ПРО НАС</NavLink>
          <NavLink to="/auto-poliv">АВТО ПОЛИВ</NavLink>
          <NavLink to="/tools">ОБЛАДНАННЯ</NavLink>
          <NavLink to="/services">ПОСЛУГИ</NavLink>
          <NavLink to="/price">ПРАЙС</NavLink>
          <NavLink to="/complete-jobs">ВИКОНАНІ РОБОТИ</NavLink>
          <NavLink to="/contacts">КОНТАКТИ</NavLink>
        </nav>

        <div className={styles.inputContainer}>
          <input/>
          <img className={styles.searchIcon} src={search_icon}/>
        </div>

      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        variant={variant}
        onClose={closeMobileMenu}
      />
    </>
  );
}