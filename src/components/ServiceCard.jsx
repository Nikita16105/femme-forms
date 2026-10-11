import { formatPrice, shortDescription } from "../utils/format";
import "./ServiceCard.css";

export default function ServiceCard({ service, onOpenDetails, onBook }) {
  return (
    <article className="service-card">
      <div className="service-card__body">
        <h3 className="service-card__title">{service.title}</h3>

        {service.description && (
          <p className="service-card__desc">{shortDescription(service.description)}</p>
        )}

        <div className="service-card__meta">
          <span>{service.duration}</span>
          <span className="service-card__price">{formatPrice(service.price)}</span>
        </div>

        <div className="service-card__actions">
          <button className="service-card__link" onClick={() => onOpenDetails(service)}>
            Подробнее
          </button>
          <button className="btn btn-outline service-card__book" onClick={() => onBook(service)}>
            Записаться
          </button>
        </div>
      </div>
    </article>
  );
}
