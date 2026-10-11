import { useState } from "react";
import "./Hero.css";

export default function Hero({ onBookClick }) {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section id="hero" className="hero">
      <div className="hero__media">
        {!videoFailed ? (
          <video
            className="hero__video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onError={() => setVideoFailed(true)}
          >
            <source src="./videos/hero-massage.mp4" type="video/mp4" />
          </video>
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
