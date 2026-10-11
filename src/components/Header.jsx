import { useEffect, useState } from "react";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="container header__row">
        <a href="#hero" className="header__logo">
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

      <div className={`header__mobile ${menuOpen ? "header__mobile--open" : ""}`}>
        <nav aria-label="Мобильная навигация">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={handleNavClick}>
              {link.label}
            </a>
          ))}
        </nav>
        <button
          className="btn btn-primary header__mobile-cta"
          onClick={() => {
            handleNavClick();
            onBookClick();
          }}
        >
          Записаться
        </button>
      </div>
    </header>
  );
}
