import { useMemo, useState } from "react";
import services, { CATEGORIES } from "../data/services";
import ServiceCard from "../components/ServiceCard";
import ServiceDetailModal from "../components/ServiceDetailModal";
import Reveal from "../components/Reveal";
import "./Services.css";

export default function Services({ onSelectService }) {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
  const [detailsService, setDetailsService] = useState(null);

  const visibleServices = useMemo(
    () => services.filter((s) => s.category === activeCategory),
    [activeCategory]
  );

  return (
    <section id="services" className="section services">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Услуги</p>
          <h2 className="section-heading">Выберите то, что нужно телу сегодня</h2>
          <p className="section-intro">
            Нажмите «Подробнее», чтобы увидеть полное описание, или сразу переходите к записи.
          </p>
        </Reveal>

        <div className="services__tabs">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              className={`services__tab ${activeCategory === category ? "services__tab--active" : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="services__grid">
          {visibleServices.map((service, i) => (
            <Reveal key={service.id} delay={i * 50}>
              <ServiceCard
                service={service}
                onOpenDetails={setDetailsService}
                onBook={onSelectService}
              />
            </Reveal>
          ))}
        </div>
      </div>

      <ServiceDetailModal
        service={detailsService}
        onClose={() => setDetailsService(null)}
        onBook={onSelectService}
      />
    </section>
  );
}
