import Reveal from "../components/Reveal";
import "./CTA.css";

export default function CTA({ onBookClick }) {
  return (
    <section className="section cta">
      <div className="container cta__inner">
        <Reveal>
          <h2 className="cta__title">Подарите себе время на восстановление</h2>
        </Reveal>
        <Reveal delay={100} className="cta__actions">
          <button className="btn btn-primary" onClick={onBookClick}>
            Записаться
          </button>
          <a className="btn btn-outline" href="https://t.me/Femme_forms_Admin" target="_blank" rel="noreferrer">
            Задать вопрос
          </a>
        </Reveal>
      </div>
    </section>
  );
}
