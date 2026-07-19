import { NavLink, Link, useNavigate } from "react-router";
import { useState, useEffect, useMemo, useRef } from "react"

import { MobileMenu } from "./MobileMenu";

import styles from "./Header.module.css";

import search_icon from "@/assets/search_icon.png"
import { searchSite, type SearchItem } from "@/features/site-search/siteSearch";

type HeaderVariant = "home" | "default";

interface HeaderProps {
  variant?: HeaderVariant;
}

export function Header({ variant = "default" }: HeaderProps) {

  const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeResult, setActiveResult] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const searchResults = useMemo(() => searchSite(searchQuery), [searchQuery]);

  const selectSearchResult = (result: SearchItem) => {
      setSearchQuery("");
      setIsSearchOpen(false);
      setActiveResult(-1);
      navigate(result.path, {
          state: { searchTarget: result.text, searchId: Date.now() },
      });
  };

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

  useEffect(() => {
      const closeSearch = (event: PointerEvent) => {
          if (!searchRef.current?.contains(event.target as Node)) setIsSearchOpen(false);
      };
      document.addEventListener("pointerdown", closeSearch);
      return () => document.removeEventListener("pointerdown", closeSearch);
  }, []);




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

        <div className={styles.searchWrapper} ref={searchRef}>
          <div className={styles.inputContainer}>
            <input
              type="search"
              value={searchQuery}
              placeholder="Пошук..."
              aria-label="Пошук по сайту"
              aria-autocomplete="list"
              aria-controls="site-search-results"
              aria-expanded={isSearchOpen && searchQuery.trim().length > 0}
              onFocus={() => setIsSearchOpen(true)}
              onChange={(event) => {
                setSearchQuery(event.target.value);
                setIsSearchOpen(true);
                setActiveResult(-1);
              }}
              onKeyDown={(event) => {
                if (event.key === "ArrowDown") {
                  event.preventDefault();
                  setActiveResult((current) => Math.min(current + 1, searchResults.length - 1));
                } else if (event.key === "ArrowUp") {
                  event.preventDefault();
                  setActiveResult((current) => Math.max(current - 1, 0));
                } else if (event.key === "Enter" && searchResults.length) {
                  event.preventDefault();
                  selectSearchResult(searchResults[Math.max(activeResult, 0)]);
                } else if (event.key === "Escape") {
                  setIsSearchOpen(false);
                }
              }}
            />
            <img className={styles.searchIcon} src={search_icon} alt=""/>
          </div>

          {isSearchOpen && searchQuery.trim() && (
            <div className={styles.searchResults} id="site-search-results" role="listbox">
              {searchResults.length ? searchResults.map((result, index) => (
                <button
                  type="button"
                  role="option"
                  aria-selected={activeResult === index}
                  className={`${styles.searchResult} ${activeResult === index ? styles.searchResultActive : ""}`}
                  key={`${result.path}-${result.title}`}
                  onMouseEnter={() => setActiveResult(index)}
                  onClick={() => selectSearchResult(result)}
                >
                  <span>{result.title}</span>
                  <small>{result.path.startsWith('/catalog/') ? 'Товар' : 'Розділ сайту'}</small>
                </button>
              )) : (
                <p className={styles.noResults}>Нічого не знайдено</p>
              )}
            </div>
          )}
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
