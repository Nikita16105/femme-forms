import masters from "../data/masters";
import reviews from "../data/reviews";
import MasterCard from "../components/MasterCard";
import Reveal from "../components/Reveal";
import "./Masters.css";

export default function Masters({ onSelectMaster }) {
  return (
    <section id="masters" className="section masters">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Мастера</p>
          <h2 className="section-heading">Те, кто работает с вашим телом</h2>
        </Reveal>

        <div className="masters__grid">
          {masters.map((master, i) => {
            const count = reviews.filter((r) => r.master === master.name).length;
            return (
              <Reveal key={master.id} delay={i * 90}>
                <MasterCard master={master} reviewCount={count} onSelect={onSelectMaster} />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
