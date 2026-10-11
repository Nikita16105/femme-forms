import Reveal from "../components/Reveal";
import "./WhyUs.css";

const POINTS = [
  "Индивидуальный подход к каждому визиту",
  "Комфортная и тихая атмосфера",
  "Внимание к деталям и вашим ощущениям",
  "Искренняя забота о клиенте",
  "Профессиональная работа мастеров",
];

export default function WhyUs() {
  return (
    <section className="section whyus">
      <div className="container whyus__grid">
        <Reveal className="whyus__heading">
          <p className="eyebrow">Почему Femme Forms</p>
          <h2 className="section-heading">Внимание к тому, что важно вам</h2>
        </Reveal>

        <ul className="whyus__list">
          {POINTS.map((point, i) => (
            <Reveal as="li" key={point} delay={i * 60} className="whyus__item">
              {point}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
