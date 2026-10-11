import { formatPrice } from "../utils/format";
import "./ServiceDetailModal.css";

export default function ServiceDetailModal({ service, onClose, onBook }) {
  if (!service) return null;

  return (
    <div className="service-modal" role="dialog" aria-modal="true" aria-label={service.title}>
      <div className="service-modal__backdrop" onClick={onClose} />

      <div className="service-modal__panel">
        <button className="service-modal__close" onClick={onClose} aria-label="Закрыть">
          ✕
        </button>

        <p className="eyebrow">{service.category}</p>
        <h3 className="service-modal__title">{service.title}</h3>

        <div className="service-modal__meta">
          <span>{service.duration}</span>
          <span className="service-modal__price">{formatPrice(service.price)}</span>
        </div>

        {service.description && (
          <p className="service-modal__desc">{service.description}</p>
        )}

        <button
          className="btn btn-primary service-modal__book"
          onClick={() => {
            onBook(service);
            onClose();
          }}
        >
          Записаться
        </button>
      </div>
    </div>
  );
}
