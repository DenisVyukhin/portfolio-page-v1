"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { useTheme } from "next-themes";

import styles from "./Header.module.css";

const navItems = [
   ["Проекты", "#projects"],
   ["Стек", "#stack"],
   ["Обо мне", "#about-me"],
   ["Контакты", "#contacts"],
];

function Header() {
   const { resolvedTheme, setTheme } = useTheme();
   const [isScrolled, setIsScrolled] = useState(false);
   const [isNavigationOpen, setIsNavigationOpen] = useState(false);
   const [isMounted, setIsMounted] = useState(false);

   useEffect(() => {
      setIsMounted(true);
      const updateHeaderState = () => setIsScrolled(window.scrollY >= 48);

      updateHeaderState();
      window.addEventListener("scroll", updateHeaderState, { passive: true });

      return () => window.removeEventListener("scroll", updateHeaderState);
   }, []);

   useEffect(() => {
      document.body.style.overflow = isNavigationOpen ? "hidden" : "";

      return () => {
         document.body.style.overflow = "";
      };
   }, [isNavigationOpen]);

   const closeNavigation = () => setIsNavigationOpen(false);
   const toggleTheme = () => setTheme(resolvedTheme === "dark" ? "light" : "dark");

   return (
      <>
         <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
            <button
               type="button"
               onClick={() => setIsNavigationOpen(true)}
               className={styles.burger}
               aria-label="Открыть меню"
            >
               <FiMenu size={22} />
            </button>

            <Link className={styles.logo} href="/" onClick={closeNavigation}>
               KodersUp
            </Link>

            <nav className={styles.desktopNav} aria-label="Основная навигация">
               {navItems.map(([label, href]) => (
                  <a href={href} key={href}>
                     {label}
                  </a>
               ))}
            </nav>

            <button
               type="button"
               onClick={toggleTheme}
               className={styles.themeButton}
               aria-label="Переключить тему"
            >
               {isMounted && resolvedTheme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
         </header>

         <button
            type="button"
            aria-label="Закрыть меню"
            onClick={closeNavigation}
            className={`${styles.backdrop} ${isNavigationOpen ? styles.backdropVisible : ""}`}
         />

         <aside
            className={`${styles.navigation} ${isNavigationOpen ? styles.navigationOpen : ""}`}
            aria-hidden={!isNavigationOpen}
         >
            <div className={styles.navHead}>
               <h3>KodersUp</h3>
               <button type="button" onClick={closeNavigation} aria-label="Закрыть меню">
                  <FiX size={24} />
               </button>
            </div>
            <nav onClick={closeNavigation} className={styles.navContent}>
               {navItems.map(([label, href]) => (
                  <a href={href} key={href}>
                     <span>&gt;</span>
                     {label}
                  </a>
               ))}
            </nav>
         </aside>
      </>
   );
}

export default Header;
