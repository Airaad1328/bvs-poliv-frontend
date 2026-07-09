import { NavLink,Link } from "react-router";
import styles from "./Header.module.css";

import search_icon from "@/assets/search_icon.png"

type HeaderVariant = "home" | "default";

interface HeaderProps {
  variant?: HeaderVariant;
}

export function Header({ variant = "default" }: HeaderProps) {
  return (
    <header className={`${styles.header} ${styles[variant]}`}>

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
  );
}