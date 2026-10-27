import { useState } from "react";
import "./Hero.css";

// Для телефонов — вертикальная версия ролика (в портретном кадре видны мастер и кабинет),
// для планшетов и ПК — горизонтальная. Файлы лежат в public/videos/.
const VIDEO_DESKTOP = "./videos/hero-massage.mp4";
const VIDEO_MOBILE = "./videos/hero-massage-mobile.mp4";

function pickVideo() {
  if (typeof window === "undefined" || !window.matchMedia) return VIDEO_DESKTOP;
  return window.matchMedia("(max-width: 700px)").matches ? VIDEO_MOBILE : VIDEO_DESKTOP;
}

export default function Hero({ onBookClick }) {
  const [videoFailed, setVideoFailed] = useState(false);
  const [videoSrc] = useState(pickVideo);

  return (
    <section id="hero" className="hero">
      <div className="hero__media">
        {!videoFailed ? (
          <video
            className="hero__video"
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onError={() => setVideoFailed(true)}
          />
        ) : (
          <div className="hero__placeholder" />
        )}
        <div className="hero__overlay" />
      </div>

      <div className="container hero__content">
        <p className="hero__word">Femme Forms</p>
        <h1 className="hero__title">
          Пространство заботы<br /> о теле и внутреннем равновесии
        </h1>
        <p className="hero__text">
          Спокойная атмосфера, индивидуальный подход и время, которое принадлежит только вам.
        </p>

        <div className="hero__actions">
          <button className="btn btn-primary" onClick={onBookClick}>
            Записаться
          </button>
          <a className="btn btn-ghost" href="#services">
            Посмотреть услуги
          </a>
        </div>
      </div>
    </section>
  );
}
