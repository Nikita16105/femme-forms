import "./Footer.css";

const NAV_LINKS = [
  { href: "#hero", label: "Главная" },
  { href: "#services", label: "Услуги" },
  { href: "#about", label: "О студии" },
  { href: "#masters", label: "Мастера" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contacts", label: "Контакты" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__row">
        <div className="footer__brand">
          <div className="footer__logo">Femme Forms</div>
          <p className="footer__address">ул. Александры Монаховой, 88 к 3, Москва</p>
        </div>

        <nav className="footer__nav" aria-label="Навигация в подвале">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer__contacts">
          <a href="https://t.me/Femme_forms_Admin" target="_blank" rel="noreferrer">
            Telegram
          </a>
          <a href="https://wa.me/79015460659" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </div>

      <div className="container">
        <p className="footer__copy">© 2026 Femme Forms</p>
      </div>
    </footer>
  );
}
