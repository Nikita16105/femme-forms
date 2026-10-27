import { useEffect, useState } from "react";
import "./StickyBookBar.css";

// Нижняя панель записи — только на телефонах (см. CSS). Появляется,
// когда пользователь прокрутил первый экран, и всегда оставляет
// «Записаться» под большим пальцем.
export default function StickyBookBar({ onBookClick }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`sticky-bar ${visible ? "sticky-bar--visible" : ""}`} aria-hidden={!visible}>
      <button className="btn btn-primary sticky-bar__book" onClick={onBookClick} tabIndex={visible ? 0 : -1}>
        Записаться
      </button>
      <a
        className="btn btn-outline sticky-bar__ask"
        href="https://t.me/Femme_forms_Admin"
        target="_blank"
        rel="noreferrer"
        tabIndex={visible ? 0 : -1}
      >
        Написать
      </a>
    </div>
  );
}
