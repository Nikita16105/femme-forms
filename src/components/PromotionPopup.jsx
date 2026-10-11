import { useEffect, useState } from "react";
import promotions from "../data/promotions";
import "./PromotionPopup.css";

const SHOW_DELAY_MS = 18000;
const SESSION_KEY = "ff_promo_shown";

export default function PromotionPopup({ onBookClick }) {
  const promo = promotions.find((p) => p.enabled);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!promo) return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    let shown = false;
    const show = () => {
      if (shown) return;
      shown = true;
      setVisible(true);
      sessionStorage.setItem(SESSION_KEY, "1");
    };

    const timer = setTimeout(show, SHOW_DELAY_MS);

    const onLeave = (e) => {
      if (e.clientY <= 0) show();
    };
    document.addEventListener("mouseleave", onLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [promo]);

  if (!promo || !visible) return null;

  const close = () => setVisible(false);

  return (
    <div className="promo-popup">
      <button className="promo-popup__close" onClick={close} aria-label="Закрыть">
        ✕
      </button>

      <span className="promo-popup__eyebrow">{promo.title}</span>
      <p className="promo-popup__text">{promo.text}</p>

      <div className="promo-popup__actions">
        <button
          className="btn btn-primary promo-popup__btn"
          onClick={() => {
            close();
            onBookClick();
          }}
        >
          {promo.buttonText}
        </button>
      </div>
    </div>
  );
}
