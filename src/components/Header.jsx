import { useEffect, useState } from "react";
import useScrollLock from "../hooks/useScrollLock";
import "./Header.css";

const NAV_LINKS = [
  { href: "#hero", label: "Главная" },
  { href: "#services", label: "Услуги" },
  { href: "#about", label: "О студии" },
  { href: "#masters", label: "Мастера" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contacts", label: "Контакты" },
];

export default function Header({ onBookClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useScrollLock(menuOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Закрываем меню при переходе на десктопную ширину и по Escape
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 860) setMenuOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  // Переход по якорю из мобильного меню: сначала снимаем блокировку прокрутки
  // (меню закрывается), и только потом плавно скроллим к секции.
  const handleMobileNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  };

  const handleMobileBook = () => {
    setMenuOpen(false);
    setTimeout(onBookClick, 60);
  };

  return (
    <>
      <header
        className={`header ${scrolled ? "header--scrolled" : ""} ${menuOpen ? "header--menu-open" : ""}`}
      >
        <div className="container header__row">
          <a href="#hero" className="header__logo" onClick={() => setMenuOpen(false)}>
            Femme Forms
          </a>

          <nav className="header__nav" aria-label="Основная навигация">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header__actions">
            <button className="btn btn-primary header__cta" onClick={onBookClick}>
              Записаться
            </button>

            <button
              className={`header__burger ${menuOpen ? "header__burger--open" : ""}`}
              aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Меню вынесено за пределы <header>: backdrop-filter у шапки иначе
          «обрезает» fixed-элементы по высоте шапки (баг на iOS) */}
      <div
        className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav className="mobile-menu__nav" aria-label="Мобильная навигация">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => handleMobileNav(e, link.href)}>
              {link.label}
            </a>
          ))}
        </nav>
        <button className="btn btn-primary mobile-menu__cta" onClick={handleMobileBook}>
          Записаться
        </button>
      </div>
    </>
  );
}
