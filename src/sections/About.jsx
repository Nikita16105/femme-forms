import Reveal from "../components/Reveal";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <Reveal className="about__image">
          <img
            src="./images/about-space.jpg"
            alt="Интерьер студии Femme Forms"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.parentElement.classList.add("about__image--empty");
            }}
          />
        </Reveal>

        <Reveal delay={120} className="about__content">
          <p className="eyebrow">О студии</p>
          <h2 className="section-heading">Место, где можно остановиться</h2>
          <p className="about__text">
            Femme Forms — это студия, где время замедляется. Мы уделяем внимание каждой детали:
            тишине в зале, мягкому свету, аромату и тому, как проходит именно ваш сеанс.
          </p>
          <p className="about__text">
            Здесь нет спешки и конвейера. Каждый визит — это индивидуальный подход мастера
            к вашему запросу и состоянию, забота о комфорте от порога до момента, когда вы уходите.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
